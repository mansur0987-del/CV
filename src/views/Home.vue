<script setup lang="ts">
import Theme from '@/components/Theme.vue'
import Lang from '@/components/Lang.vue'
import Download from '@/components/Download.vue';
import Avatar from '@/components/Avatar.vue'
import MainInfo from '@/components/MainInfo.vue';
import AboutMe from '@/components/AboutMe.vue';
import Study from '@/components/Study.vue';
import Experience from '@/components/Experience.vue';
import Project from '@/components/Project.vue';
import {ElCarousel, ElCarouselItem} from 'element-plus'

</script>
<template>
	<div class="ThemeLang">
		<Theme class="Theme"/>
		<Lang class="Lang"/>
		<Download class="Download"/>
	</div>
	<div class="mainCarusel">
		<el-carousel
			height="100vh"
			direction="vertical"
			:autoplay="false"
		>
			<el-carousel-item>
				<Avatar class="Avatar" />
				<MainInfo class="MainInfo" />
				<AboutMe class="AboutMe"/>
			</el-carousel-item>

			<el-carousel-item>
				<Study class="Study"/>
			</el-carousel-item>

			<el-carousel-item>
				<Experience class="Experience"/>
			</el-carousel-item>

			<el-carousel-item>
				<Project class="Project" />
			</el-carousel-item>

		</el-carousel>
	</div>
</template>
<style>

html, body {
  overflow: hidden;
}

html {
	background-color: var(--el-color-primary-light-9);
}

p, h1, h2, h3, h4, ul, a {
	margin: 0.6vh 0.6vw;
    padding: 0px;
	text-align:justify;
	font-family: "Times New Roman", Times, serif;
}

h1 {
	font-size: 2rem;
}

h2 {
	font-size: 1.6rem
}

h3 {
	font-size: 1.4rem;
}

h4 {
	font-size: 1.2rem;
}

div {
	font-size: 1rem;
}

ul {
	padding-inline-start: 2vw;
}

.ThemeLang {
    position: absolute;
    top: 3vh;
    right: 2vw;
    z-index: 1;
}
.Theme {
	position: absolute;
	right: 10px;
}
.Lang {
	position: absolute;
	right: 70px;
}

.Download {
	position: absolute;
	right: 120px;
}

.Avatar {
	position: absolute;
	left: 20vw;
	top: 5vh;
	height:35vh;
	border-radius: 0.5rem;
}

.MainInfo {
	position: absolute;
	left: 50vw;
	top: 5vh;
	font-family: "Times New Roman", Times, serif;
}

.AboutMe {
	position: absolute;
	bottom: 9vh;
	left: 5vw;
	word-wrap: break-word;
}

.el-carousel__button {
    display: block;
    opacity: .48;
    width: var(--el-carousel-indicator-width);
    height: var(--el-carousel-indicator-height);
    background-color: var(--el-color-primary-light-5);
    outline: 0;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: var(--el-transition-duration);
}

.MainBar {
	position: absolute;
	top: 0px;
	left: 25vw;
	width: 70vw;
	max-width: fit-content;
}

.Study {
	padding-top: 2vh;
	width: 85vw;
	z-index: 1;
}

.Project {
	padding-top: 2vh;
	padding-bottom: 1vh;
	z-index: 1;
}

.el-timeline {
    --el-timeline-node-color: var(--el-color-primary-light-5);
}

.el-collapse-item__header {
	font-size: 1rem;
	padding-left: 2vw;
}

.el-collapse-item__content {
    padding-bottom: 3vh;
	padding-top: 3vh;
	padding-left: 2vw;
	padding-right: 2vw;
}

.el-card {
	--el-card-padding: 0.4vh 0.2vw;
	max-width: 90vw;
	border: 1px solid var(--el-color-primary-light-5);
	background-color: var(--el-color-primary-light-8);
}

@media screen and (max-width: 900px) {
	h1 {
		font-size: 3em;
	}

	h2 {
		font-size: 2em;
	}

	h3 {
		font-size: 1em;
	}

	h4 {
		font-size: 0.5em;
	}

	div {
		font-size: 0.5rem;
	}
}

@media screen and (max-height: 600px) and (max-width: 1100px) {
	.Avatar {
		position: absolute;
		left: 2vw;
		top: 15vh;
		height:37vh;
		border-radius: 0,5rem;
	}

	.MainInfo {
		position: absolute;
		left: 24vw;
		top: 15vh;
		width: fit-content;
		max-width: 25vw;
		font-family: "Times New Roman", Times, serif;
	}

	.AboutMe {
		position: absolute;
		top: 10vh;
		left: 47vw;
		width: 45vw;
		word-wrap: break-word;
	}
}

@media screen and (max-width: 500px){
	.Avatar {
		position: absolute;
		left: 4vw;
		top: 8vh;
		height: 22vh;
		border-radius: 0.5rem;
	}

	.MainInfo {
		position: absolute;
		left: 48vw;
		top: 8vh;
		width: fit-content;
		max-width: 38vw;
		font-family: "Times New Roman", Times, serif;
	}

	.AboutMe {
		position: relative;
		top: 43vh;
		left: 4vw;
		width: 82vw;
	}

	.AboutMe div {
		padding-left: 1vw;
	}

	.el-collapse-item__header {
		padding-left: 2vw;
		font-size: 0.8rem;
	}

	.el-collapse-item__content {
		padding-bottom: 2vh;
		padding-top: 2vh;
		padding-left: 1vw;
		padding-right: 1vw;
	}

	.el-carousel {
		--el-carousel-indicator-width: 3vw;
	}
}

</style>
