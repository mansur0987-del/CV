<script setup lang="ts">
import Theme from '@/components/Theme.vue'
import Lang from '@/components/Lang.vue'
import Avatar from '@/components/Avatar.vue'
</script>
<template>
	<div class="ThemeLang">
		<Theme class="Theme"/>
		<Lang class="Lang"/>
	</div>
	<div class="MainInfo">
		<Avatar class="Avatar" />

	</div>
</template>
<style>
.ThemeLang {
	position: fixed;
	top: 1vh;
	right: 0vw;
	.Theme {
		position: absolute;
		right: 1rem;
	}
	.Lang {
		position: absolute;
		right: 5rem;
	}
}

.MainInfo {
	position: fixed;
	left: 25vw;
	height: 95vh;
	width: 50vw;
	background-color:#fce8d0;;
	border-radius: 4rem;
	overflow: auto;
	.Avatar {
		position: absolute;
		left: 0px;
		height: 15rem;
		border-radius: 4rem;
		padding: 5px;
	}
}

.dark {
	.MainInfo {
		background-color:rgb(77, 77, 77);
	}
}
</style>
