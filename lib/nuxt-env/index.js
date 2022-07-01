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
      "yarn add -D @doraemon-module/nuxt-env",
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
    copy(
      path.join(__dirname, "lib", "_gitignore"),
      path.join(env, ".gitignore")
    );

    const lib = mkdirp(path.join(env, "lib"));
    copy(path.join(__dirname, "lib", "local.js"), path.join(lib, "local.js"));
    copy(path.join(__dirname, "lib", "dev.js"), path.join(lib, "dev.js"));
    copy(path.join(__dirname, "lib", "main.js"), path.join(lib, "main.js"));

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
  },
  remove: () => {},
};
