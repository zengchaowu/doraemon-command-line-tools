import path from "path";
import ts from "typescript";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import write from "@doraemon-module/nuxt-functions/lib/write.js";
import { exec } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync, readdirSync } from "fs";

const getIcns = (dir) => {
  const name = path.basename(dir, ".app");
  const resourcesPath = path.join(dir, "Contents", "Resources");
  try {
    const icnses = [];
    const files = readdirSync(resourcesPath);
    for (const file of files) {
      if (path.extname(file) === ".icns") {
        icnses.push(path.join(resourcesPath, file));
      }
    }
    if (icnses.length > 0) {
      return {
        name,
        icnses,
      };
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

export default {
  scan: () => {
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
  remove: () => {},
};
