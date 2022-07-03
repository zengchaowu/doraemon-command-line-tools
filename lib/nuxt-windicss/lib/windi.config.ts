import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["PingFang SC", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#FF6002",
        warning: "#FFCD42",
        error: "#DE5346",
        disabled: "#FEB081",
        highlight: "#E55601",
        border: "#F5F5F5",
      },
    },
  },
});
