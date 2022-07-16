import path from "path";
import ts from "typescript";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import write from "@doraemon-module/nuxt-functions/lib/write.js";
import { exec, spawn } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync, readdirSync } from "fs";

export default {
  add: async () => {
    exec("yarn add mime", function (error, stdout, stderr) {
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
      exec("yarn lintfix");
    });

    const __dirname = dirname(fileURLToPath(import.meta.url));

    const functions = mkdirp(path.join(process.cwd(), "functions"));
    copy(
      path.join(__dirname, "lib", "fileType.js"),
      path.join(functions, "fileType.js")
    );

    const assets = mkdirp(path.join(process.cwd(), "assets"));
    const images = mkdirp(path.join(assets, "images"));

    spawn("cp", [
      "-r",
      "-i",
      path.join(__dirname, "assets", "images", "mime-types"),
      images,
    ]);
  },
  remove: () => {},
};
