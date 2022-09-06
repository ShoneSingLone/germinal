const contentToCache = [
  "./yapi.html",
  "./statics/js/yapi.js",
  "./statics/js/nprogress.js",
  "./statics/js/main.js",
  "./statics/js/index4.js",
  "./statics/js/index3.js",
  "./statics/js/index2.js",
  "./statics/js/index.js",
  "./statics/js/form.js",
  "./statics/js/auth.js",
  "./statics/js/ViewWorkplace.js",
  "./statics/js/ViewTestFormItem.js",
  "./statics/js/ViewTestDataGrid.js",
  "./statics/js/ViewIndex.js",
  "./statics/js/ViewF.js",
  "./statics/js/ViewD.js",
  "./statics/js/UserOutlined.js",
  "./statics/js/State_Music.js",
  "./statics/js/PrivatePc.js",
  "./statics/js/PrivateMobile.js",
  "./statics/js/PrivateLayout.js",
  "./statics/js/PlayListSinger.js",
  "./statics/js/PlayListFindNew.js",
  "./statics/js/PlayListCached.js",
  "./statics/js/PlayList.js",
  "./statics/js/NotFound.js",
  "./statics/js/MusicPlayer.js",
  "./statics/js/LoginContainer.js",
  "./statics/js/LayoutMusicPc.js",
  "./statics/js/LayoutMusicMobile.js",
  "./statics/js/LayoutMusic.js",
  "./statics/js/LayoutBasic.js",
  "./statics/js/GroupList.js",
  "./statics/js/Group.js",
  "./statics/js/FormRules.js",
  "./statics/js/Dev.js",
  "./statics/js/AllMusicClient.js",
  "./statics/assets/yapi.633ceb78.css",
  "./statics/assets/nprogress.a83d0ede.css",
  "./statics/assets/main.b28e70ef.css",
  "./statics/assets/logo3.a354024b.png",
  "./statics/assets/logo2.f9552052.jpg",
  "./statics/assets/loading-0.07236f68.gif",
  "./statics/assets/icon.99942159.png",
  "./statics/assets/icon-ext.e2e7a838.png",
  "./statics/assets/bg5.c95becde.jpg",
  "./statics/assets/bg4.cf9cf869.jpg",
  "./statics/assets/bg3.000306d9.jpg",
  "./statics/assets/bg2.26a7254b.jpg",
  "./statics/assets/bg1.1081a1ca.jpg",
  "./statics/assets/background.d7103c44.svg",
  "./statics/assets/PrivateMobile.6771dfb3.css",
  "./statics/assets/PlayListCached.bd55b191.css",
  "./statics/assets/MusicPlayer.cf1819bc.css",
  "./statics/assets/LoginContainer.3ebe9e70.css",
  "./statics/assets/LayoutMusicPc.8bcd892b.css",
  "./statics/assets/LayoutMusicMobile.c97511e3.css",
  "./statics/assets/LayoutBasic.8c490128.css",
  "./statics/assets/GroupList.ebf21596.css",
  "./statics/assets/Group.a18abc63.css",
  "./index.html",
  "./favicon.ico",
  "./configs.jsx",
  "./boundless/static/vue-components/SvgIcon.vue",
  "./boundless/static/style/styles.css",
  "./boundless/static/libs/vue/router/4.0.12/vue-router.global.min.js",
  "./boundless/static/libs/vue/app.common.vue.js",
  "./boundless/static/libs/vue/app.common.js",
  "./boundless/static/libs/vue/3.2.31/vue.global.js",
  "./boundless/static/libs/lodash.js",
  "./boundless/static/libs/jquery.js",
  "./boundless/static/libs/gsap.min.js",
  "./boundless/static/libs/dayjs.js",
  "./boundless/static/libs/axios/0.26.0/axios.min.js",
  "./boundless/static/libs/VentoseUI.js",
  "./boundless/static/libs/VentoseUI.css",
  "./boundless/static/libs/ScrollTrigger.min.js",
  "./boundless/static/i18n/zh-CN.json",
  "./boundless/static/i18n/en-US.json",
  "./boundless/main.js",
  "./boundless/index.html",
  "./boundless/business/App/yapi/yapi.css",
  "./boundless/business/App/yapi/Views/Login/Login.vue",
  "./boundless/business/App/yapi/Views/Application.vue",
  "./boundless/business/App/yapi/App-yapi.vue",
  "./boundless/business/App/demo/demo.vue",
  "./boundless/business/App/demo/demo.css",
  "./boundless/business/App/demo/App-demo.vue",
  "./boundless/boundless.js",
  "./boundless/assets/images/svg/tips.svg",
  "./boundless/assets/images/bg.jpeg",
  "./boundless/assets/favicon.ico",
  "./assets/svg/user.svg",
  "./assets/svg/unlock.svg",
  "./assets/svg/unfollow.svg",
  "./assets/svg/team.svg",
  "./assets/svg/stopsong.svg",
  "./assets/svg/star.svg",
  "./assets/svg/soundMute.svg",
  "./assets/svg/sound.svg",
  "./assets/svg/solution.svg",
  "./assets/svg/search.svg",
  "./assets/svg/question.svg",
  "./assets/svg/privateNet.svg",
  "./assets/svg/prevsong.svg",
  "./assets/svg/playsong.svg",
  "./assets/svg/playlist.svg",
  "./assets/svg/playSingleLoop.svg",
  "./assets/svg/playRandom.svg",
  "./assets/svg/playOrder.svg",
  "./assets/svg/playLoop.svg",
  "./assets/svg/pausesong.svg",
  "./assets/svg/nextsong.svg",
  "./assets/svg/music.svg",
  "./assets/svg/mobile.svg",
  "./assets/svg/mail.svg",
  "./assets/svg/logout.svg",
  "./assets/svg/lockStrok.svg",
  "./assets/svg/github.svg",
  "./assets/svg/follow.svg",
  "./assets/svg/folderOpen.svg",
  "./assets/svg/feedback.svg",
  "./assets/svg/copy.svg",
  "./assets/svg/copy-o.svg",
  "./assets/svg/cached.svg",
  "./assets/svg/addGroup.svg",
  "./assets/svg/add.svg"
] || [];

// Installing Service Worker
self.addEventListener("install", e => {
	console.log("[Service Worker] Install");
	e.waitUntil(
		(async () => {
			const cache = await caches.open("1662483275588");
			console.log("[Service Worker] Caching all: app shell and content");
			await cache.addAll(contentToCache);
		})()
	);
});

// Fetching content using Service Worker
self.addEventListener("fetch", e => {
	e.respondWith(
		(async () => {
			const r = await caches.match(e.request);

			if (r) {
				console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
				return r;
			}
			const response = await fetch(e.request);
			const cache = await caches.open("1662483275588");
			console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
			// cache.put(e.request, response.clone());
			return response;
		})()
	);
});
