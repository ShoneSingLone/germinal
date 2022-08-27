import { A as API } from "./main.js";
import { l as lStorage, _ as _global__, b as setDocumentTitle } from "./nprogress.js";
const State_Music = Vue.reactive({
  songId: 0,
  personalizedNewSong: [],
  audio: new Audio(),
  loopType: 0,
  volume: (() => {
    const volume = lStorage["PLAYER-VOLUME"];
    if (volume) {
      return volume * 100;
    } else {
      return 20;
    }
  })(),
  playlist: [],
  showPlayList: false,
  id: 0,
  url: "",
  songUrl: {},
  song: {},
  isPlaying: false,
  isPause: false,
  sliderInput: false,
  ended: false,
  muted: false,
  currentTime: 0,
  duration: 0
});
let intervalTimer;
const LOOP_TYPE_NAME_ARRAY = ["playOrder", "playRandom", "playLoop", "playSingleLoop"];
const playMethods = {
  playLoop(currentSongIndex) {
    var _a, _b;
    const next = currentSongIndex + 1;
    if (next > State_Music.playlist.length - 1) {
      Actions_Music.playSongById((_a = State_Music.playlist[0]) == null ? void 0 : _a.id);
    } else {
      Actions_Music.playSongById((_b = State_Music.playlist[next]) == null ? void 0 : _b.id);
    }
  },
  playRandom(currentSongIndex) {
    var _a, _b;
    let next;
    if (State_Music.playlist.length === 1) {
      next = 0;
      Actions_Music.playSongById((_a = State_Music.playlist[0]) == null ? void 0 : _a.id);
      return;
    }
    const max = State_Music.playlist.length - 1;
    const min = 0;
    const getNext = () => Math.floor(Math.random() * (max - min + 1)) + min;
    next = getNext();
    while (next === currentSongIndex) {
      next = getNext();
    }
    Actions_Music.playSongById((_b = State_Music.playlist[next]) == null ? void 0 : _b.id);
  },
  playOrder(currentSongIndex) {
    var _a;
    const next = currentSongIndex + 1;
    if (next > State_Music.playlist.length - 1) {
      Actions_Music.stopSong();
    } else {
      Actions_Music.playSongById((_a = State_Music.playlist[next]) == null ? void 0 : _a.id);
    }
  },
  playSingleLoop(currentSongIndex) {
    var _a;
    Actions_Music.playSongById((_a = State_Music.playlist[currentSongIndex]) == null ? void 0 : _a.id);
  }
};
const cacheAudioVolume = _global__.debounce(function(audiovolume) {
  lStorage["PLAYER-VOLUME"] = audiovolume;
}, 1e3);
const Actions_Music = {
  playMethods,
  palyPrevSong() {
    var _a, _b;
    const currentSongIndex = _global__.findIndex(State_Music.playlist, {
      id: State_Music.songId
    });
    if (currentSongIndex > -1) {
      if (currentSongIndex === 0) {
        Actions_Music.playSongById((_a = State_Music.playlist[State_Music.playlist.length - 1]) == null ? void 0 : _a.id);
      } else {
        Actions_Music.playSongById((_b = State_Music.playlist[currentSongIndex - 1]) == null ? void 0 : _b.id);
      }
    }
  },
  playNextSong() {
    const currentSongIndex = _global__.findIndex(State_Music.playlist, {
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
    console.log("\u64AD\u653E\u7ED3\u675F", Cpt_iconPlayModel.value);
    Actions_Music.stopSong();
    const currentSongIndex = _global__.findIndex(State_Music.playlist, {
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
    State_Music.currentTime = parseInt(State_Music.audio.currentTime.toString());
    State_Music.duration = parseInt(State_Music.audio.duration.toString());
    State_Music.ended = State_Music.audio.ended;
  },
  setVolume(n) {
    n = n > 100 ? 100 : n;
    n = n < 0 ? 0 : n;
    State_Music.volume = n;
    const audioVolume = n / 100;
    State_Music.audio.volume = audioVolume;
    cacheAudioVolume(audioVolume);
  },
  async togglePlayModel() {
    State_Music.loopType = (State_Music.loopType + 1) % LOOP_TYPE_NAME_ARRAY.length;
  },
  toggleVolumeMute() {
    State_Music.muted = !State_Music.muted;
    State_Music.audio.muted = State_Music.muted;
  },
  togglePlayOrPause() {
    if (!State_Music.songId)
      return;
    State_Music.isPlaying = !State_Music.isPlaying;
    if (State_Music.isPlaying) {
      State_Music.audio.play();
    } else {
      State_Music.audio.pause();
    }
  },
  pushSongToPlaylist(newSong) {
    const id = newSong.id;
    if (!_global__.some(State_Music.playlist, {
      id
    })) {
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
    State_Music.audio.src = _global__.first(data).url;
    function canPlay() {
      return new Promise((resolve) => {
        State_Music.audio.oncanplay = function() {
          if (intervalTimer) {
            clearInterval(intervalTimer);
          }
          intervalTimer = setInterval(Actions_Music.intervalCurrentTime, 1e3);
          resolve(State_Music.duration);
        };
      });
    }
    Actions_Music.stopSong();
    const record = _global__.find(State_Music.playlist, {
      id
    });
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
      const {
        result
      } = await API.music.getPersonalizedNewSong();
      State_Music.personalizedNewSong = result;
    }
    return State_Music.personalizedNewSong;
  }
};
const Cpt_iconSound = Vue.computed(() => {
  return State_Music.muted ? "soundMute" : "sound";
});
const Cpt_iconPlayModel = Vue.computed(() => {
  return LOOP_TYPE_NAME_ARRAY[State_Music.loopType];
});
Vue.watch(() => State_Music.ended, (ended) => {
  if (!ended)
    return;
  Actions_Music.handlePlayEnd();
});
Vue.watch(State_Music, (state) => {
});
export { Actions_Music as A, Cpt_iconPlayModel as C, State_Music as S, Cpt_iconSound as a };
