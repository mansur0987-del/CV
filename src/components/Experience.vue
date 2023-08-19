<script setup lang="ts">
import { Store, type Experiences } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElTimeline, ElTimelineItem, ElCard, ElCarousel, ElCarouselItem } from 'element-plus'

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
		<h1 style="text-align: left;"> {{ Experiences.name }} </h1>
		<el-carousel
			width="90vw"
			height="90vh"
			type="card"
			:autoplay="false"
			class="Exp"
		>
			<el-carousel-item v-for="(exp) in Experiences.exp" class="CardShow">
				{{ exp.start_date + ' - ' + exp.end_date }}
				<h4> {{ exp.position }} </h4>
				<p>{{ exp.company }}</p>
				<a :href="exp.site" v-if="exp.site" style="color: inherit;"> {{exp.site}}</a>
				<p>{{ exp.location }}</p>
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
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<style>
.Exp {
	width: 95%;
}

.Exp .el-carousel__button {
    padding: 2px;
	height: 15px;
	width: 15px;
}

.Exp .CardShow {
	background-color:azure;
	border: 2px solid #7c8db0;
	height: 90%;
}

.dark .Exp .CardShow{
	background-color: rgb(68, 67, 86);
}

</style>
