import { defineComponent } from "vue";
import { lStorage, _ } from "lsrc/ui";
import { STATIC_WORD } from "lsrc/utils/common.words";

export default defineComponent({
	data() {
		return {};
	},
	async mounted() {
		const socket_url = `${__URL_WS_BASE}?token=${
			lStorage[STATIC_WORD.ACCESS_TOKEN]
		}`;
		const socket = new WebSocket(socket_url);
		socket.addEventListener("message", function (event) {
			console.log("Message from server ", _.safeParse(event.data));
		});
	},
	render(h) {
		return <h1 id={this.id}>test</h1>;
	}
});
