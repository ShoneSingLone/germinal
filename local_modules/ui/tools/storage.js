import { _ } from "../loadCommonUtil";

export const lStorage = new Proxy(localStorage, {
	set(_localStorage, prop, value) {
		if (_.isPlainObject(value)) {
			_localStorage[prop] = JSON.stringify(value);
		} else {
			_localStorage[prop] = value;
		}
		return true;
	},
	get(_localStorage, prop) {
		const objString = _localStorage[prop];
		try {
			return JSON.parse(objString);
		} catch (error) {
			return objString || false;
		}
	}
});
