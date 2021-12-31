<template>
  <div class="cb-datetime-picker input-group date">
    <input type="text" class="form-control" v-model="inputValue" v-bind="$attrs" ref="input">
    <span class="input-group-addon">
      <span class="glyphicon" :class="'glyphicon-' + icon"></span>
    </span>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import $ from 'jquery';

export default {
  name: 'CbDatetimePicker',

  inheritAttrs: false,

  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {
          autoApply: true,
          autoUpdateInput: false,
          locale: {
            format: 'YYYY-MM-DD',
            applyLabel: '确认',
            cancelLabel: '取消',
            customRangeLabel: '自定义',
            weekLabel: '周'
          }
        };
      }
    },
    useRange: {
      type: Boolean,
      default: false
    },
    begin: {
      type: [String, Number, Object],
      default: ''
    },
    end: {
      type: [String, Number, Object],
      default: ''
    },
    separator: {
      type: String,
      default: '至'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    useTime: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'calendar'
    },
    minDate: {
      type: String,
      default: ''
    },
    maxDate: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    maxSpan: {
      type: [String, Number, Object],
      default: ''
    },
    drop: {
      type: String,
      default: 'down'
    }
  },

  data() {
    return {
      pickerOptions: {},
      inputValue: ''
    };
  },

  watch: {
    value(value) {
      const oldBegin = this.getFormatDate(this.instance.startDate);
      const oldEnd = this.getFormatDate(this.instance.endDate);

      this.inputValue = value;

      this.$nextTick(() => {
        this.instance.elementChanged();

        if (value) {
          const begin = this.getFormatDate(this.instance.startDate);
          const end = this.getFormatDate(this.instance.endDate);

          if (begin !== oldBegin || end !== oldEnd) {
            this.$emit('update:begin', begin);
            this.$emit('update:end', end);
          }
        }
        else {
          this.$emit('update:begin', '');
          this.$emit('update:end', '');
        }
      });
    },

    begin(value) {
      if (!value) {
        this.clearInput();

        return;
      }

      this.instance.setStartDate(value);
      this.emitInput();
    },

    end(value) {
      if (!value) {
        this.clearInput();

        return;
      }

      if (this.useRange) {
        this.instance.setEndDate(value);
      }
      else {
        // 在范围选择器的情况下只使用开始时间
        this.instance.setStartDate(value);
      }

      this.emitInput();
    },

    inputValue(value) {
      if (value === '') {
        this.instance.hide();
        this.$emit('input', '');
        this.$emit('update:begin', '');
        this.$emit('update:end', '');
      }
    },

    width(value) {
      $(this.$refs.input).css('width', value);
    }
  },

  mounted() {
    const el = $(this.$el);
    const inputEl = $(this.$refs.input);

    if (this.width !== '') {
      inputEl.css('width', this.width);
    }
    this.pickerOptions = cloneDeep(this.options)

    this.pickerOptions.locale.separator = ` ${this.separator} `;

    if (this.useTime) {
      this.pickerOptions.timePicker = true;
      this.pickerOptions.timePicker24Hour = true;
      this.pickerOptions.timePickerSeconds = true;
      this.pickerOptions.locale.format = 'YYYY-MM-DD HH:mm:ss';
    }
    else {
      this.pickerOptions.locale.format = this.format;
    }

    this.pickerOptions.singleDatePicker = !this.useRange;

    if (this.value) {
      this.inputValue = this.value;

      if (this.useRange) {
        const dateString = this.value.split(this.pickerOptions.locale.separator);
        this.pickerOptions.startDate = dateString[0];
        this.pickerOptions.endDate = dateString[1];
      }
      else {
        this.pickerOptions.startDate = this.value;
        this.pickerOptions.endDate = this.value;
      }
    }

    if (this.begin) {
      this.pickerOptions.startDate = this.begin;
    }

    if (this.end) {
      this.pickerOptions.endDate = this.end;
    }

    if (this.minDate) {
      this.pickerOptions.minDate = this.minDate;
    }

    if (this.maxDate) {
      this.pickerOptions.maxDate = this.maxDate;
    }

    if (this.maxSpan) {
      if (typeof (this.maxSpan) === 'object') {
        this.pickerOptions.maxSpan = this.maxSpan;
      }
      else {
        this.pickerOptions.maxSpan = {
          days: this.maxSpan
        }
      }
    }

    let float = false;

    let parentEl = el.parents('.cb-datetime-picker-attach-point-float');
    if (parentEl.length > 0) {
      float = true;
      this.pickerOptions.parentEl = parentEl;
    }
    else {
      parentEl = el.parents('.cb-datetime-picker-attach-point');
      if (parentEl.length > 0) {
        this.pickerOptions.parentEl = parentEl;
      }
    }

    inputEl.daterangepicker(this.pickerOptions).on('apply.daterangepicker', (e, date) => {
      this.updateDate(date.startDate, date.endDate);
    });

    this.instance = inputEl.data('daterangepicker');

    this.instance.drops = this.drop;

    if (this.begin || this.end || this.value) {
      this.updateDate(this.instance.startDate, this.instance.endDate);
    }

    if (float) {
      inputEl.on('show.daterangepicker', () => {
        const win = $(window);

        window.addEventListener('wheel', this.disableWheel, { passive: false });
        window.addEventListener('mousewheel', this.disableWheel, { passive: false });

        if (this.instance.container.position().top + this.instance.container.height() > win.height()) {
          this.instance.drops = 'up';
        }
        else {
          this.instance.drops = 'down';
        }

        this.instance.move();
      }).on('hide.daterangepicker', () => {
        window.removeEventListener('wheel', this.disableWheel);
        window.removeEventListener('mousewheel', this.disableWheel);
        this.instance.drops = 'down';
        this.instance.move();
      });
    }
  },

  destroyed() {
    if (this.instance) {
      this.instance.remove();
    }
  },

  methods: {
    updateDate(beginDate, endDate) {
      const begin = beginDate.format(this.pickerOptions.locale.format);
      const end = endDate.format(this.pickerOptions.locale.format);

      this.inputValue = this.getDateText(begin, end);

      this.$emit('update:begin', begin);
      this.$emit('update:end', end);
      this.$emit('input', this.inputValue);
    },

    disableWheel(e) {
      e.preventDefault();
    },

    getFormatDate(value) {
      return value.format(this.pickerOptions.locale.format);
    },

    emitInput() {
      const begin = this.getFormatDate(this.instance.startDate);
      const end = this.getFormatDate(this.instance.endDate);

      const text = this.getDateText(begin, end);

      if (this.inputValue !== text) {
        this.inputValue = text;
        this.$emit('input', text);
      }
    },

    clearInput() {
      if (!this.begin && !this.end && this.inputValue) {
        this.inputValue = '';
        this.$emit('input', this.inputValue);
      }
    },

    getDateText(begin, end) {
      return this.useRange ? `${begin}${this.pickerOptions.locale.separator}${end}` : begin;
    }
  }
}
</script>
