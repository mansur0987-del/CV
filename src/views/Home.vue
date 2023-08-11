<script setup lang="ts">
import Theme from '@/components/Theme.vue'
import Lang from '@/components/Lang.vue'
import Avatar from '@/components/Avatar.vue'
import MainInfo from '@/components/MainInfo.vue';
</script>
<template>
	<div class="ThemeLang">
		<Theme class="Theme"/>
		<Lang class="Lang"/>
	</div>
	<div class="MainInfo">
		<Avatar class="Avatar" />
		<MainInfo class="MainInfoText" />
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
	left: 25vw;
	height: 95vh;
	width: 50vw;
	background-color:#fce8d0;;
	border-radius: 2rem;
	overflow: auto;
	.Avatar {
		position: relative;
		height: 15rem;
		border-radius: 2rem;
		padding: 5px;
	}
	.MainInfoText {
		position:absolute;
		top: 0px;
		left: 250px;
		width: 30vw;
		font-family: "Times New Roman", Times, serif;
	}
}

.dark {
	.MainInfo {
		background-color:rgb(77, 77, 77);
	}
}
</style>
