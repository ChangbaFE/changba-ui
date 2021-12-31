<template>
  <cb-table :data="list">
    <cb-table-column label="index">
      <template #default="{ index }">
        {{ index }}
      </template>
    </cb-table-column>
    <cb-table-column label="ID" data-key="id" />
    <cb-table-column label="名称" data-key="name" />
    <cb-table-column label="操作" width="100">
      <template #default>
        <cb-button block small>编辑</cb-button>
      </template>
    </cb-table-column>
  </cb-table>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      list: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
