export const StringUtil = {
  isEmpty: function (value) {
    return value == null ? true : value == '';
  },

  contain: function (value, key) {
    return StringUtil.parseString(value).indexOf(key) != -1;
  },

  removeString: function (value, key) {
    return StringUtil.parseString(value).replace(key, '');
  },

  parseString: function (value) {
    return String(value);
  },

  toUpperCase: function (value) {
    return StringUtil.parseString(value).toUpperCase();
  },

  toLowerCase: function (value) {
    return StringUtil.parseString(value).toLowerCase();
  },

  toUpperCaseFirstChar: function (value) {
    value = StringUtil.parseString(value).toLowerCase();
    value = value.trim();

    let valueList = value.split(' ');
    for (let i = 0; i < valueList.length; i++) {
      valueList[i] =
        valueList[i].charAt(0).toUpperCase() + valueList[i].slice(1);
    }
    return valueList.join(' ');
  },

  replace: function (value, key, val) {
    return value.replace(key, val);
  },

  split: function (value, key) {
    return value.split(key);
  },
};
