<template>
  <view class="content">
    <uni-collapse>
      <uni-collapse-item title="图片" :open="true">
        <image class="logo" src="/static/logo.png" />
      </uni-collapse-item>
    </uni-collapse>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UniCollapse from "@/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue";
import UniCollapseItem
  from "@/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue";
const title = ref('Hello');
</script>

<style lang="scss">
@import '../../sass/GlobalVariable/color';
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: $primary-color;
}
</style>
