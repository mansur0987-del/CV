<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import {ElButton} from 'element-plus'

const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>
<template>
	<el-button @click="toggleDark()">
		<i inline-block align-middle i="dark:carbon-moon carbon-sun" />
		<span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
	</el-button>
</template>
<style>
</style>
