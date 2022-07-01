export default {
  "/oa": {
    target: env.oa.host,
    pathRewrite: { "^/oa": "" },
  },
  "/im": {
    target: env.im.host,
    pathRewrite: { "^/im": "" },
  },
};
