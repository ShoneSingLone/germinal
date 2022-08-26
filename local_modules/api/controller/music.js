import { genAjax } from "lsrc/request/ajax";

const ajax = genAjax({
	baseURL: "https://www.singlone.work/s/wyapi",
	reqInterceptor: i => i,
	resInterceptor: i => {
		if (i.data.code === 200) {
			return i.data;
		}
	}
});
export const music = {
	async getPersonalizedNewSong() {
		return await ajax({
			method: "GET",
			url: "/personalized/newsong"
		});
	},
	async getSongUrlBuId(id) {
		return await ajax({
			method: "GET",
			url: "/song/url",
			params: { id }
		});
	},
	async getSongDetailBuId(id) {
		return await ajax({
			method: "GET",
			url: "/song/detail",
			params: { id }
		});
	}
};
