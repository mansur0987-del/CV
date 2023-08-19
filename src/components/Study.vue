<script setup lang="ts">
import { Store, type Studys } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus'

const store = Store()

const {lang} = storeToRefs(store)

const studys = ref<Studys>(lang.value === 'Eng' ? store.studysEng : store.studysRus)

watch(lang, (newLang) => {
	if (newLang !== 'Eng') {
		studys.value = store.studysRus
	}
	else {
		studys.value = store.studysEng
	}
})

</script>

<template>
	<div>
		<h2 style="padding-bottom: 10px;"> {{ studys.name }}</h2>
		<el-timeline style="overflow-x: auto; height: 80vh;">
			<el-timeline-item v-for="(study) in studys.study" style="padding-inline-start: 0px"
			:timestamp="study.start_date + ' - ' + study.end_date" placement="top">
				<el-card class="EducatCard">
					<h3>{{ study.name }}</h3>
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
