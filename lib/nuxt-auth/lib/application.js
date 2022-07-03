import { defineStore } from "pinia";

const name = "application";

const store = defineStore(name, {
  state: () => {
    return {
      isReady: undefined,
    };
  },
});

export default store;
