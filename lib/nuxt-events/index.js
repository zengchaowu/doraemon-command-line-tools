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
      "yarn add EventEmitter@^1.0.0; yarn add -D @doraemon-module/nuxt-events",
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

    const events = mkdirp(path.join(process.cwd(), "events"));
    copy(
      path.join(__dirname, "lib", "index.js"),
      path.join(events, "index.js")
    );

    const lib = mkdirp(path.join(events, "lib"));
    copy(
      path.join(__dirname, "lib", "application.js"),
      path.join(lib, "application.js")
    );

    write(undefined, undefined, "buildModules", (node) => {
      const name = "@doraemon-module/nuxt-events";
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
