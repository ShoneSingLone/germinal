import { reactive, watch, computed } from "vue";
import { lStorage, setCSSVariables, UI, _, State_UI } from "@ventose/ui";

const { $t } = State_UI;

export const State_App = reactive({
	user: {
		loginWrapActiveKey: "",
		canRegister: true,
		isLDAP: true,
		isLogin: false,
		role: {}
	},
	project: {
		currPage: "",
		projectList: "",
		userInfo: "",
		tableLoading: ""
	},
	news: {
		newsData: "",
		curpage: ""
	},
	group: {
		groupList: [],
		currGroup: {
			group_name: "",
			group_desc: "",
			custom_field1: {
				name: "",
				enable: false
			}
		},
		field: {
			name: "",
			enable: false
		},
		member: [],
		role: ""
	}
});

export const Mutation_App = {
	async changeMenuItem() {},
	async loginActions() {},
	async loginLdapActions() {},
	async fetchGroupMemberList() {},
	async fetchGroupMsg() {},
	async addMember() {},
	async delMember() {},
	async changeMemberRole() {},
	async fetchNewsData() {},
	async fetchMoreNews() {},
	async fetchInterfaceList() {},
	async fetchGroupList() {},
	async setCurrGroup() {},
	async setGroupList() {},
	async fetchProjectList() {},
	async addProject() {},
	async delProject() {},
	async changeUpdateModal() {},
	async setBreadcrumb() {},
	delFollow() {},
	addFollow() {},
	getProject() {},
	checkProjectName() {},
	copyProjectMsg() {},
	changeStudyTip() {},
	finishStudy() {}
};
