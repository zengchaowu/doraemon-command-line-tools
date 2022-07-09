import path from "path";
import ts from "typescript";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import write from "@doraemon-module/nuxt-functions/lib/write.js";
import { exec } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync, readdirSync } from "fs";

export default {
  zsh: () => {
    try {
      const dir = process.cwd();
      const iconInfos = [];
      const files = readdirSync(dir);
      for (const file of files) {
        if (path.extname(file) === ".app") {
          const iconInfo = getIcns(path.join(dir, file));
          iconInfo && iconInfos.push(iconInfo);
        }
      }
      console.log(iconInfos);
    } catch (error) {
      console.error(error);
    }
  },
};
