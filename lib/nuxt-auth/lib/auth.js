import { defineStore } from "pinia";

const name = "auth";

const store = defineStore(name, {
  state: () => {
    return { isSignedIn: undefined, oaData: undefined, imData: undefined };
  },
});

export default store;
