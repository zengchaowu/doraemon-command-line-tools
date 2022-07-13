<template>
  <div class="absolute w-0 h-0">
    <input ref="input" class="hidden" @input="input" />
  </div>
</template>

<script>
import Events, { emitter } from "~/events";
export default {
  created() {
    emitter.on(Events.Picker.ShouldPickFile, this.shouldPickFile);
    emitter.on(Events.Picker.ShouldPickFiles, this.shouldPickFiles);
    emitter.on(Events.Picker.ShouldPickFolder, this.shouldPickFolder);
  },
  destroyed() {
    emitter.off(Events.Picker.ShouldPickFile, this.shouldPickFile);
    emitter.off(Events.Picker.ShouldPickFiles, this.shouldPickFiles);
    emitter.off(Events.Picker.ShouldPickFolder, this.shouldPickFolder);
  },
  methods: {
    input(event) {
      const { files } = event.target;
      this.callback && files && files.length > 0 && this.callback(files);
      this.$refs.input.value = "";
    },
    shouldPickFile(callback, accept = undefined) {
      this.$refs.input.type = "file";
      this.$refs.input.multiple = false;
      this.$refs.input.webkitdirectory = false;
      this.$refs.input.accept = accept;
      this.$refs.input.click();
      this.callback = callback;
    },
    shouldPickFiles(callback, accept = undefined) {
      this.$refs.input.type = "file";
      this.$refs.input.multiple = true;
      this.$refs.input.webkitdirectory = false;
      this.$refs.input.accept = accept;
      this.$refs.input.click();
      this.callback = callback;
    },
    shouldPickFolder(callback) {
      // 选择文件夹可能存在兼容性错误，2022年已经大部分浏览器可用
      this.$refs.input.type = "file";
      this.$refs.input.multiple = false;
      this.$refs.input.webkitdirectory = true;
      this.$refs.input.click();
      this.callback = callback;
    },
  },
};
</script>
