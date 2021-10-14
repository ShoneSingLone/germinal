import {createApp} from "vue";
import App from "./App.vue";
import MyUI from "./components/ui/index.js";
import {router} from "./router/router.js";
import {appI18n} from "@l/language.js";

const app = createApp(App);

app.use(MyUI);
app.use(appI18n);
app.use(router);
app.mount("#app");
