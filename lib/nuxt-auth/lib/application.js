import { defineStore } from "pinia";

const name = "application";

const store = defineStore(name, {
  state: () => {
    return {
      isReady: undefined,
      isOffline: undefined,
      redirect: undefined,
      menu: undefined,
    };
  },
});

export default store;
