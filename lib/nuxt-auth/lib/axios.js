import startsWith from "lodash.startswith";

export default function (app) {
  app.$axios.onRequest((config) => {
    const { isProduction, env } = app.$config ?? {};
    if (isProduction === true) {
      if (startsWith(config.url, "/oa")) {
        config.url = config.url.slice(3);
        config.baseURL = env.oa.host;
      }
      if (startsWith(config.url, "/im")) {
        config.url = config.url.slice(3);
        config.baseURL = env.im.host;
      }
    }
  });
}
