import {createApp} from "vue";
import App from "./App.vue";
import MyUI from "./components/ui/index.js";

const app = createApp(App);



app.use(MyUI);
app.mount("#app");
