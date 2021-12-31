<template>
  <div class="cb-upload">
    <slot name="before" :remote="remote" :uploading="uploading" :percent="uploadPercent"></slot>

    <div class="custom-file-upload" @click="handleClick">
      <template v-if="$scopedSlots.default">
        <slot :remote="remote" :uploading="uploading" :percent="uploadPercent"></slot>
      </template>
      <template v-else>
        <button type="button" class="btn" :class="buttonClass">
          <i class="cb-icon fa fa-fw fa-refresh fa-spin" v-if="uploading"></i>
          <i class="cb-icon fa fa-fw fa-upload" v-else></i>
          {{ buttonText }}
          <span class="upload-file-percent" v-if="uploading">({{ uploadPercent }}%)</span>
        </button>
      </template>
      <input type="file" class="upload-file" @change="handleFileChange" :data-cb-validation-file-value="value | createObjectURL" :disabled="disabled" ref="file" v-bind="$attrs">
    </div>

    <template v-if="$scopedSlots.after">
      <slot name="after" :remote="remote" :uploading="uploading" :percent="uploadPercent"></slot>
    </template>
    <template v-else>
      <span class="upload-filename" v-if="!remote">
        <template v-if="value">{{ value.name }}</template>
        <template v-else>未选择任何文件</template>
      </span>
    </template>

    <em class="cb-upload-message cb-validation-error-container"></em>
    <img class="file-preview" :src="value | createObjectURL" @load="handleLoad" @error="handleLoad" :style="'max-height:' + previewSize + 'px'" v-if="preview && isImage()">
    <audio class="file-preview" :src="value | createObjectURL" @load="handleLoad" @error="handleLoad" :style="'max-height:' + previewSize + 'px'" controls v-if="preview && isAudio()"></audio>
    <video class="file-preview" :src="value | createObjectURL" @load="handleLoad" @error="handleLoad" :style="'max-height:' + previewSize + 'px'" controls v-if="preview && isVideo()"></video>
  </div>
</template>

<script>
import $ from 'jquery';
import get from 'lodash/get';

export default {
  name: 'CbUpload',

  filters: {
    createObjectURL(value) {
      if (value instanceof File) {
        return URL.createObjectURL(value);
      }
      else {
        return value;
      }
    }
  },

  props: {
    value: {
      type: [String, Number, Array, File],
      default: ''
    },
    name: {
      type: String,
      default: 'cb-upload-' + String(+new Date()) + String(Math.floor(Math.random() * 9999))
    },
    fileKey: {
      type: String,
      default: 'file'
    },
    action: {
      type: String,
      default: ''
    },
    resultKey: {
      type: String,
      default: ''
    },
    preview: {
      type: Boolean,
      default: true
    },
    previewSize: {
      type: String,
      default: '100'
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    tiny: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: '选择文件'
    },
    remote: {
      type: Boolean,
      default: false
    },
    additionalData: {
      type: Object,
      default: () => ({})
    },
    checkRequestSuccess: {
      type: Function,
      default: () => true
    }
  },

  data() {
    return {
      uploading: false,
      uploadPercent: 0
    }
  },

  computed: {
    buttonClass() {
      return [
        `btn-${this.theme}`,
        {
          disabled: this.uploading || this.disabled,
          'btn-lg': this.large,
          'btn-sm': this.small,
          'btn-xs': this.tiny,
          'btn-block': this.block,
          'btn-flat': this.flat
        }
      ];
    }
  },

  watch: {
    value() {
      const instance = $(this.$refs.file).parsley?.();

      if (!instance || instance.parent.__class__ !== 'Form') {
        return;
      }

      if (instance.parent.validationResult !== null) {
        instance.validate();
      }
    }
  },

  methods: {
    handleClick() {
      if (this.disabled || this.uploading) {
        return;
      }

      this.$refs.file.click();
    },

    handleFileChange() {
      const el = this.$refs.file;
      const file = el.files[0];

      el.value = null;

      if (this.remote) {
        this.handleRemoteFileChange(el, file);
      }
      else {
        this.handleLocalFileChange(el, file);
      }
    },

    handleLocalFileChange(el, file) {
      this.$emit('input', file);

      // 更新 base64 数据
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.$emit('update:base64Value', reader.result);
      });
      reader.readAsDataURL(file);
    },

    async handleRemoteFileChange(el, file) {
      el.disabled = true;

      this.$emit('input', '');

      this.uploading = true;
      this.uploadPercent = 0;

      const fd = new FormData();

      for (const key in this.additionalData) {
        if (Object.prototype.hasOwnProperty.call(this.additionalData, key)) {
          const value = this.additionalData[key];

          if (value === undefined) {
            continue;
          }

          if (Array.isArray(value)) {
            value.forEach((item) => {
              fd.append(`${key}[]`, item);
            });
          }
          else {
            fd.append(key, value);
          }
        }
      }

      fd.append(this.fileKey, file);

      $.ajax({
        type: 'POST',
        url: this.action,
        async: true,
        data: fd,
        cache: false,
        contentType: false,
        processData: false,
        timeout: 1000 * 60 * 30,
        xhr: () => {
          const xhr = $.ajaxSettings.xhr();
          if (xhr.upload) {
            xhr.upload.addEventListener('progress', (event) => {
              if (event.lengthComputable) {
                this.uploadPercent = Math.floor(event.loaded / event.total * 100);
              }
            }, false);
          }
          return xhr;
        },
        success: (data, textStatus, jqXHR) => {
          const isSuccess = this.checkRequestSuccess(data, {
            requestUrl: this.action,
            requestData: Object.fromEntries(fd),
            status: jqXHR.status,
            statusText: jqXHR.statusText,
            responseText: jqXHR.responseText,
            responseHeaders: jqXHR.getAllResponseHeaders()
          });

          if (isSuccess) {
            this.$emit('input', this.resultKey ? get(data, this.resultKey) : data);
          }

          this.$emit('request-complete', {
            isSuccess,
            data,
            responseText: jqXHR.responseText,
            status: jqXHR.status,
            statusText: jqXHR.statusText
          });
        },
        error: (jqXHR) => {
          this.$emit('request-complete', {
            isSuccess: false,
            data: {},
            error: true,
            responseText: jqXHR.responseText,
            status: jqXHR.status,
            statusText: jqXHR.statusText
          });
        },
        complete: () => {
          el.disabled = false;
          this.uploading = false;
        }
      });
    },

    dispatch(event, args = [], component) {
      const parent = component ? component.$parent : this.$parent;

      if (parent) {
        parent.$emit(event, ...args);

        this.dispatch(event, args, parent);
      }
    },

    handleLoad() {
      this.dispatch('dialog-adjust-position');
    },

    checkFileType(regex) {
      const value = this.remote ? this.value : this.value.name;
      return this.value && regex.test(value)
    },

    isImage() {
      return this.checkFileType(/\.(?:jpe?g|png|gif|svg|webp)$/i);
    },

    isAudio() {
      return this.checkFileType(/\.(?:mp3|wav|ogg)$/i);
    },

    isVideo() {
      return this.checkFileType(/\.(?:mp4|avi)$/i);
    }
  }
}
</script>
