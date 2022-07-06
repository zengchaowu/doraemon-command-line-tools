<template>
  <div class="flex flex-col gap-2">
    <a-spin />
    <span>初始化中</span>
  </div>
</template>

<script>
import useAuthStore from "@/pinia/auth";
import useApplicationStore from "@/pinia/application";
export default {
  name: "InitPage",
  init: true,
  layout: "empty",
  mounted() {
    const authStore = useAuthStore();
    authStore.load();
    const applicationStore = useApplicationStore();
    applicationStore.isReady = true;
    const redirect = applicationStore.redirect;
    applicationStore.redirect = undefined;
    this.$router.push(redirect ?? "/");
  },
};
</script>
