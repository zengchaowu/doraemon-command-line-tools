import path from "path";
import ts from "typescript";
import copy from "@doraemon-module/nuxt-functions/lib/copy.js";
import mkdirp from "@doraemon-module/nuxt-functions/lib/mkdirp.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import write from "@doraemon-module/nuxt-functions/lib/write.js";

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
    copy(
      path.join(__dirname, "lib", "empty.vue"),
      path.join(layouts, "empty.vue")
    );
    write(".eslintrc.js", ".eslintrc.js", "rules", (node) => {
      const name = "vue/multi-word-component-names";
      let isExist = false;
      for (let propertie of node.properties) {
        if (propertie.name.text === name) {
          propertie.initializer.text = "warn";
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        node.properties.push({
          kind: 296,
          name: ts.createStringLiteral(name),
          initializer: ts.createStringLiteral("warn"),
        });
      }
    });
    exec("yarn lintfix");
  },
  remove: () => {},
};
