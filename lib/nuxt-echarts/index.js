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
      "yarn add echarts@^5.3.0 vue-echarts@^6.0.2",
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

    write(undefined, undefined, "build", (node) => {
      const name = "transpile";
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

    exec("yarn lintfix");

    setTimeout(() => {
      write(undefined, undefined, "build.transpile", (node) => {
        console.log(node);
        let name = "/echarts/";
        let isExist = false;
        if (node) {
          for (let element of node.elements) {
            if (element.text === name) {
              isExist = true;
              break;
            }
          }
          if (!isExist) {
            node.elements.push({
              kind: 13,
              text: name,
            });
          }
        }

        name = "/zrender/";
        isExist = false;
        if (node) {
          for (let element of node.elements) {
            if (element.text === name) {
              isExist = true;
              break;
            }
          }
          if (!isExist) {
            node.elements.push({
              kind: 13,
              text: name,
            });
          }
        }
      });
      exec("yarn lintfix");
    }, 5000);
  },
  remove: () => {},
};
