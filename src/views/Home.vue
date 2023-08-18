<script setup lang="ts">
import Theme from '@/components/Theme.vue'
import Lang from '@/components/Lang.vue'
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
	</div>
	<div class="mainCarusel">
		<el-carousel
			height="100vh"
			direction="vertical"
			:autoplay="false"
		>
			<el-carousel-item>
				<Avatar class="Avatar" />
				<MainInfo class="MainInfoText" />
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
	<!--<div class="MainInfo">
		<div class="ThemeLang">
			<Theme class="Theme"/>
			<Lang class="Lang"/>
		</div>
		<Avatar class="Avatar" />
		<MainInfo class="MainInfoText" />
		<div class="MainBar">
			<AboutMe class="AboutMe"/>
			<Study class="Study"/>
			<Experience class="Experience"/>
			<Project class="Project" />
		</div>
	</div>-->

</template>
<style>

html, body {
  overflow: hidden;
}

html {
	background-image: linear-gradient( 68.4deg,  rgba(158,143,254,1) 0.2%, rgba(113,202,255,1) 93.3% );
}

.dark {
	background-image: radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% );;
}


p, h1, h2, h3, h4, ul {
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
	right: 80px;
}

.Avatar {
	position: absolute;
	left: 20vw;
	top: 5vh;
	height:45vh;
	border-radius: 2rem;
}

.MainInfoText {
	position: absolute;
	left: 50vw;
	top: 5vh;
	padding: 2vw;
	width: 30vw;
	font-family: "Times New Roman", Times, serif;
}

.AboutMe {
	position: absolute;
	bottom: 10vh;
	left: 5vw;
	word-wrap: break-word;
}

.MainBar {
	position: absolute;
	top: 0px;
	left: 25vw;
	width: 70vw;
	max-width: fit-content;
}


/*.Experience {
	padding-top: 2vh;
	word-wrap: break-word;
	width: fit-content;
	max-width: fit-content;
	z-index: 1;
}*/
.Study {
	padding-top: 2vh;
	z-index: 1;
}

.Project {
	padding-top: 2vh;
	padding-bottom: 1vh;
	z-index: 1;
}

.dark .MainInfo {
	background-color:rgb(77, 77, 77);
}

.el-timeline-item__timestamp {
	color: black;
}

.dark .el-timeline-item__timestamp {
	color: white;
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

@media screen and (max-width: 800px) {
	h1 {
		font-size: 1.2rem;
	}

	h2 {
		font-size: 1rem
	}

	h3 {
		font-size: 0.8rem;
	}

	h4 {
		font-size: 0.6rem;
	}

	div {
		font-size: 0.4rem;
	}

	.MainInfo {
		height: 87vh;
		top: 2vh;
	}

	.MainBar {
		width: 70vw;
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
