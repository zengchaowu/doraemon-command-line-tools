<template>
  <div class="absolute inset-0 flex justify-center items-center"></div>
</template>

<script>
import useAuthStore from "@/pinia/auth";
import useApplicationStore from "@/pinia/application";
export default {
  name: "AccountSinginPage",
  layout: "account",
  auth: false,
  methods: {
    onSubmit() {
      try {
        const authStore = useAuthStore();
        authStore.loggedIn = true;
        const applicationStore = useApplicationStore();
        const redirect = applicationStore.redirect;
        applicationStore.redirect = undefined;
        this.$router.push(redirect ?? "/");
      } catch (error) {}
    },
  },
};
</script>
