<template>
  <div class="example">
    <cb-button theme="primary" @click="handleClick" v-cb-tooltip title="我是个提示">按钮</cb-button>
    <cb-button @click="showDialog">显示动态对话框</cb-button>
    <cb-button @click="testVisible = true">显示静态对话框</cb-button>
    <cb-button small @click="showAlert" v-cb-confirm>显示 Alert</cb-button>
    <cb-button @click="showPrompt">异步 prompt</cb-button>
    <cb-button to="/">路由</cb-button>
    <cb-button split>
      默认按钮
      <template slot="menu">
        <cb-menu-item>菜单1</cb-menu-item>
        <cb-menu-item>菜单2</cb-menu-item>
        <cb-menu-item>菜单3</cb-menu-item>
        <cb-menu-item separator />
        <cb-menu-item>菜单4</cb-menu-item>
      </template>
    </cb-button>
    <cb-icon name="refresh" spin />
    <cb-row>
      <cb-col span="8">md-8</cb-col>
      <cb-col span="4">md-4</cb-col>
    </cb-row>

    <cb-form button="保存" @submit="submit" v-cb-validation v-cb-loading="loading">
      <cb-form-group label="活动ID：" static="1234567890" />
      <cb-form-group label="活动名称：">
        <cb-input v-model="form.name" required />
      </cb-form-group>
      <cb-form-group label="活动类型：">
        <cb-select v-model="form.type" required>
          <option value="1">类型一</option>
          <option value="2">类型二</option>
        </cb-select>
      </cb-form-group>
      <cb-form-group label="活动地区1：">
        <cb-select-plus multiple v-model="test2" required>
          <option>北京</option>
          <option>天津</option>
        </cb-select-plus>
      </cb-form-group>
      <cb-form-group label="活动地区2：">
        <cb-select-plus v-model="form.test2" required>
          <option>北京</option>
          <option>天津</option>
        </cb-select-plus>
      </cb-form-group>
      <cb-form-group label="活动时间1：">
        <cb-datetime-picker v-model="form.date1" use-time use-range required />
      </cb-form-group>
      <cb-form-group label="活动时间2：">
        <cb-datetime-picker v-model="form.date2" use-time use-range />
      </cb-form-group>
      <cb-form-group label="活动性质：">
        <cb-checkbox-group inline v-model="form.data1" required>
          <cb-checkbox value="1">抽奖</cb-checkbox>
          <cb-checkbox value="2">满赠</cb-checkbox>
          <cb-checkbox value="3">满减</cb-checkbox>
          <cb-checkbox value="4">返利</cb-checkbox>
        </cb-checkbox-group>
      </cb-form-group>
      <cb-form-group label="特殊资源：">
        <cb-radio-group inline v-model="form.data2" required>
          <cb-radio value="1">线上活动</cb-radio>
          <cb-radio value="2">线下活动</cb-radio>
        </cb-radio-group>
      </cb-form-group>
      <cb-form-group label="活动描述：">
        <cb-input type="textarea" v-model="form.desc" required />
      </cb-form-group>
      <cb-form-group label="附带文案：">
        <cb-input type="text" v-model="form.test1" required>
          <template #prepend>网址</template>
        </cb-input>
      </cb-form-group>
      <cb-form-group label="活动图片：" help="支持PNG">
        <cb-upload v-model="form.file1" button-text="选择图片文件" required />
      </cb-form-group>
      <cb-form-group label="自定义上传：" help="支持PNG">
        <cb-upload v-model="form.file2" required>
          <template #before>
            请点击按钮上传 ->
          </template>
          <template #default="{ uploading, percent }">
            <cb-button :disabled="uploading" theme="success">
              上传
              <span class="upload-file-percent" v-if="uploading">({{ percent }}%)</span>
            </cb-button>
          </template>
          <template #after>
            <template v-if="form.file2">{{ form.file2.name }}</template>
            <template v-else> 您尚未选择任何本地文件</template>
          </template>
        </cb-upload>
      </cb-form-group>
      <cb-form-group label="活动颜色：">
        <cb-color-picker v-model="form.color" required />
      </cb-form-group>
    </cb-form>

    <cb-form button="保存" @submit="submit1" v-cb-validation:test1>
      <cb-form-group label="活动名称：">
        <cb-input v-model="form.name" required />
      </cb-form-group>
      <cb-form-group label="活动图片：">
        <cb-upload v-model="form.file3" button-text="选择图片文件" required />
      </cb-form-group>
    </cb-form>

    <cb-box title="Box 标题" collapsable v-cb-loading:name2="loading2">
      <p>Box 正文</p>
    </cb-box>

    <cb-button @click="loading = true">开始加载</cb-button>
    <cb-button @click="loading = false">结束加载</cb-button>
    <cb-button @click="startLoading">服务方式开始加载</cb-button>
    <cb-button @click="stopLoading">服务方式结束加载</cb-button>

    <cb-tabs v-model="test4">
      <cb-tab-pane label="标签1">
        <template #label>bbb<strong>bbb</strong>bbbbbbbb</template>
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

    <cb-table :data="list">
      <cb-table-column label="索引">
        <template #default="{ item, index }">
          {{ item.name }}-{{ index }}
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

    <cb-pagination :pager="pager" @change="pageChange" />

    <div>
      <cb-label>标签一</cb-label>
      <cb-label theme="primary">标签二</cb-label>
      <cb-label theme="success">标签三</cb-label>
      <cb-label theme="info">标签四</cb-label>
      <cb-label theme="warning">标签五</cb-label>
      <cb-label theme="danger">标签六</cb-label>
    </div>

    <div>
      <a href="#">收件箱 <cb-badge>42</cb-badge></a>
      <cb-button>消息 <cb-badge>4</cb-badge></cb-button>
    </div>

    <div>
      <cb-progress v-model="test5" show-text />
    </div>

    <div>
      <cb-steps v-model="step">
        <cb-step>第一步</cb-step>
        <cb-step>第二步</cb-step>
        <cb-step>第三步</cb-step>
        <cb-step>完成</cb-step>
      </cb-steps>
    </div>

    <cb-callout theme="info" title="标题" text="内容" />

    <cb-row>
      <cb-col span="3">
        <cb-info-box icon-theme="aqua" icon="envelope-o" text="消息" number="1,410" />
      </cb-col>
      <cb-col span="3">
        <cb-info-box icon-theme="green" icon="flag-o" text="书签" number="410" />
      </cb-col>
      <cb-col span="3">
        <cb-info-box icon-theme="yellow" icon="files-o" text="上传" number="13,648" />
      </cb-col>
      <cb-col span="3">
        <cb-info-box icon-theme="red" icon="star-o" text="点赞" number="93,139" />
      </cb-col>
    </cb-row>

    <cb-small-box theme="aqua" icon="shopping-cart" title="150" text="新订单">
      <template #footer>
        <a href="#">更多内容 <cb-icon name="arrow-circle-right" /></a>
      </template>
    </cb-small-box>

    <cb-dialog :visible.sync="testVisible">
      <template #title>
        <h4 class="modal-title">标题</h4>
      </template>
      我是对话框
      <template #footer>
        <cb-button @click="testVisible = false">关闭</cb-button>
      </template>
    </cb-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      color: '#f00',
      date: '',
      test1: '',
      test2: '',
      test3: '',
      test4: 0,
      loading: false,
      loading2: false,
      form: {
        data1: [],
        data2: ''
      },
      list: [
        { id: 1, name: '名字1' },
        { id: 2, name: '名字2' },
        { id: 3, name: '名字3' },
        { id: 4, name: '名字4' }
      ],
      pager: {
        current: 1,
        total: 4
      },
      test5: 50,
      step: 1,
      testVisible: false
    }
  },

  mounted() {
    // console.log(this);
  },

  methods: {
    handleClick() {
      this.$cbNotify.notice('测试1');
      this.$cbNotify.info('测试2');
      this.$cbNotify.success('测试3');
      this.$cbNotify.error('测试4');
      this.$cbNotify('测试5');
      this.$cbNotify({
        type: 'fail',
        text: '测试6'
      });
    },
    submit() {
      this.$cbNotify.success('测试2');
    },
    submit1() {
      this.$cbNotify.success('测试21');
    },
    async showDialog() {
      const module = () => import('./dialog.vue');
      const { button, data } = await this.$cbDialog(module);

      console.log(button, data);

      if (button === 'ok') {
        this.$cbNotify.success('成功');
      }
    },
    startLoading() {
      this.$cbLoadingInstance.show();
      this.$cbLoadingInstances.name2.show();
    },
    stopLoading() {
      this.$cbLoadingInstance.hide();
      this.$cbLoadingInstances.name2.hide();
    },
    pageChange(page = 1) {
      this.pager.current = page;
      this.$cbNotify.success(`你按了页码，当前页：${page}`);
    },
    showAlert() {
      this.$cbAlert(this.$createElement('div', '<b>ddd</b><script>asdfasdfasdf<' + '/script>'), this.$createElement('em', '<b>ddd</b>asdfasdfasdf'), {
        buttons: {
          ok: false,
          cancel: '关闭'
        }
      });
    },
    checkRequestSuccess(data) {
      return data.errorcode === 0;
    },
    requestComplete(result) {
      if (result.isSuccess) {
        this.$cbNotify.success('请求成功');
      }
      else {
        this.$cbNotify.error(result.data.message ?? '请求失败');
      }
    },
    async showPrompt() {
      const { isOk } = await this.$cbPrompt('用户ID:', '发放优惠券', {
        beforeClose: ({ isOk, text }) => {
          if (isOk) {
            console.log(text)
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(true);
              }, 1000)
            })
          }
        },
        // multiline: true,
        width: 700,
        rows: 6,
        rules: {
          required: true
        },
        placeholder: '分行输入用户ID'
      });

      if (isOk) {
        this.$cbNotify.success('成功');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.example {
  width: 1024px;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
