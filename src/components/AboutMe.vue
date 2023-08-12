<script setup lang="ts">
import { Store } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';

const store = Store()

const {lang} = storeToRefs(store)

interface Project {
	info: string,
	patent?: string,
	addit?: string,
	result: string,
}

interface AboutMe {
	title: string,
	main: string,
	projects: Project[],
}

const aboutMeRus: AboutMe = {
	title: "Обо мне",
	main: "Имею пятилетний опыт работы на позиции системного аналитика. \
	Разрабатывал с командой сервисы по автоматизации юридических и финансовых процессов",
	projects:
	[
		{
			info: "Создание системы автоматизированного формирования юридического заключения.",
			patent: "Патент: RU2732071C1",
			addit: "Зарегистрирован в реестре отечественного ПО 17.06.2022 №2022661214",
			result: "Оптимизация временных и человеческих ресурсов более чем в 5 раз. \
			Исключение ошибок из-за человеческого фактора.",
		},{
			info: "Создание системы по автоматизированному взаимодействие между внутренними \
			сервисами брокера с внешними системами банков и Национального расчетного депозитария (НРД).",
			result: "Оптимизация временных и человеческих ресурсов более чем в 2 раза."
		},
		{
			info: "Внедрение системы по полуавтоматизированному формированию документов в \
			внутренние системные контуры крупного бизнеса. ",
			result: "Оптимизация временных и человеческих ресурсов более чем в 3 раза. \
			Минимизация ошибок из-за человеческого фактора."
		}
	]
}

const aboutMeEng: AboutMe = {
	title: "About me",
	main: "I have five years of experience as a systems analyst. \
	Developed services for automating legal and financial processes with my team",
	projects: [
		{
			info: "Creation of a system for automated formation of a legal opinion.",
			patent: "Patent: RU2732071C1",
			addit: "Registered in the register of domestic software on 17.06.2022 №2022661214.",
			result: "Optimization of time and human resources more than 5 times. Elimination of \
			errors due to human factor."
		},
		{
			info: "Creation of a system for automated interaction between the broker's internal \
			services and external systems of banks and the National Settlement Depository (NSD).",
			result: "Optimization of time and human resources by more than 2 times."
		},
		{
			info: "Implementation of a system for semi-automated document generation into the \
			internal system circuits of a large business.",
			result: "Optimization of time and human resources more than 3 times. Minimization \
			of errors due to human factor."
		}
	]
}

const aboutMe = ref<AboutMe>(lang.value === 'eng' ? aboutMeEng : aboutMeRus)

watch(lang, (newLang) => {
	if (newLang !== 'eng') {
		aboutMe.value = aboutMeRus
	}
	else {
		aboutMe.value = aboutMeEng
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
