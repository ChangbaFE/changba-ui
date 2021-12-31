<template>
  <cb-tabs v-model="test1">
    <cb-tab-pane label="标签1">
      内容1
    </cb-tab-pane>
    <cb-tab-pane label="标签2">
      内容2
    </cb-tab-pane>
    <cb-tab-pane label="标签3">
      内容3
    </cb-tab-pane>
    <cb-tab-pane label="标签4">
      内容4
    </cb-tab-pane>
  </cb-tabs>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      test1: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
