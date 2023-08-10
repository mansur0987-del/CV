<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import {ElButton} from 'element-plus'
import { Store } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)

const store = Store()
const {lang} = storeToRefs(store)

interface Theme {
	dark: string,
	light: string,
}

const themeEng: Theme = {
	dark: 'Dark',
	light: 'Light'
}

const themeRus: Theme = {
	dark: 'Ночь',
	light: 'День'
}

const theme = ref<Theme>(themeEng)

watch(lang, (newLang) => {
	if (newLang !== 'eng'){
		theme.value = themeRus
	}
	else {
		theme.value = themeEng
	}
})

</script>
<template>
	<el-button @click="toggleDark()">
		<i inline-block align-middle i="dark:carbon-moon carbon-sun" />
		<span class="ml-2">{{ isDark ? theme.dark : theme.light }}</span>
	</el-button>
</template>
<style>
</style>
