import { API } from "germinal_api";
import { reactive, watch, computed } from "vue";
import { _, lStorage, setDocumentTitle } from "@ventose/ui";
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
	playlist: [], //播放列表,
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

let intervalTimer: NodeJS.Timer;

/* typescript 属性名称与数组保持一致 */
const LOOP_TYPE_NAME_ARRAY = [
	"playOrder",
	"playRandom",
	"playLoop",
	"playSingleLoop"
] as const;

type type_PlayMethods = {
	[prop in typeof LOOP_TYPE_NAME_ARRAY[number]]: Function;
};

const playMethods: type_PlayMethods = {
	playLoop(currentSongIndex) {
		const next = currentSongIndex + 1;
		if (next > State_Music.playlist.length - 1) {
			Actions_Music.playSongById(State_Music.playlist[0]?.id);
		} else {
			Actions_Music.playSongById(State_Music.playlist[next]?.id);
		}
	},
	playRandom(currentSongIndex) {
		let next: number;
		/* 如果只有一首，循环一首 */
		if (State_Music.playlist.length === 1) {
			next = 0;
			Actions_Music.playSongById(State_Music.playlist[0]?.id);
			return;
		}
		const max = State_Music.playlist.length - 1;
		const min = 0;
		const getNext = () => Math.floor(Math.random() * (max - min + 1)) + min;
		next = getNext();
		while (next === currentSongIndex) {
			next = getNext();
		}
		Actions_Music.playSongById(State_Music.playlist[next]?.id);
	},
	playOrder(currentSongIndex) {
		const next = currentSongIndex + 1;
		if (next > State_Music.playlist.length - 1) {
			Actions_Music.stopSong();
		} else {
			Actions_Music.playSongById(State_Music.playlist[next]?.id);
		}
	},
	playSingleLoop(currentSongIndex) {
		Actions_Music.playSongById(State_Music.playlist[currentSongIndex]?.id);
	}
};

const cacheAudioVolume = _.debounce(function (audiovolume) {
	lStorage["PLAYER-VOLUME"] = audiovolume;
}, 1000);

export const Actions_Music = {
	playMethods,
	palyPrevSong() {
		const currentSongIndex = _.findIndex(State_Music.playlist, {
			id: State_Music.songId
		});
		if (currentSongIndex > -1) {
			if (currentSongIndex === 0) {
				Actions_Music.playSongById(
					State_Music.playlist[State_Music.playlist.length - 1]?.id
				);
			} else {
				Actions_Music.playSongById(
					State_Music.playlist[currentSongIndex - 1]?.id
				);
			}
		}
	},
	playNextSong() {
		const currentSongIndex = _.findIndex(State_Music.playlist, {
			id: State_Music.songId
		});
		if (currentSongIndex > -1) {
			Actions_Music.playMethods.playLoop(currentSongIndex);
		}
	},
	removeSongFromPlaylistByIndex(index) {
		if (index <= State_Music.playlist.length - 1) {
			State_Music.playlist.splice(index, 1);
		}
	},
	handlePlayEnd() {
		console.log("播放结束", Cpt_iconPlayModel.value);
		Actions_Music.stopSong();
		const currentSongIndex = _.findIndex(State_Music.playlist, {
			id: State_Music.songId
		});
		if (currentSongIndex > -1) {
			Actions_Music.playMethods[Cpt_iconPlayModel.value](currentSongIndex);
		}
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
	async togglePlayModel() {
		State_Music.loopType =
			(State_Music.loopType + 1) % LOOP_TYPE_NAME_ARRAY.length;
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
	pushSongToPlaylist(newSong) {
		const id = newSong.id;
		if (!_.some(State_Music.playlist, { id })) {
			State_Music.playlist.push(newSong);
		}
	},
	stopSong() {
		State_Music.isPlaying = false;
		State_Music.audio.pause();
		State_Music.audio.currentTime = 0;
		State_Music.currentTime = 0;
		setDocumentTitle("Music");
	},
	async playSongById(id) {
		if (!id) {
			return;
		}
		if (State_Music.isPlaying && id === State_Music.songId) {
			return;
		}
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

		Actions_Music.stopSong();
		const record = _.find(State_Music.playlist, { id });
		if (record) {
			setDocumentTitle(record.name);
		}
		State_Music.audio.load();
		await canPlay();
		State_Music.audio.play();
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

export const Cpt_iconPlayModel = computed(() => {
	return LOOP_TYPE_NAME_ARRAY[State_Music.loopType];
});

watch(
	() => State_Music.ended,
	ended => {
		if (!ended) return;
		Actions_Music.handlePlayEnd();
	}
);

watch(State_Music, state => {});
