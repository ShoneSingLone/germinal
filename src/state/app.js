import {reactive} from "vue";

export const AppState = reactive({count: 0});

setInterval(() => AppState.count++, 1000);

export const addCount = () => AppState.count++;
