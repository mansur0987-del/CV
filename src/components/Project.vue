<script setup lang="ts">
import { Store, type MyProjects } from '@/stores/store'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue';
import { ElCollapse, ElCollapseItem, ElCarousel, ElCarouselItem } from 'element-plus'

const store = Store()

const {lang} = storeToRefs(store)

const myProjects = ref<MyProjects>(lang.value === 'Eng' ? store.myProjectEng : store.myProjectRus)

watch(lang, (newLang) => {
	if (newLang !== 'Eng') {
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
		<el-collapse accordion class="StudyCollapse">
			<el-collapse-item v-for="project in myProjects.project"
			:title="project.name" class="StudyCollapseItem">
				<p v-for="str in project.description">
					{{ str }}
				</p>
				<a :href="project.link" style="color: inherit;"> {{project.link}}</a>
				<el-carousel type="card" v-if="project.screen.length">
					<el-carousel-item v-for="screen in project.screen" :key="screen" class="StudyCollapseItemCarouselItem">
						<img :src="screen" justify="center"/>
					</el-carousel-item>
				</el-carousel>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<style>
.StudyCollapse{
	width: 85vw;
	height: 100%;
	border: 1px solid #7c8db0;
	--el-collapse-header-bg-color: var(--el-color-info-light-9);
	--el-collapse-content-bg-color: var(--el-color-info-light-9);
}

.dark .StudyCollapse {
	--el-collapse-header-bg-color: rgb(68, 67, 86);
	--el-collapse-content-bg-color: rgb(68, 67, 86);
}

.StudyCollapse img {
	height: 40vh;
	width: 45vw;
}

.StudyCollapse .StudyCollapseItemCarouselItem {
	height: 40vh;
	width: 45vw;
}

.StudyCollapse .StudyCollapseItem {
	height: 100%;
}

.StudyCollapse .el-collapse-item__content {
    height: 70vh;
    overflow-x: auto;
}

.StudyCollapse .el-carousel__indicators--horizontal {
    bottom: -2vh;

}

.StudyCollapse .el-carousel__container {
    position: relative;
    height: 40vh;
}

.StudyCollapse .el-carousel__button {
    padding: 2px;
	height: 15px;
	width: 15px;
}

@media screen and (max-width: 800px) {
	.StudyCollapse .el-carousel__container {
		position: relative;
		height: 25vh;
	}
	.StudyCollapse .el-carousel__indicators--horizontal {
		bottom: -2vh;
		width: fit-content;
	}

	.StudyCollapse img {
		height: 20vh;
		width: 45vw;
	}

	.StudyCollapse .StudyCollapseItemCarouselItem {
		height: 20vh;
		width: 45vw;
	}
}

@media screen and (max-height: 600px) {
	.StudyCollapse .el-collapse-item__content {
    height: 50vh;
}
}

</style>
