//index.ts
import { createI18n } from "vue-i18n"; //引入vue-i18n组件
import $ from "jquery";
import { _ } from "@ventose/ui";
//假设你还有其他目录下的语言文件 它的路径是 src/views/home/locales/en-US.ts
//那么你就可以 使用 :lower:（小写） :upper:（大写） 来引入文件
// const viewModules = import.meta.globEager(
// 	"../views/**/locales/[[:lower:]][[:lower:]]-[[:upper:]][[:upper:]].ts"
// );

/**
 * 获取所有语言文件
 * @param {Object} modules
 */
const defaultLang = localStorage.language || "zh-CN";

function getLangFiles() {
	//引入同级目录下文件
	const modules = import.meta.globEager("./*");
	/*  */
	return _.reduce(
		modules,
		(message, module, path) => {
			if (module.default) {
				//  获取文件名
				const pathName = path.substr(path.lastIndexOf("/") + 1, 5);
				if (message[pathName]) {
					message[pathName] = {
						...modules[pathName],
						...module.default
					};
				} else {
					message[pathName] = module.default;
				}
			}
			return message;
		},
		{}
	);
}

const i18n = createI18n({
	legacy: false,
	locale: defaultLang,
	fallbackLocale: defaultLang,
	messages: getLangFiles()
});

export default i18n; //将i18n暴露出去，在main.js中引入挂载

export const $t = (...args) => {
	let label = args[0];
	if (!label) {
		alert("未设置国际化标识");
	}
	label = i18n.global.t.apply(i18n.global.t, args);
	if (!label) {
		label = args[0];
		console.error(`i18n: ${JSON.stringify(args)}`);
	}
	return {
		label,
		prop: args[0]
	};
};
/**
 * 需要watch 提供当前语言的变化通知
 */
export const appI18n = {
	install: (app, { watch } = {}) => {
		//注册i8n实例并引入语言文件
		app.config.globalProperties.$t = $t;
		$("html").attr("lang", defaultLang);
		watch && watch();
	}
};

export function setI18nLanguage(lang) {
	if (i18n.global.locale.value !== lang) {
		i18n.global.locale.value = lang;
		$("html").attr("lang", lang);
	}
	return lang;
}
