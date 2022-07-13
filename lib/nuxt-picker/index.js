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
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const events = mkdirp(path.join(process.cwd(), "events"));
    const lib = mkdirp(path.join(events, "lib"));
    copy(path.join(__dirname, "lib", "picker.js"), path.join(lib, "picker.js"));

    const components = mkdirp(path.join(process.cwd(), "components"));
    const picker = mkdirp(path.join(components, "the", "picker"));
    copy(
      path.join(__dirname, "lib", "File.vue"),
      path.join(picker, "File.vue")
    );

    exec("yarn lintfix");
  },
  remove: () => {},
};
