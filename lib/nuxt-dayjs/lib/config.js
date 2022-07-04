export default {
  locales: ["en", "zh"],
  defaultLocale: "zh",
  defaultTimeZone: "Asia/Beijing",
  plugins: [
    "utc", // import 'dayjs/plugin/utc'
    "timezone", // import 'dayjs/plugin/timezone'
  ], // Your Day.js plugin
};
