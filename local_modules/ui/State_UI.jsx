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

/* �������ⲿͨ�ţ��������� */
export const State_UI = reactive({
	language: lStorage["language"] || "zh-CN",
	LANGUAGE: {
		enUs,
		zhCn
	},
	i18nMessage: {},
	/*i18n  ʹ�� {������} ��ֵ */
	$t(prop, payload) {
		/* thisָ�� */
		const result = { label: prop, prop: prop };
		_.templateSettings.interpolate = /{([\s\S]+?)}/g;
		if (State_UI.i18nMessage) {
			const temp = State_UI.i18nMessage[prop];
			if (temp) {
				result.label = _.template(temp)(payload);
				if (!result.label) {
					result.label = prop;
					console.error(`i18n:${prop} "NOT_FOUND"`);
				}
			}
		}
		return result;
	}
});
watch(
	() => State_UI.language,
	language => {
		lStorage["language"] = language;
		dayjs.locale(language === "zh-CN" ? "zh-cn" : "en");
	},
	{
		immediate: true
	}
);

export const Cpt_UI_locale = computed(() => {
	const currentLanguage = _.camelCase(State_UI.language || "zh_CN");
	const locale = State_UI.LANGUAGE[currentLanguage];
	return locale;
});
