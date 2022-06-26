import path from "path";
import { readFileSync, writeFileSync } from "fs";

export default {
  add: async () => {
    const target = path.join(process.cwd(), "nuxt.config.js");
    const config = readFileSync(target, "utf-8");
    console.log(config);
  },
  remove: () => {},
};
