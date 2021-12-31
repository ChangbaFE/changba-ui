import CbUpload from './src/upload.vue';

CbUpload.install = function(Vue) {
  Vue.component(CbUpload.name, CbUpload);
};

export default CbUpload;
