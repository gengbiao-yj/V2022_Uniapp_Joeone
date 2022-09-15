import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('index', () => {
	// 计数增减
	const count = ref(0);
	const addCount = () => {
		count.value++;
	}
	const subCount = () => {
		count.value--;
	}

	return {
		count,
		addCount,
		subCount
	}
})