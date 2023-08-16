<script setup lang="ts">
import { Store, type MyProjects } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElCollapse, ElCollapseItem, ElCarousel, ElCarouselItem } from 'element-plus'

const store = Store()

const {lang} = storeToRefs(store)

const myProjects = ref<MyProjects>(lang.value === 'eng' ? store.myProjectEng : store.myProjectRus)

watch(lang, (newLang) => {
	if (newLang !== 'eng') {
		myProjects.value = store.myProjectRus
	}
	else {
		myProjects.value = store.myProjectEng
	}
})

</script>

<template>
	<div>
		<h2 style="padding-bottom: 10px;"> {{ myProjects.name }} </h2>
		<el-collapse accordion >
			<el-collapse-item v-for="project in myProjects.project"
			:title="project.name">
				<p v-for="str in project.description">
					{{ str }}
				</p>
				<a :href="project.link"> {{project.link}}</a>
				<el-carousel type="card" height="calc(2em * 6)" width="calc(2em * 13)" v-if="project.screen.length">
					<el-carousel-item v-for="screen in project.screen" :key="screen">
						<img :src="screen" style="height:calc(2em * 6); width: calc(2em * 13)" justify="center"/>
					</el-carousel-item>
				</el-carousel>
			</el-collapse-item>
		</el-collapse>
	</div>

</template>

<style>
</style>
