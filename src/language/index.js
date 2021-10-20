//index.ts
import {
	createI18n
} from "vue-i18n"; //引入vue-i18n组件
//假设你还有其他目录下的语言文件 它的路径是 src/views/home/locales/en-US.ts
//那么你就可以 使用 :lower:（小写） :upper:（大写） 来引入文件
// const viewModules = import.meta.globEager(
// 	"../views/**/locales/[[:lower:]][[:lower:]]-[[:upper:]][[:upper:]].ts"
// );

/**
 * 获取所有语言文件
 * @param {Object} modules
 */
function getLangFiles() {
	//引入同级目录下文件
	const modules = import.meta.globEager("./*");
	/*  */
	return _.reduce(modules, (message, module, path) => {
		if (module.default) {
			//  获取文件名
			const pathName = path.substr(path.lastIndexOf("/") + 1, 5);
			if (message[pathName]) {
				message[pathName] = {
					...modules[pathName],
					...module.default,
				};
			} else {
				message[pathName] = module.default;
			}
		}
		return message;
	}, {});
}


const i18n = createI18n({
	legacy: false,
	locale: "zh-CN",
	messages: getLangFiles(),
});


export default i18n; //将i18n暴露出去，在main.js中引入挂载

export const $t = prop => {
	const label = i18n.global.t(prop);
	return {
		label,
		prop
	};
};
export const appI18n = {
	install: (app, AppState) => {
		//注册i8n实例并引入语言文件
		app.config.globalProperties.$t = $t;
	},
};