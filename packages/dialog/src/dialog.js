import Vue from 'vue';
import mainVue from './main.vue';

const Box = Vue.extend(mainVue);

export default {
  component: mainVue,

  dialog(asyncFactory, options = {}) {
    const store = this.$store;

    const defaultOptions = {
      width: 600
    };

    options = Object.assign({}, defaultOptions, options);

    return new Promise((resolve) => {
      const importFunc = (components) => {
        components.default._Ctor = {};

        if (!components.default.mixins) {
          components.default.mixins = [];
        }

        components.default.mixins.push({
          data() {
            return {
              dialogOptions: {}
            }
          },
          methods: {
            $autoAdjustPosition() {
              this.$nextTick(() => {
                this.$parent.autoAdjustPosition();
              });
            },
            $setButton(button, text) {
              this.$parent.buttons[button] = text;
            },
            $setButtons(buttons) {
              this.$parent.buttons = buttons;
            },
            $setTitle(text) {
              this.$parent.title = text;
            }
          }
        });

        const dialogOptions = typeof components.default.data === 'function' ? components.default.data().dialogOptions || {} : {};

        if (!components.default.attached) {
          components.default.backupCreated = components.default.created;
          components.default.backupMounted = components.default.mounted;
        }

        components.default.created = function() {
          // 子组件已经实例化完毕

          // 注入 vuex 实例
          this.$store = store;

          // 传递调用者提供的参数
          this.$data.dialogOptions.data = this.$parent.dialogData;

          if (components.default.backupCreated) {
            components.default.backupCreated.call(this);
          }
        };

        components.default.mounted = function() {
          this.$parent.autoAdjustPosition();

          if (this.$cbValidator) {
            if (!this.$cbValidator.$element.find('button[type=submit]').length) {
              this.$cbValidator.$element.append(`
                <div style="position:absolute;left:-9999px;top:-9999px;">
                  <button type="submit"></button>
                </div>`);
            }
            this.$cbValidator.on('form:submit', () => {
              this.$parent.$emit('action', 'ok');

              return false;
            });
          }

          if (components.default.backupMounted) {
            components.default.backupMounted.call(this);
          }
        };

        box.loading = false;

        box.buttons = options.buttons || dialogOptions.buttons || { ok: '确认', cancel: '取消' };
        box.title = options.title || dialogOptions.title || '对话框';
        box.hideClose = options.hideClose || dialogOptions.hideClose;
        box.dialogData = options.data || {};

        if (dialogOptions.width) {
          box.width = dialogOptions.width;
        }

        components.default.attached = true;

        return components;
      };

      const box = new Box({
        el: document.createElement('div'),

        props: {
          dynamic: {
            type: Boolean,
            default: true
          },
          dialogData: {
            type: Object
          }
        },

        computed: {
          dialogProps() {
            return { ...options.props };
          }
        },

        components: {
          VexDialogBody: () => asyncFactory().then(importFunc)
        }
      });

      box.$on('action', async function(button) {
        const instance = this.$refs.body;

        if (this.disabled || !instance) {
          return;
        }

        this.disabled = true;

        if (!instance.dialogClickButton) {
          box.close();

          resolve({ button });

          return;
        }

        if ((button === 'ok' || button === 'yes') && instance.$cbValidator) {
          const result = await new Promise((resolve) => {
            instance.$cbValidator.whenValidate().then(() => {
              resolve(true);
            }, () => {
              resolve(false);
            });
          });

          if (result === false) {
            this.disabled = false;

            return;
          }
        }

        const result = instance.dialogClickButton(button);

        if (result?.then) {
          result.then((result) => {
            if (typeof result === 'object') {
              if (result.close === true || typeof result.close === 'undefined') {
                box.close();

                resolve({ button, data: result });
              }
              else {
                this.disabled = false;
              }
            }
            else {
              if (result === true || typeof result === 'undefined') {
                box.close();

                resolve({ button, data: result });
              }
              else {
                this.disabled = false;
              }
            }
          });
        }
        else {
          if (typeof result === 'object') {
            if (result.close === true || typeof result.close === 'undefined') {
              box.close();

              resolve({ button, data: result });
            }
            else {
              this.disabled = false;
            }
          }
          else {
            if (result === true || typeof result === 'undefined') {
              box.close();

              resolve({ button, data: result });
            }
            else {
              this.disabled = false;
            }
          }
        }
      });

      box.$on('close', function() {
        box.$destroy();
      });

      box.loading = true;
      box.width = options.width;
      box.title = '正在加载...';
      box.open();
    });
  }
}
