<script setup lang="ts">
import Theme from '@/components/Theme.vue'
import Lang from '@/components/Lang.vue'
import Avatar from '@/components/Avatar.vue'
import MainInfo from '@/components/MainInfo.vue';
import AboutMe from '@/components/AboutMe.vue';
import Study from '@/components/Study.vue';
import Experience from '@/components/Experience.vue';
import Project from '@/components/Project.vue';
</script>
<template>
	<div class="MainInfo">
		<div class="ThemeLang">
			<Theme class="Theme"/>
			<Lang class="Lang"/>
		</div>
		<Avatar class="Avatar" />
		<MainInfo class="MainInfoText" />
		<div class="MainBar">
			<AboutMe class="AboutMe"/>
			<Experience class="Experience"/>
			<Study class="Study"/>
			<Project class="Project" />
		</div>


	</div>

</template>
<style>

html, body {
  overflow: hidden;
}


p, h1, h2, h3, h4, ul {
	margin: 0px;
    margin-top: 0.2vh;
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
    top: 0vh;
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

.MainInfo {
	position: absolute;
	left: 1vw;
	top: 1vh;
	bottom: 2vh;
	height: max-content;
	width: 98vw;
	background-color:#fce8d0;;
	border-radius: 2rem;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	z-index: 0;
}

.Avatar {
	padding-top: 2vh;
	padding-left: 1vw;
	width: 20vw;
	border-radius: 2rem;
}

.MainInfoText {
	position: -webkit-sticky;
	position:sticky;
	top: 1vh;
	padding-left: 1vw;
	width: 20vw;
	font-family: "Times New Roman", Times, serif;
}

.MainBar {
	position: absolute;
	top: 0px;
	left: 25vw;
	width: 70vw;
	max-width: fit-content;
}

.AboutMe {
	padding-top: 15px;
	word-wrap: break-word;
}
.Experience {
	padding-top: 2vh;
	word-wrap: break-word;
	width: fit-content;
	max-width: fit-content;
	z-index: 1;
}
.Study {
	padding-top: 2vh;
	z-index: 1;
}

.Project {
	padding-top: 2vh;
	z-index: 1;
}

.dark .MainInfo {
	background-color:rgb(77, 77, 77);
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
