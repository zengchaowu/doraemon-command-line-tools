import dev from "./lib/dev.js";
import local from "./lib/local.js";
import main from "./lib/main.js";
let env = local;
if (process.env.NODE_ENV === "dev") env = dev;
if (process.env.NODE_ENV === "local") env = local;
if (process.env.NODE_ENV === "main") env = main;
module.exports = env;