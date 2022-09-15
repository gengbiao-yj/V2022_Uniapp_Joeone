<template>
	<view class="content">
		<uni-collapse class="uni-collapse">
			<uni-collapse-item title="图片" :open="true">
				<image class="logo" src="/static/logo.png" />
			</uni-collapse-item>
		</uni-collapse>
		<label>{{count}}</label>
		<label class="button" @click="addClick">+1</label>
		<label class="button" @click="subClick">-1</label>
	</view>
</template>

<script setup lang="ts">
	import UniCollapse from '@/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue';
	import UniCollapseItem from '@/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue';
	import {
		useStore
	} from '@/store/index';
	import {
		computed
	} from 'vue';

	const store = useStore();
	const count = computed(() => store.count);
	const addClick = () => {
		store.addCount();
	}
	const subClick = () => {
		store.subCount();
	}
</script>

<style lang="scss">
	@import '../../sass/GlobalVariable/color';

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.uni-collapse {
			width: 100%;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx;
	}

	.button {
		width: 100rpx;
		height: 60rpx;
		text-align: center;
		line-height: 24px;
		border: 1px solid #666666;
		border-radius: 10rpx;
		background-color: aliceblue;
		font-weight: 600;
	}
</style>
