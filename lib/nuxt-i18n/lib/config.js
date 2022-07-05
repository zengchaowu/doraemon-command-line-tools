export default {
  strategy: "no_prefix",
  locales: [
    {
      code: "en",
      iso: "en-US",
      file: "en-US.js",
    },
    {
      code: "zh",
      iso: "zh-ZH",
      file: "zh-ZH.js",
    },
  ],
  vueI18n: {
    fallbackLocale: "zh",
  },
  defaultLocale: "zh",
  detectBrowserLanguage: false,
  lazy: true,
  langDir: "i18n/",
  parsePages: false,
};
