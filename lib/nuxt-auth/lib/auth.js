import { defineStore } from "pinia";

const name = "auth";

const store = defineStore(name, {
  state: () => {
    return {
      loggedIn: undefined,
      oaData: undefined,
      imData: undefined,
    };
  },
  actions: {
    save() {
      localStorage.setItem(name, JSON.stringify(this));
    },
    load() {
      const auth = JSON.parse(localStorage.getItem(name));
      if (auth) {
        Object.assign(this, auth);
      }
    },
    logout() {
      this.oaData = undefined;
      this.imData = undefined;
      this.loggedIn = undefined;
      localStorage.removeItem(name);
    },
  },
});

export default store;
