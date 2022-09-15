"use strict";
var common_vendor = require("../common/vendor.js");
const useStore = common_vendor.defineStore("index", () => {
  const count = common_vendor.ref(0);
  const addCount = () => {
    count.value++;
  };
  const subCount = () => {
    count.value--;
  };
  return {
    count,
    addCount,
    subCount
  };
});
exports.useStore = useStore;
