<script setup lang="ts">
import { Store, type AboutMe } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';

const store = Store()

const lang = storeToRefs(store).lang

const aboutMe = ref<AboutMe>(lang.value === 'eng' ? store.aboutMeEng : store.aboutMeRus)

watch(lang, (newLang) => {
	if (newLang !== 'eng') {
		aboutMe.value = store.aboutMeRus
	}
	else {
		aboutMe.value = store.aboutMeEng
	}
})

</script>

<template>
	<div>
		<h2>
			{{ aboutMe.title }}
		</h2>
		<p>
			{{ aboutMe.main }}
		</p>
		<li v-for="project in aboutMe.projects">
			{{ project.info }}
			<p>
				{{ project.patent }}
			</p>
			<p>
				{{ project.addit }}
			</p>
			<p>
				{{ project.result }}
			</p>
		</li>
	</div>
</template>

<style>
</style>
