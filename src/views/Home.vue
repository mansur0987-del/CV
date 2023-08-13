<script setup lang="ts">
import Theme from '@/components/Theme.vue'
import Lang from '@/components/Lang.vue'
import Avatar from '@/components/Avatar.vue'
import MainInfo from '@/components/MainInfo.vue';
import AboutMe from '@/components/AboutMe.vue';
import Study from '@/components/Study.vue';
import Experience from '@/components/Experience.vue';
</script>
<template>
	<div class="ThemeLang">
		<Theme class="Theme"/>
		<Lang class="Lang"/>
	</div>

	<div class="MainInfo">
		<div class="LeftBar">
			<Avatar class="Avatar" />
		</div>
		<MainInfo class="MainInfoText" />
		<div class="MainBar">
			<AboutMe class="AboutMe"/>
			<Experience class="Experience"/>
			<Study class="Study"/>
		</div>


	</div>

</template>
<style>

p, h1, h2, h3, h4 {
    margin: 3px;
    padding: 0;
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

@media screen and (max-width: 680px) {
	h1 {
		font-size: 1.3rem;
	}

	h2 {
		font-size: 1.1rem
	}

	h3 {
		font-size: 0.9rem;
	}

	h4 {
		font-size: 0.7rem;
	}

	div {
		font-size: 0.5rem;
	}
}

@media screen and (max-width: 400px) {
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
}

.ThemeLang {
	position: fixed;
	top: 2vh;
	right: 2vw;
	z-index: 1;
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
	left: 1vw;
	height: 98vh;
	width: 98vw;
	background-color:#fce8d0;;
	border-radius: 2rem;
	overflow: auto;
	z-index: 0;
	.LeftBar {
		padding: 20px;
		.Avatar {
			width: 20vw;
			border-radius: 2rem;
		}
	}

	.MainInfoText {
		position: -webkit-sticky;
		position:sticky;
		top: 10px;
		padding-left: 1vw;
		width: 20vw;
		font-family: "Times New Roman", Times, serif;
	}

	.MainBar {
		position: absolute;
		top: 0px;
		left: 25vw;
		width: 60vw;
		max-width: fit-content;
		.AboutMe {
			padding-top: 15px;
			font-family: "Times New Roman", Times, serif;
			word-wrap: break-word;
		}
		.Experience {
			padding-top: 20px;
			font-family: "Times New Roman", Times, serif;
			word-wrap: break-word;
			width: fit-content;
			max-width: fit-content;
			z-index: 1;
		}
		.Study {
			padding-top: 20px;
			font-family: "Times New Roman", Times, serif;
			z-index: 1;
		}
	}

}

.dark {
	.MainInfo {
		background-color:rgb(77, 77, 77);
	}
}
</style>
