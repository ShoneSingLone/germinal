import { reactive, watch, computed } from "vue";
import { lStorage, setCSSVariables, UI, _, State_UI } from "@ventose/ui";
import { STATIC_WORD } from "ysrc/utils/common.words";
import { API, SuccessOrFail } from "germinal_api";
import md5 from "md5";
import $ from "jquery";

const { $t } = State_UI;
export const State_App = reactive({
	user: {
		loginWrapActiveKey: "",
		canRegister: true,
		isLDAP: true,
		isLogin: false
	}
});

export const Mutation_App = {
	async changeMenuItem() {},
	async loginActions() {},
	async loginLdapActions() {}
};
