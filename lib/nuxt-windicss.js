import path from "path";
import { readFileSync, writeFileSync } from "fs";

export default {
  add: async () => {
    const target = path.join(process.cwd(), "nuxt.config.js");
    const config = readFileSync(target, "utf-8");
    console.log(
      "\n\
      yarn add -D nuxt-windicss\n\
      buildModules: [\n\
        'nuxt-windicss',\n\
      ]\n\
      css: [\n\
        'virtual:windi-base.css',\n\
        '~/assets/css/base.css',\n\
        'virtual:windi-components.css',\n\
        '~/assets/css/components.css',\n\
        'virtual:windi-utilities.css',\n\
        '~/assets/css/utilities.css',\n\
      ]\n\
      windicss: {\n\
        analyze: {\n\
          analysis: {\n\
            interpretUtilities: false,\n\
          },\n\
          // see https://github.com/unjs/listhen#options\n\
          server: {\n\
            port: 4444,\n\
            open: true,\n\
          },\n\
        },\n\
      },\n\
      "
    );
  },
  remove: () => {},
};
