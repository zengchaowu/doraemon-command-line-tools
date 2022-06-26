const path = require("path");

module.exports = {
  add: async () => {
    const config = require(path.join(process.cwd(), "nuxt.config.js"));
    console.log(config);
  },
  remove: () => {},
};
