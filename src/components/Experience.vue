<script setup lang="ts">
import { Store, type Experiences } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus'

const store = Store()

const {lang} = storeToRefs(store)

const Experiences = ref<Experiences>(lang.value === 'eng' ? store.ExperiencesEng : store.ExperiencesRus)

watch(lang, (newLang) => {
	if (newLang !== 'eng') {
		Experiences.value = store.ExperiencesRus
	}
	else {
		Experiences.value = store.ExperiencesEng
	}
})

</script>

<template>
	<div>
		<h2 style="padding-bottom: 10px;"> {{ Experiences.name }} </h2>
		<el-timeline>
			<el-timeline-item v-for="(exp) in Experiences.exp" style="padding-inline-start: 0px"
			:timestamp="exp.start_date + ' - ' + exp.end_date" placement="top">
				<el-card>
					<h2> {{ exp.company }}</h2>
					<a :href="exp.site"> {{exp.site}}</a>
					<p>{{ exp.location }}</p>
					<p>{{ exp.position }}</p>
					<p>{{ exp.responsibility_name }}</p>
					<ul>
						<li v-for="res in exp.responsibility">
							{{ res.name }}
							<ul>
								<li v-for="des in res.description">
								{{ des }}
								</li>
							</ul>
						</li>
					</ul>
					<p>{{ exp.team }}</p>
					<p>{{ exp.tools }}</p>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<style>
</style>
