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
      "yarn add -D @doraemon-module/nuxt-network-http",
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

    const functions = mkdirp(path.join(process.cwd(), "functions"));
    copy(
      path.join(__dirname, "lib", "request.js"),
      path.join(functions, "request.js")
    );

    const network = mkdirp(path.join(process.cwd(), "network"));
    const http = mkdirp(path.join(network, "http"));
    copy(
      path.join(__dirname, "lib", "signin.js"),
      path.join(http, "signin.js")
    );

    write(undefined, undefined, "buildModules", (node) => {
      const name = "@doraemon-module/nuxt-network-http";
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