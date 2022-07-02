export default {
  "/api": {
    target: env.host,
    pathRewrite: { "^/api": "" },
  },
};
