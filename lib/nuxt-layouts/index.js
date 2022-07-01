import path from "path";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

export default {
  add: async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const layouts = mkdirp(path.join(process.cwd(), "layouts"));
    copy(
      path.join(__dirname, "lib", "account.vue"),
      path.join(layouts, "account.vue")
    );
    copy(
      path.join(__dirname, "lib", "default.vue"),
      path.join(layouts, "default.vue")
    );
    exec("yarn lintfix");
  },
  remove: () => {},
};
