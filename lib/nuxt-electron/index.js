import path from "path";
import ts from "typescript";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import write from "@doraemon-module/nuxt-functions/lib/write.js";
import { exec, spawn } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync, writeFileSync } from "fs";

export default {
  add: async () => {
    exec(
      "yarn add -D electron electron-builder",
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

    const plugins = mkdirp(path.join(process.cwd(), "plugins"));
    copy(
      path.join(__dirname, "lib", "hybrid.js"),
      path.join(plugins, "hybrid.js")
    );

    write(undefined, undefined, "plugins", (node) => {
      const name = "@/plugins/hybrid";
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

    const packageJson = JSON.parse(
      readFileSync(path.join(process.cwd(), "package.json"), "utf8")
    );
    if (packageJson.main === undefined) {
      packageJson.main = "./electron/main";
    }
    if (packageJson.scripts["start:electron"] === undefined) {
      packageJson.scripts["start:electron"] = "electron .";
      packageJson.scripts["generate:electron"] = "electron-builder --x64";
    }
    writeFileSync(
      path.join(process.cwd(), "package.json"),
      JSON.stringify(packageJson)
    );

    const electron = mkdirp(path.join(process.cwd(), "electron"));

    spawn("cp", ["-rn", path.join(__dirname, "lib", "main"), electron]);
    spawn("cp", ["-rn", path.join(__dirname, "lib", "preload"), electron]);
    spawn("cp", ["-rn", path.join(__dirname, "lib", "static"), electron]);
  },
  remove: () => {},
};
