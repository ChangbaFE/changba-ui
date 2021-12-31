<template>
  <cb-form type="horizontal" v-cb-validation>
    <cb-form-group label="展示时机">
      <cb-input v-model="test1" required />
    </cb-form-group>
    <cb-form-group label="上传图片" help="提示">
      <cb-upload v-model="test2" accept="image/*" required />
    </cb-form-group>
    <cb-form-group label="活动地区">
      <cb-select-plus multiple v-model="test3" required>
        <option>北京</option>
        <option>天津</option>
      </cb-select-plus>
    </cb-form-group>
    <cb-form-group label="颜色">
      <cb-color-picker v-model="test4" />
    </cb-form-group>
    <cb-form-group label="时间">
      <cb-datetime-picker v-model="test5" use-time use-range required />
    </cb-form-group>
  </cb-form>
</template>

<script>
export default {
  name: 'ExampleDialog',
  data() {
    return {
      test1: '',
      test2: '',
      test3: '',
      test4: '',
      test5: ''
    }
  },

  methods: {
    dialogClickButton(button) {
      if (button === 'ok') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              close: true,
              data: {
                test: 'test'
              }
            });
          }, 2000)
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
