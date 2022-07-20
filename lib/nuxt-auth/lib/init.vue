<template>
  <span>初始化中</span>
</template>

<script>
import getMenu from "@/network/http/getMenu";
// import createMenu from '@/functions/createMenu'
import useApplicationStore from "@/pinia/application";

function close(children) {
  for (const child of children) {
    if (child.children) {
      child.isOpen = false;
      close(child.children);
    }
  }
}

export default {
  name: "InitPage",
  init: true,
  layout: "empty",
  async mounted() {
    try {
      const result = await this.$request(getMenu());
      // const result = createMenu()
      for (const child of result) {
        child.path && (child.icon = child.path);
      }
      close(result);
      const applicationStore = useApplicationStore();
      applicationStore.menu = {
        isOpen: true,
        children: result,
      };
      applicationStore.isReady = true;
      const redirect = applicationStore.redirect;
      applicationStore.redirect = undefined;
      this.$router.push(redirect ?? "/");
    } catch (error) {}
  },
};
</script>
