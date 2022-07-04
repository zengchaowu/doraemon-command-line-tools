import startsWith from "lodash.startswith";

export default function (app) {
  app.$axios.onRequest((config) => {
    const { isProduction, env } = app.$config ?? {};
    if (isProduction === true) {
      if (startsWith(config.url, env.oa.path)) {
        config.url = config.url.slice(env.oa.path.length);
      }
    }
  });
}
