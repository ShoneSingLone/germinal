<template>
	<MPlayer />
</template>

<script>
import { Methods_Music, State_Music } from "msrc/stateMusic";
import MPlayer from "msrc/components/player/player.vue";

export default {
	components: {
		MPlayer
	},
	setup() {
		return {
			State_Music
		};
	},
	computed: {}
};
</script>

<style lang="scss">
body,
html {
	line-height: 1;
	font-family: "PingFang SC", "STHeitiSC-Light", "Helvetica-Light", arial,
		sans-serif, "Droid Sans Fallback";
	user-select: none;
	-webkit-tap-highlight-color: transparent;
}

.g-relative {
	position: relative;
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
	transform: translate3d(100%, 0, 0);
}

.list-enter-active,
.list-leave-active {
	transition: all 0.3s;
}

.list-enter-from,
.list-leave-to {
	height: 0 !important;
}

@keyframes rotate {
	0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
