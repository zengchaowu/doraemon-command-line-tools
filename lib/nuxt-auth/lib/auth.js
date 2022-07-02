import { defineStore } from "pinia";

const name = "auth";

const store = defineStore(name, {
  state: () => {
    return {
      isReady: undefined,
      loggedIn: undefined,
      oaData: undefined,
      imData: undefined,
    };
  },
});

export default store;
