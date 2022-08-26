import { API } from "germinal_api";
import { reactive, watch, computed } from "vue";
import { _, lStorage } from "@ventose/ui";
import { get, set } from "idb-keyval";

export const State_Music = reactive({
	songId: 0,
	personalizedNewSong: [],
	audio: new Audio(),
	loopType: 0, //循环模式 0 单曲循环 1 列表循环 2随机播放
	volume: (() => {
		const volume = lStorage["PLAYER-VOLUME"];
		if (volume) {
			return volume * 100;
		} else {
			return 20;
		}
	})(),
	playList: [], //播放列表,
	showPlayList: false,
	id: 0,
	url: "",
	songUrl: {},
	song: {},
	isPlaying: false, //是否播放中
	isPause: false, //是否暂停
	sliderInput: false, //是否正在拖动进度条
	ended: false, //是否播放结束
	muted: false, //是否静音
	currentTime: 0, //当前播放时间
	duration: 0 //总播放时长
});

let intervalTimer = null;

const cacheAudioVolume = _.debounce(function (audiovolume) {
	lStorage["PLAYER-VOLUME"] = audiovolume;
}, 1000);

export const Actions_Music = {
	playMethods: {
		rePlay() {},
		next() {},
		randomPlay() {}
	},
	handlePlayEnd() {
		console.log("播放结束");
		Actions_Music.stopSong();
		switch (State_Music.loopType) {
			case 0:
				Actions_Music.playMethods.rePlay();
				break;
			case 1:
				Actions_Music.playMethods.next();
				break;
			case 2:
				Actions_Music.playMethods.randomPlay();
				break;
		}
	},
	stopSong() {
		State_Music.isPlaying = false;
		State_Music.audio.pause();
		State_Music.audio.currentTime = 0;
		State_Music.currentTime = 0;
	},
	setCurrentTime(val) {
		State_Music.audio.currentTime = val;
	},
	intervalCurrentTime() {
		State_Music.currentTime = parseInt(
			State_Music.audio.currentTime.toString()
		);
		State_Music.duration = parseInt(State_Music.audio.duration.toString());
		State_Music.ended = State_Music.audio.ended;
	},
	//音量设置
	setVolume(n) {
		n = n > 100 ? 100 : n;
		n = n < 0 ? 0 : n;
		State_Music.volume = n;
		const audioVolume = n / 100;
		State_Music.audio.volume = audioVolume;
		cacheAudioVolume(audioVolume);
	},
	toggleVolumeMute() {
		State_Music.muted = !State_Music.muted;
		State_Music.audio.muted = State_Music.muted;
	},
	togglePlayOrPause() {
		if (!State_Music.songId) return;
		State_Music.isPlaying = !State_Music.isPlaying;
		if (State_Music.isPlaying) {
			State_Music.audio.play();
		} else {
			State_Music.audio.pause();
		}
	},
	async playSongBuId(id) {
		if (id == State_Music.songId) return;
		State_Music.isPlaying = false;

		const res = await API.music.getSongUrlBuId(id);
		const data = res.data;

		State_Music.audio.src = _.first(data).url;

		function canPlay() {
			return new Promise(resolve => {
				State_Music.audio.oncanplay = function () {
					if (intervalTimer) {
						clearInterval(intervalTimer);
					}
					intervalTimer = setInterval(Actions_Music.intervalCurrentTime, 1000);
					resolve(State_Music.duration);
				};
			});
		}

		State_Music.audio.load();
		await canPlay();
		await State_Music.audio.play();
		State_Music.isPlaying = true;
		State_Music.songUrl = data;
		State_Music.url = data.url;
		State_Music.songId = id;
		const audioVolume = State_Music.volume / 100;
		State_Music.audio.volume = audioVolume;
		cacheAudioVolume(audioVolume);
	},
	async getPersonalizedNewSong() {
		if (State_Music.personalizedNewSong.length === 0) {
			const { result } = await API.music.getPersonalizedNewSong();
			State_Music.personalizedNewSong = result;
		}
		return State_Music.personalizedNewSong;
	}
};

export const Cpt_iconSound = computed(() => {
	return State_Music.muted ? "soundMute" : "sound";
});

watch(
	() => State_Music.ended,
	ended => {
		if (!ended) return;
		Actions_Music.handlePlayEnd();
	}
);
