<script>
import get from 'lodash/get';

// 构建每行单元格
const getCells = (createElement, columns, item, index) => columns.map((columnItem, columnIndex) => {
  if (!columnItem.componentOptions) {
    return [];
  }

  let el;

  if (columnItem.data.scopedSlots?.default) {
    el = columnItem.data.scopedSlots.default({ index, item });
  }
  else {
    if (columnItem.componentOptions.propsData.dataKey) {
      const propsData = columnItem.componentOptions.propsData;
      let value = get(item, propsData.dataKey);

      if (propsData.type === 'image') {
        if (value !== undefined && value !== null && value !== '') {
          el = [createElement('img', { attrs: { class: 'cb-table-column-image', src: value } })];
        }
        else {
          el = propsData.defaultText ?? '';
        }
      }
      else if (propsData.type === 'audio') {
        if (value !== undefined && value !== null && value !== '') {
          el = [createElement('audio', { attrs: { class: 'cb-table-column-audio', controls: '', src: value } })];
        }
        else {
          el = propsData.defaultText ?? '';
        }
      }
      else {
        if (Array.isArray(value)) {
          if (propsData.showArrayByLine !== undefined) {
            el = value.map((item, index) => {
              return createElement('p', { key: index }, `${propsData.prefix ?? ''}${item}${propsData.postfix ?? ''}`);
            });
          }
          else {
            el = value.join(propsData.arraySeparator ?? ',');
          }
        }
        else if (value !== null && typeof value === 'object') {
          el = JSON.stringify(value);
        }
        else {
          if (Array.isArray(propsData.replace)) {
            // 数据替换
            value = String(value).replace(propsData.replace[0], propsData.replace[1]);
          }

          el = propsData.prefix ?? '';
          el += (value !== undefined && value !== null && value !== '') ? value : (propsData.defaultText ?? '');
          el += propsData.postfix ?? '';
        }
      }

      if (propsData.dataCssClass) {
        el = [createElement('div', { attrs: { class: propsData.dataCssClass } }, [el])];
      }
    }
    else {
      // 什么都没给则不显示
      el = '';
    }
  }

  return createElement('td', { key: columnIndex }, el);
});

export default {
  name: 'CbTable',

  props: {
    data: {
      type: [Array, Object],
      default() {
        return [];
      }
    },

    hover: {
      type: Boolean,
      default: true
    },

    striped: {
      type: Boolean,
      default: true
    },

    bordered: {
      type: Boolean,
      default: false
    },

    condensed: {
      type: Boolean,
      default: false
    },

    emptyText: {
      type: String,
      default: '暂无内容'
    },

    rowKey: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      columnNum: 0
    }
  },

  computed: {
    classList() {
      return {
        'table-striped': this.striped,
        'table-hover': this.hover,
        'table-bordered': this.bordered,
        'table-condensed': this.condensed
      };
    }
  },

  created() {
  },

  mounted() {
    this.update();
  },

  updated() {
    this.update();
  },

  methods: {
    update() {
      this.columnNum = this.$refs?.thead?.querySelectorAll(':scope > th').length ?? 0;
    }
  },

  render(createElement) {
    const emptyTr = createElement('tr', [
      createElement('td', { attrs: { colspan: this.columnNum } }, this.emptyText)
    ]);

    const innerElements = [];
    let dataElements = [];

    // 表头
    const columns = this.$scopedSlots.default();

    const thElements = columns.map((item, index) => {
      if (item.componentOptions) {
        return createElement('th', {
          attrs: {
            width: item.componentOptions.propsData.width
          },
          key: index
        }, item.data.scopedSlots?.label?.() ?? (item.componentOptions.propsData.label ?? `字段${index}`));
      }
    });

    innerElements.push(createElement('thead', [
      createElement('tr', { ref: 'thead' }, thElements)
    ]));

    // 表体
    if (Array.isArray(this.data)) {
      // 是数组
      if (this.data.length > 0) {
        dataElements = this.data.map((item, index) => {
          return createElement('tr', { key: this.rowKey ? get(item, this.rowKey) : index }, getCells(createElement, columns, item, index));
        });
      }
      else if (this.columnNum > 0) {
        dataElements = [emptyTr];
      }
    }
    else {
      // 是对象
      const keys = Object.keys(this.data);

      if (keys.length > 0) {
        dataElements = keys.map((key) => {
          createElement('tr', { key }, getCells(createElement, columns, this.data[key], key));
        });
      }
      else if (this.columnNum > 0) {
        dataElements = [emptyTr];
      }
    }

    innerElements.push(createElement('tbody', dataElements));

    return createElement('table', {
      staticClass: 'cb-table table',
      class: this.classList
    }, innerElements);
  }
}
</script>
