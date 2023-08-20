<script setup lang="ts">
import { Store, type DownloadCV } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElButton,  } from 'element-plus'

const store = Store()

const {lang} = storeToRefs(store)

const nameButton = ref<DownloadCV>(lang.value === 'Eng' ? store.downloadCVEng : store.downloadCVRus)

watch(lang, (newLang) => {
	if (newLang !== 'Eng') {
		nameButton.value = store.downloadCVRus
	}
	else {
		nameButton.value = store.downloadCVEng
	}
})

</script>

<template>
	<div>
		<a :href="nameButton.url" download>
			<el-button type="primary" plain>
				<svg height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
					<path fill="currentColor" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"></path>
				</svg>
			</el-button>
		</a>
	</div>
</template>

<style>
</style>
