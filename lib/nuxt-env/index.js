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
    exec(
      "yarn add -D @doraemon-module/nuxt-env; yarn add @nuxtjs/proxy@^2.1.0",
      function (error, stdout, stderr) {
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        if (error !== null) {
          console.log("exec error: " + error);
        }
        exec("yarn lintfix");
      }
    );

    const __dirname = dirname(fileURLToPath(import.meta.url));

    const env = mkdirp(path.join(process.cwd(), "env"));

    const functions = mkdirp(path.join(process.cwd(), "functions"));
    copy(
      path.join(__dirname, "lib", "isProduction.js"),
      path.join(functions, "isProduction.js")
    );

    const lib = mkdirp(path.join(env, "lib"));
    copy(path.join(__dirname, "lib", "local.js"), path.join(lib, "local.js"));
    copy(path.join(__dirname, "lib", "dev.js"), path.join(lib, "dev.js"));
    copy(path.join(__dirname, "lib", "main.js"), path.join(lib, "main.js"));
    copy(path.join(__dirname, "lib", "index.js"), path.join(env, "index.js"));

    write(undefined, undefined, "buildModules", (node) => {
      const name = "@doraemon-module/nuxt-env";
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

    write(undefined, undefined, "modules", (node) => {
      const name = "@nuxtjs/proxy";
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

    {
      let source = ts.createSourceFile(
        "nuxt.config.js",
        readFileSync("nuxt.config.js", "utf8"),
        ts.ScriptTarget.Latest
      );
      let isExist = false;
      for (const statement of source.statements) {
        if (statement.kind === 266) {
          if (statement.importClause.name.escapedText === "env") {
            isExist = true;
          }
        }
      }
      if (!isExist) {
        source.statements.unshift({
          kind: 266,
          importClause: {
            kind: 267,
            name: {
              kind: 79,
              escapedText: "isProduction",
            },
          },
          moduleSpecifier: {
            kind: 10,
            text: "./functions/isProduction.js",
          },
        });
        source.statements.unshift({
          kind: 266,
          importClause: {
            kind: 267,
            name: {
              kind: 79,
              escapedText: "env",
            },
          },
          moduleSpecifier: {
            kind: 10,
            text: "./env/index.js",
          },
        });
      }
      writeFileSync(
        "nuxt.config.js",
        ts.createPrinter().printFile(source),
        "utf8"
      );
    }

    {
      let source = ts.createSourceFile(
        "config",
        readFileSync(path.join(__dirname, "lib", "config.js"), "utf8"),
        ts.ScriptTarget.Latest
      );

      for (let statement of source.statements) {
        if (ts.isExportAssignment(statement)) {
          write(undefined, undefined, undefined, (node) => {
            const name = "proxy";
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
    }

    {
      let source = ts.createSourceFile(
        "runtime",
        readFileSync(path.join(__dirname, "lib", "runtime.js"), "utf8"),
        ts.ScriptTarget.Latest
      );

      for (let statement of source.statements) {
        if (ts.isExportAssignment(statement)) {
          write(undefined, undefined, undefined, (node) => {
            const name = "publicRuntimeConfig";
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
    }
  },
  remove: () => {},
};
