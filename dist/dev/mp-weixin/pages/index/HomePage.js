"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
if (!Math) {
  (UniCollapseItem + UniCollapse)();
}
const UniCollapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
const UniCollapseItem = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HomePage",
  setup(__props) {
    const store = store_index.useStore();
    const count = common_vendor.computed$1(() => store.count);
    const addClick = () => {
      store.addCount();
    };
    const subClick = () => {
      store.subCount();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u56FE\u7247",
          open: true
        }),
        b: common_vendor.t(common_vendor.unref(count)),
        c: common_vendor.o(addClick),
        d: common_vendor.o(subClick)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u8D44\u6599/GB-2022/Uniapp_Joeone/src/pages/index/HomePage.vue"]]);
wx.createPage(MiniProgramPage);
