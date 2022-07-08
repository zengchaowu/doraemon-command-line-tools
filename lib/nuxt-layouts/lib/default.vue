<template>
  <div class="absolute inset-0 flex">
    <div class="flex-grow relative">
      <a-config-provider :locale="locale">
        <div class="absolute inset-0 flex">
          <div class="flex-grow flex">
            <IndexAside
              class="flex-none no-scrollbar overflow-y-auto shadow-md bg-white z-20"
            />
            <div class="flex-grow flex flex-col">
              <div class="flex-grow overflow-y-auto relative">
                <div class="absolute inset-0 flex">
                  <Nuxt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-config-provider>
    </div>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>
