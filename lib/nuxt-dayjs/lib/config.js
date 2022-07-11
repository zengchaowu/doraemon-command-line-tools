export default {
  locales: ["en", "zh-cn"],
  defaultLocale: "zh-cn",
  defaultTimeZone: "Asia/Beijing",
  plugins: [
    "utc", // import 'dayjs/plugin/utc'
    "timezone", // import 'dayjs/plugin/timezone'
    "weekday",
    "localeData",
  ], // Your Day.js plugin
};
