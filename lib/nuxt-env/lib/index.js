import dev from "./lib/dev.js";
import local from "./lib/local.js";
import main from "./lib/main.js";
let env = local;
if (process.env.APP_ENV === "dev") env = dev;
if (process.env.APP_ENV === "local") env = local;
if (process.env.APP_ENV === "main") env = main;
const out = env;
export default out;
