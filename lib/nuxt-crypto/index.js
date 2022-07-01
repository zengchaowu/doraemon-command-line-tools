import path from "path";
import ts from "typescript";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import write from "@doraemon-module/nuxt-functions/lib/write.js";
import { exec } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync, writeFileSync } from "fs";

export default {
  add: async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const _static = mkdirp(path.join(process.cwd(), "static"));
    const _js = mkdirp(path.join(_static, "js"));
    copy(
      path.join(__dirname, "lib", "crypto.min.js"),
      path.join(_js, "crypto.min.js")
    );

    write(undefined, undefined, "head", (node) => {
      const name = "script";
      let isExist = false;
      for (let propertie of node.properties) {
        if (
          propertie.name.escapedText === name ||
          propertie.name.text === name
        ) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        node.properties.push({
          kind: 296,
          name: ts.createStringLiteral(name),
          initializer: {
            kind: 204,
          },
        });
      }
    });

    {
      let content = readFileSync("package.json", "utf8");
      content = content.replaceAll(
        "--ignore-path .gitignore",
        "--ignore-path .prettierignore"
      );
      content = content.replaceAll(
        "eslint --cache",
        "eslint --cache --ignore-path .prettierignore"
      );
      content = content.replaceAll(
        "prettier --check --ignore-unknown",
        "prettier --check --ignore-unknown --ignore-path .prettierignore"
      );
      writeFileSync("package.json", content);
    }
    {
      let content = readFileSync(".prettierignore", "utf8");
      if (content.indexOf("# doraemon\n/static") === -1) {
        content += "\n# doraemon\n/static\n";
        writeFileSync(".prettierignore", content);
      }
    }

    exec("yarn lintfix");

    setTimeout(() => {
      let source = ts.createSourceFile(
        "config",
        readFileSync(path.join(__dirname, "lib", "config.js"), "utf8"),
        ts.ScriptTarget.Latest
      );

      for (let statement of source.statements) {
        if (ts.isExportAssignment(statement)) {
          write(undefined, undefined, "head.script", (node) => {
            const name = "/js/crypto.min.js";
            let isExist = false;
            for (let element of node.elements) {
              console.log(element);
              if (element.properties[0].initializer.text === name) {
                isExist = true;
                break;
              }
            }
            if (!isExist) {
              node.elements.push(statement.expression);
            }
          });
        }
      }
      exec("yarn lintfix");
    }, 2000);
  },
  remove: () => {},
};
