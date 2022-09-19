<template>
	<!-- <div :style="State_App.test">
    {{ State_App.count }}
  </div> -->
	<LayoutMusicMobile v-if="State_App.isCurrentClientMobile" class="music-app" />
	<LayoutMusicPc v-else class="music-app" />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";

export default defineComponent({
	components: {
		LayoutMusicMobile: defineAsyncComponent(() =>
			import("./LayoutMusicMobile.vue")
		),
		LayoutMusicPc: defineAsyncComponent(() => import("./LayoutMusicPc.vue"))
	},
	setup() {
		return {
			State_App
		};
	},
	mounted_demo() {
		var audioCtx = new AudioContext();
		var button = this.$refs.button;
		var pre = this.$refs.pre;
		var myScript = this.$refs.script;

		pre.innerHTML = myScript.innerHTML;

		// Stereo
		var channels = 2;
		// Create an empty two-second stereo buffer at the
		// sample rate of the AudioContext
		var frameCount = audioCtx.sampleRate * 2.0;

		var myArrayBuffer = audioCtx.createBuffer(
			2,
			frameCount,
			audioCtx.sampleRate
		);

		button.onclick = function () {
			// Fill the buffer with white noise;
			//just random values between -1.0 and 1.0
			for (var channel = 0; channel < channels; channel++) {
				// This gives us the actual ArrayBuffer that contains the data
				var nowBuffering = myArrayBuffer.getChannelData(channel);
				for (var i = 0; i < frameCount; i++) {
					// Math.random() is in [0; 1.0]
					// audio needs to be in [-1.0; 1.0]
					nowBuffering[i] = Math.random() * 2 - 1;
				}
			}

			// Get an AudioBufferSourceNode.
			// This is the AudioNode to use when we want to play an AudioBuffer
			var source = audioCtx.createBufferSource();
			// set the buffer in the AudioBufferSourceNode
			source.buffer = myArrayBuffer;
			// connect the AudioBufferSourceNode to the
			// destination so we can hear the sound
			source.connect(audioCtx.destination);
			// start the source playing
			source.start();
		};
	}
});
</script>

<style lang="less">
.music-app {
	.title {
		font-weight: 700;
		text-shadow: 1px 1px rgba(7, 6, 100, 0.1);
		margin-right: 4px;
	}
}
</style>
