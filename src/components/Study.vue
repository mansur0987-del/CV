<script setup lang="ts">
import { Store } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus'

const store = Store()

const {lang} = storeToRefs(store)

interface Study {
	start_date: string,
	end_date: string,
	name: string,
	location: string,
	profession: string,
	lvl?: string
}

const studysRus: {
	name: string
	study: Study[]
} = {
	name: 'Образование',
	study:
	[
		{
			start_date: '2012',
			end_date: '2016',
			name: 'Московская Государственная юридическая академия им. О.Е. Кутафина',
			location: 'Москва',
			profession: 'Юриспруденция',
			lvl: 'Бакалавр'
		},
		{
			start_date: '2016',
			end_date: '2019',
			name: 'Московская Государственная юридическая академия им. О.Е. Кутафина',
			location: 'Москва',
			profession: 'Юриспруденция',
			lvl: 'Магистр'
		},
		{
			start_date: '2021',
			end_date: 'н.в.',
			name: '42 (École 42)',
			location: 'Москва, Ереван',
			profession: 'Архитектор по цифровым технологиям, Общее компьютерное программирование | программист'
		}
	]
}

const studysEng: {
	name: string
	study: Study[]
} = {
	name: 'Education',
	study:
	[
		{
			start_date: '2012',
			end_date: '2016',
			name: 'Kutafin Moscow State Law University (MSAL)',
			location: 'Moscow',
			profession: 'Lawyer',
			lvl: 'Bachelor of Science'
		},
		{
			start_date: '2016',
			end_date: '2019',
			name: 'Kutafin Moscow State Law University (MSAL)',
			location: 'Moscow',
			profession: 'Lawyer',
			lvl: 'Master of Science'
		},
		{
			start_date: '2021',
			end_date: 'present',
			name: '42 (École 42)',
			location: 'Moscow, Yerevan',
			profession: 'Digital Technology Architect, General Computer Programming | Programmer'
		}
	]
}

const studys = ref<{
	name: string,
	study: Study[]
}>(lang.value === 'eng' ? studysEng : studysRus)

watch(lang, (newLang) => {
	if (newLang !== 'eng') {
		studys.value = studysRus
	}
	else {
		studys.value = studysEng
	}
})

</script>

<template>
	<div>
		<h2 style="padding-bottom: 10px;"> {{ studys.name }}</h2>
		<el-timeline>
			<el-timeline-item v-for="(study) in studys.study" style="padding-inline-start: 0px"
			:timestamp="study.start_date + ' - ' + study.end_date" placement="top">
				<el-card>
					<h4>{{ study.name }}</h4>
					<p>{{ study.location}}</p>
					<p>{{ study.profession }}</p>
					<p> {{ study.lvl }}</p>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<style>
</style>
