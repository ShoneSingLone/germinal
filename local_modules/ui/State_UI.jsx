import { computed, reactive, watch } from "vue";
// import zhCn from "ant-design-vue/es/date-picker/locale/zh_CN";
// import enUs from "ant-design-vue/es/date-picker/locale/en_US";
import enUs from "ant-design-vue/es/locale/en_US";
import zhCn from "ant-design-vue/es/locale/zh_CN";
import _ from "lodash";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en-au";
import { lStorage } from "./tools/storage";

const LANGUAGE = { enUs, zhCn };

export const State_UI = reactive({ language: lStorage["language"] || "zh-CN" });
watch(
	() => State_UI.language,
	language => {
		lStorage["language"] = language;
		dayjs.locale(language === "zh-CN" ? "zh-cn" : "en");
	},
	{ immediate: true }
);

export const Cpt_UI_locale = computed(() => {
	const currentLanguage = _.camelCase(State_UI.language || "zh_CN");
	const locale = LANGUAGE[currentLanguage];
	return locale;
});
