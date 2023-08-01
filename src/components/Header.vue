<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'
import {ElButton} from 'element-plus'

const isDark = useDark()
const toggleDark = useToggle(isDark)


const lang = ref<string>('eng')
</script>

<template>
	<div class="dark">
		<el-button @click="toggleDark()">
			<i inline-block align-middle i="dark:carbon-moon carbon-sun" />
			<span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
		</el-button>
	</div>
</template>

<style>
.dark {
	position: fixed;
	top: 2vh;
	right: 5vh;
}
</style>
