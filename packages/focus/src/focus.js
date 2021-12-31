export default {
  name: 'CbFocus',

  inserted(el) {
    setTimeout(() => {
      try {
        if (el) {
          el.focus();
        }
      }
      catch (e) {}
    }, 100);
  }
};
