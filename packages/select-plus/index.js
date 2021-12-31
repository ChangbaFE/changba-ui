import $ from 'jquery';
import Select2 from 'select2/src/js/select2/core';
import Defaults from 'select2/src/js/select2/defaults';
import Utils from 'select2/src/js/select2/utils';
import Translation from 'select2/src/js/select2/translation';
import EnglishLanguage from 'select2/src/js/select2/i18n/en';
import ChineseLanguage from 'select2/src/js/select2/i18n/zh-CN';

import CbSelectPlus from './src/select-plus.vue';

const init = function() {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    const thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function(options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function() {
          const instanceOptions = $.extend(true, {}, options);

          return new Select2($(this), instanceOptions);
        });

        return this;
      }
      else if (typeof options === 'string') {
        let ret;
        const args = Array.prototype.slice.call(arguments, 1);

        this.each(function() {
          const instance = Utils.GetData(this, 'select2');

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      }
      else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }
};

const addLanguage = function(name, language) {
  Translation._cache[name] = language;
};

init();

addLanguage('en', EnglishLanguage);
addLanguage('zh-CN', ChineseLanguage);

CbSelectPlus.install = function(Vue) {
  Vue.component(CbSelectPlus.name, CbSelectPlus);
};

CbSelectPlus.addLanguage = addLanguage;

export default CbSelectPlus;
