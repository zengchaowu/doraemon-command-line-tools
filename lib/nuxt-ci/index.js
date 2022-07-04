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
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const _github = mkdirp(path.join(process.cwd(), ".github"));
    const workflows = mkdirp(path.join(_github, "workflows"));
    copy(path.join(__dirname, "lib", "ci.yml"), path.join(workflows, "ci.yml"));
  },
  remove: () => {},
};
