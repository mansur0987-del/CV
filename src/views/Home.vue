<script setup lang="ts">
import Theme from '@/components/Theme.vue'
import Lang from '@/components/Lang.vue'
import Avatar from '@/components/Avatar.vue'
import MainInfo from '@/components/MainInfo.vue';
import AboutMe from '@/components/AboutMe.vue';
</script>
<template>
	<div class="ThemeLang">
		<Theme class="Theme"/>
		<Lang class="Lang"/>
	</div>

	<div class="MainInfo">
		<Avatar class="Avatar" />
		<MainInfo class="MainInfoText" />

		<AboutMe class="AboutMe"/>
	</div>



</template>
<style>

p, h1, h2, h3 {
    margin: 3px;
    padding: 0;
}

.ThemeLang {
	position: fixed;
	top: 1vh;
	right: 0vw;
	.Theme {
		position: absolute;
		right: 10px;
	}
	.Lang {
		position: absolute;
		right: 80px;
	}
}

.MainInfo {
	position: fixed;
	left: 15vw;
	height: 95vh;
	width: 60vw;
	background-color:#fce8d0;;
	border-radius: 2rem;
	overflow: auto;
	.Avatar {
		position: relative;
		height: 15rem;
		border-radius: 2rem;
		padding: 20px;

	}
	.MainInfoText {
		position:absolute;
		top: 20px;
		left: 280px;
		width: 39vw;
		font-family: "Times New Roman", Times, serif;
	}
	.AboutMe {
		position: absolute;
		left: 20px;
		font-family: "Times New Roman", Times, serif;
		word-wrap: break-word;
	}
}

.dark {
	.MainInfo {
		background-color:rgb(77, 77, 77);
	}
}
</style>
