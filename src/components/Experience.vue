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
		<h1 style="text-align: center;"> {{ Experiences.name }} </h1>
		<el-carousel
			width="90vw"
			height="90vh"
			type="card"
			:autoplay="false"
		>
			<el-carousel-item v-for="(exp) in Experiences.exp">
				{{ exp.start_date + ' - ' + exp.end_date }}
				<div class="CardShow">

					<h4> {{ exp.position }} </h4>
					<p>{{ exp.company }}</p>
					<a :href="exp.site"> {{exp.site}}</a>
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
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<style>

.el-carousel__item .CardShow {
	color: #475669;
  /*color: #475669;*/
  /*opacity: 0.75;*/
  /*line-height: 200px;*/
  margin: 0;
  text-align: center;
}

/*.el-carousel__item:nth-child(1n) {
  background-color: #99a9bf;
}*/

.el-carousel__item:nth-child(1n) {
	/*color: #475669;*/

}

</style>
