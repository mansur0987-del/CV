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
		<div v-if="lang === 'Eng'">
			<svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6"><path fill="#fff" d="M0 0h9v3H0z"/><path fill="#DA291C" d="M0 3h9v3H0z"/><path fill="#0032A0" d="M0 2h9v2H0z"/></svg>
		</div>
		<div v-else>
			<svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#a)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>
		</div>
	</el-button>
</template>
<style>
</style>
