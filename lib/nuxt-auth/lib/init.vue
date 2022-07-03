<template>
  <div class="flex flex-col gap-2">
    <a-spin />
    <span>初始化中</span>
  </div>
</template>

<script>
import useAuthStore from "@/pinia/auth";
export default {
  init: true,
  layout: "empty",
  mounted() {
    console.log("init");
    const authStore = useAuthStore();
    if (authStore.isReady === true) {
      const from = localStorage.getItem("redirect");
      this.$router.push(from ?? "/");
    }
    authStore.load();
    authStore.isReady = true;
    const from = localStorage.getItem("redirect");
    this.$router.push(from ?? "/");
  },
};
</script>
