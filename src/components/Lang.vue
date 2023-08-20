<script setup lang="ts">
import { ElButton } from 'element-plus'
import { Store } from '@/stores/store'
import { storeToRefs } from "pinia";

const store = Store()

const {lang} = storeToRefs(store)

const toggleLang = () => {
	lang.value = (lang.value === 'Eng' ? 'Рус' : 'Eng')
	localStorage.removeItem('lang')
	localStorage.setItem('lang', lang.value)
}

</script>
<template>
	<el-button @click="toggleLang()" type="primary" plain>
		{{ lang === 'Eng' ? 'Рус' : 'Eng' }}
	</el-button>
</template>
<style>
</style>
