<script setup lang="ts">
import { ElButton } from 'element-plus'
import { Store } from '@/stores/store'
import { storeToRefs } from "pinia";

const store = Store()

const {lang} = storeToRefs(store)

const toggleLang = () => {
	lang.value = (lang.value === 'eng' ? 'рус' : 'eng')
}

</script>
<template>
	<el-button @click="toggleLang()">
		{{ lang }}
	</el-button>
</template>
<style>
</style>
