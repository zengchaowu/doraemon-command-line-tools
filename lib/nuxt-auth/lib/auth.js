import { defineStore } from "pinia";

const name = "auth";

const store = defineStore(name, {
  state: () => {
    return { loggedIn: undefined, oaData: undefined, imData: undefined };
  },
});

export default store;
