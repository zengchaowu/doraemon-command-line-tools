<template>
  <div class="p-2 justify-between">
    <DoraemonTree
      :payload="menu"
      :perference="{
        classForNode,
        selectNode,
      }"
    />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import DoraemonTree from '@doraemon-design/tree/lib/tree.vue'
import useApplicationStore from '@/pinia/application'
export default {
  components: { DoraemonTree },
  computed: {
    ...mapState(useApplicationStore, ['menu']),
  },
  methods: {
    selectNode(node) {
      this.$router.push(node.path)
    },
    classForNode(node) {
      if (node.path === this.$route.path) {
        return ['bg-primary', 'text-white', 'rounded-md']
      }
    },
  },
}
</script>
