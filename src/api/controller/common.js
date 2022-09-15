import ajax from "@ventose/request/ajax";
import axios from "axios";

export const common = {
	async loadAllMusicClient(params) {
		let res = [];
		try {
			const { status, data } = await axios.get(
				`https://www.singlone.work/s/api/public/assets/AllMusicClient.json?_t=${Date.now()}`
			);
			if (status === 200) {
				res = data;
			}
		} catch (error) {
			console.log("🚀 loadAllMusicClient:error", error);
		} finally {
			return res;
		}
	}
};
