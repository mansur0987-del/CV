<script setup lang="ts">
import { Store, type AboutMe } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElCard } from 'element-plus'

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
		<el-card>
			<h3>
				{{ aboutMe.title }}
			</h3>
			<p>
				{{ aboutMe.main }}
			</p>
			<ul v-for="project in aboutMe.projects">
				<li>
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
			</ul>
		</el-card>
	</div>
</template>

<style>
</style>
