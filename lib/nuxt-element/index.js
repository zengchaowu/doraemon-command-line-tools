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
    exec("yarn add element-ui@^2.15.6", function (error, stdout, stderr) {
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
      exec("yarn lintfix");
    });

    const __dirname = dirname(fileURLToPath(import.meta.url));

    const plugins = mkdirp(path.join(process.cwd(), "plugins"));
    copy(
      path.join(__dirname, "lib", "element-ui.js"),
      path.join(plugins, "element-ui.js")
    );

    write(undefined, undefined, "css", (node) => {
      const name = "element-ui/lib/theme-chalk/index.css";
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
      const name = "@/plugins/element-ui";
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
