import Vue from "vue";

import useApplicationStore from "@/pinia/application";

Vue.prototype.$redirect = function () {
  const applicationStore = useApplicationStore();
  const redirect = applicationStore.redirect;
  applicationStore.redirect = undefined;
  this.$router.push(redirect ?? "/");
};
