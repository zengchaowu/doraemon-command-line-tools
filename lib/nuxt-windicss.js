import path from "path";
import mkdirp from "mkdirp";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync, readFileSync, stat } from "fs";

export default {
  add: async () => {
    const assets = path.join(process.cwd(), "assets");
    mkdirp(assets);
    const css = path.join(assets, "css");
    mkdirp(css);
    const __dirname = dirname(fileURLToPath(import.meta.url));

    {
      let file = "base.css";
      stat(path.join(css, file), function (err, stat) {
        if (stat && stat.isFile()) {
          console.log(`${file}存在`);
        } else {
          let buffer = readFileSync(
            path.join(__dirname, `./nuxt-windicss/${file}`)
          );
          writeFileSync(path.join(css, file), buffer);
        }
      });
    }

    {
      let file = "components.css";
      stat(path.join(css, file), function (err, stat) {
        if (stat && stat.isFile()) {
          console.log(`${file}存在`);
        } else {
          let buffer = readFileSync(
            path.join(__dirname, `./nuxt-windicss/${file}`)
          );
          writeFileSync(path.join(css, file), buffer);
        }
      });
    }

    {
      let file = "utilities.css";
      stat(path.join(css, file), function (err, stat) {
        if (stat && stat.isFile()) {
          console.log(`${file}存在`);
        } else {
          let buffer = readFileSync(
            path.join(__dirname, `./nuxt-windicss/${file}`)
          );
          writeFileSync(path.join(css, file), buffer);
        }
      });
    }

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
