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
    exec(
      "yarn add lodash.startswith pinia @pinia/nuxt @nuxtjs/composition-api @nuxtjs/axios; yarn add -D @doraemon-module/nuxt-auth @nuxtjs/router-extras@^1.1.1",
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

    const pinia = mkdirp(path.join(process.cwd(), "pinia"));
    copy(path.join(__dirname, "lib", "auth.js"), path.join(pinia, "auth.js"));
    copy(
      path.join(__dirname, "lib", "application.js"),
      path.join(pinia, "application.js")
    );

    const plugins = mkdirp(path.join(process.cwd(), "plugins"));
    copy(
      path.join(__dirname, "lib", "axios.js"),
      path.join(plugins, "axios.js")
    );
    copy(
      path.join(__dirname, "lib", "redirect.js"),
      path.join(plugins, "redirect.js")
    );

    write(undefined, undefined, "plugins", (node) => {
      const name = "@/plugins/axios";
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

    write(undefined, undefined, "plugins", (node) => {
      const name = "@/plugins/redirect";
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

    const components = mkdirp(path.join(process.cwd(), "components"));
    const index = mkdirp(path.join(components, "index"));
    copy(
      path.join(__dirname, "lib", "Aside.vue"),
      path.join(index, "Aside.vue")
    );

    const functions = mkdirp(path.join(process.cwd(), "functions"));
    copy(
      path.join(__dirname, "lib", "createMenu.js"),
      path.join(functions, "createMenu.js")
    );

    const middleware = mkdirp(path.join(process.cwd(), "middleware"));
    copy(
      path.join(__dirname, "lib", "router.js"),
      path.join(middleware, "router.js")
    );

    const pages = mkdirp(path.join(process.cwd(), "pages"));
    copy(path.join(__dirname, "lib", "init.vue"), path.join(pages, "init.vue"));
    const account = mkdirp(path.join(pages, "account"));
    copy(
      path.join(__dirname, "lib", "signin.vue"),
      path.join(account, "signin.vue")
    );

    write(undefined, undefined, "modules", (node) => {
      const name = "@nuxtjs/axios";
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

    write(undefined, undefined, "buildModules", (node) => {
      const name = "@nuxtjs/router-extras";
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

    write(undefined, undefined, "buildModules", (node) => {
      const name = "@doraemon-module/nuxt-auth";
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

    write(undefined, undefined, "buildModules", (node) => {
      const name = "@nuxtjs/composition-api/module";
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

    write(undefined, undefined, "buildModules", (node) => {
      const name = "@pinia/nuxt";
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
        "config",
        readFileSync(path.join(__dirname, "lib", "config.js"), "utf8"),
        ts.ScriptTarget.Latest
      );

      for (let statement of source.statements) {
        if (ts.isExportAssignment(statement)) {
          write(undefined, undefined, undefined, (node) => {
            const name = "router";
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
