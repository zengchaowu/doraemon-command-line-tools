import path from "path";
import ts from "typescript";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import write from "@doraemon-module/nuxt-functions/lib/write.js";
import { exec } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

export default {
  add: async () => {
    exec("yarn add -D nuxt-windicss", function (error, stdout, stderr) {
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
      exec("yarn lintfix");
    });

    const __dirname = dirname(fileURLToPath(import.meta.url));

    const assets = mkdirp(path.join(process.cwd(), "assets"));
    const styles = mkdirp(path.join(assets, "styles"));
    copy(
      path.join(__dirname, "assets", "styles", "base.css"),
      path.join(styles, "base.css")
    );
    copy(
      path.join(__dirname, "assets", "styles", "components.css"),
      path.join(styles, "components.css")
    );
    copy(
      path.join(__dirname, "assets", "styles", "utilities.css"),
      path.join(styles, "utilities.css")
    );

    write(undefined, undefined, "buildModules", (node) => {
      const name = "nuxt-windicss";
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

    write(undefined, undefined, "css", (node) => {
      const name = "virtual:windi-base.css";
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
    write(undefined, undefined, "css", (node) => {
      const name = "~/assets/styles/base.css";
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
    write(undefined, undefined, "css", (node) => {
      const name = "virtual:windi-components.css";
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
    write(undefined, undefined, "css", (node) => {
      const name = "~/assets/styles/components.css";
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
    write(undefined, undefined, "css", (node) => {
      const name = "virtual:windi-utilities.css";
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
    write(undefined, undefined, "css", (node) => {
      const name = "~/assets/styles/utilities.css";
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
          const name = "windicss";
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
