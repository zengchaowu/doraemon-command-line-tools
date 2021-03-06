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
    exec("yarn add @nuxtjs/dayjs", function (error, stdout, stderr) {
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
      exec("yarn lintfix");
    });

    const __dirname = dirname(fileURLToPath(import.meta.url));

    write(undefined, undefined, "modules", (node) => {
      const name = "@nuxtjs/dayjs";
      let isExist = false;
      for (let element of node.elements) {
        if (element.text === name) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        node.elements.push(ts.createStringLiteral(name));
      }
    });

    let source = ts.createSourceFile(
      "config",
      readFileSync(path.join(__dirname, "lib", "config.js"), "utf8"),
      ts.ScriptTarget.Latest
    );

    for (let statement of source.statements) {
      if (ts.isExportAssignment(statement)) {
        write(undefined, undefined, undefined, (node) => {
          const name = "dayjs";
          let isExist = false;
          for (let propertie of node.expression.properties) {
            if (
              propertie.name.escapedText === name ||
              propertie.name.text === name
            ) {
              isExist = true;
              break;
            }
          }
          if (!isExist) {
            node.expression.properties.push({
              kind: 296,
              name: ts.createStringLiteral(name),
              initializer: statement.expression,
            });
          }
        });
      }
    }
  },
  remove: () => {},
};
