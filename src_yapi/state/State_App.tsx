import { reactive, watch, computed } from "vue";
import { lStorage, setCSSVariables, UI, _, State_UI } from "@ventose/ui";
import { API } from "ysrc/api";

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
		newsData: {
			list: [],
			total: 0
		},
		curpage: 1
	},
	groupList: [],
	currGroup: {
		group_name: "",
		group_desc: "",
		custom_field1: {
			name: "",
			enable: false
		}
	},
	group: {
		field: {
			name: "",
			enable: false
		},
		member: [],
		role: ""
	}
});

window.State_App = State_App;

const LOADING_STATUS = 0;
const GUEST_STATUS = 1;
const MEMBER_STATUS = 2;

export const Actions_App = {
	setUser(user) {
		State_App.user = _.merge({}, State_App.user, user);
	},
	setNews(news) {
		State_App.news = _.merge({}, State_App.news, news);
	}
};
export const Mutations_App = {
	async checkLoginState() {
		const { data, response } = await API.user.getUserStatus();
		Actions_App.setUser({
			isLogin: response.data.errcode == 0,
			isLDAP: response.data.ladp,
			canRegister: response.data.canRegister,
			role: data ? data.role : null,
			loginState: response.data.errcode == 0 ? MEMBER_STATUS : GUEST_STATUS,
			userName: data ? data.username : null,
			uid: data ? data._id : null,
			type: data ? data.type : null,
			study: data ? data.study : false
		});
	},
	/**
	 * 如果是group对象，直接赋值，
	 * 如果是Id则需要query
	 * @param groupIdOrObject
	 * @returns {Promise<void>}
	 */
	async setCurrGroup(groupIdOrObject) {
		if (!_.isPlainObject(groupIdOrObject)) {
			const { data } = await API.group.getMyGroupBy(groupIdOrObject);
			groupIdOrObject = data;
		}
		State_App.currGroup = _.merge({}, State_App.currGroup, groupIdOrObject);
	},
	async fetchGroupList() {
		const { data: groupList } = await API.group.getMyGroupList();
		State_App.groupList = groupList;
	},
	async fetchGroupMsg(groupId) {
		const { data } = await API.group.getGroupAuth(groupId);
		await Mutations_App.setCurrGroup(data);
		Actions_App.setUser({
			role: data.role,
			field: {
				name: data.custom_field1.name,
				enable: data.custom_field1.enable
			}
		});
	},
	async fetchNewsData(typeid, type, page, limit, selectValue) {
		const { data } = await API.news.getLogList({
			typeid,
			type,
			page,
			limit,
			selectValue
		});
		Actions_App.setNews({
			curpage: 1,
			newsData: {
				total: data.total,
				list: _.sortBy(data.list, function (a, b) {
					return b.add_time - a.add_time;
				})
			}
		});
	},
	async fetchProjectList() {},
	async changeMenuItem() {},
	async loginActions() {},
	async loginLdapActions() {},
	async fetchGroupMemberList() {},

	async addMember() {},
	async delMember() {},
	async changeMemberRole() {},

	async fetchMoreNews() {},
	async fetchInterfaceList() {},

	async setGroupList() {},
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
