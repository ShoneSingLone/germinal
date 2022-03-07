import { defineComponent } from "vue";
import $ from "jquery";
import { io } from "socket.io-client";
import { lStorage } from "@ventose/ui";
import { STATIC_WORD } from "lsrc/utils/common.words";

export default defineComponent({
	data() {
		return {};
	},
	async mounted() {
		const socket_url = `${window.URL_WS_BASE}?token=${
			lStorage[STATIC_WORD.ACCESS_TOKEN]
		}`;

		// Create WebSocket connection.
		const socket = new WebSocket(socket_url);

		// Connection opened
		// socket.addEventListener("open", function (event) {
		// 	socket.send("Hello Server!");
		// });

		// Listen for messages
		socket.addEventListener("message", function (event) {
			console.log("Message from server ", event.data);
		});
	},
	render(h) {
		return <h1 id={this.id}>test</h1>;
	}
});
