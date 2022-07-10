import { reactive, watch, computed } from "vue";
import { lStorage, setCSSVariables, UI, _, State_UI } from "@ventose/ui";
import { API } from "ysrc/api";
import { router } from "ysrc/router/router";

const { $t } = State_UI;

const LOADING_STATUS = 0;
const GUEST_STATUS = 1;
const MEMBER_STATUS = 2;

export const State_App = reactive({
	user: {
		isLogin: false,
		canRegister: true,
		isLDAP: false,
		userName: null,
		uid: null,
		email: "",
		loginState: LOADING_STATUS,
		loginWrapActiveKey: "1",
		role: "",
		type: "",
		breadcrumb: [],
		studyTip: 0,
		study: false,
		imageUrl: ""
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

export const Methods_App = {
	setMenu(menu) {
		State_App.menu = _.merge({}, State_App.menu, menu);
	},
	setUser(user) {
		State_App.user = _.merge({}, State_App.user, user);
	},
	setNews(news) {
		State_App.news = _.merge({}, State_App.news, news);
	},
	setBreadcrumb(breadcrumb) {
		Methods_App.setUser({ breadcrumb });
	},
	async checkLoginState() {
		if (State_App.user.isLogin) {
			return true;
		}
		try {
			const { data, response } = await API.user.getUserStatus();
			Methods_App.setUser({
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
		} catch (error) {
			console.error(error);
		} finally {
			return State_App.user.isLogin;
		}
	},
	async fetchGroupList() {
		const { data: groupList } = await API.group.getMyGroupList();
		State_App.groupList = groupList;
	},
	/**
	 * 如果group是对象，直接赋值，
	 * 如果是Id(可能不是数字),则需要request
	 * @param group
	 * @returns {Promise<void>}
	 */
	async setCurrGroup(group) {
		let groupId;
		if (!_.isPlainObject(group)) {
			groupId = parseInt(group);
			if (!_.isNumber(groupId)) {
				throw new Error("miss groupId");
			}
			const { data } = await API.group.getMyGroupBy(groupId);
			group = data;
		}
		State_App.currGroup = _.merge({}, State_App.currGroup, group);
		Methods_App.setUser({
			role: group.role,
			field: {
				name: group.custom_field1.name,
				enable: group.custom_field1.enable
			}
		});
	},
	async fetchNewsData(typeid, type, page, limit, selectValue) {
		try {
			const { data } = await API.news.getLogList({
				typeid,
				type,
				page,
				limit,
				selectValue
			});
			Methods_App.setNews({
				curpage: 1,
				newsData: {
					total: data.total,
					list: _.sortBy(data.list, (a, b) => {
						if (a && b) {
							return b.add_time - a.add_time;
						}
						return false;
					})
				}
			});
		} catch (error) {
			console.error(error);
		}
	},
	async changeStudyTip() {
		State_App.user.studyTip++;
	},
	async finishStudy() {
		Methods_App.setUser({
			study: true,
			studyTip: 0
		});
	},
	async logoutActions() {
		try {
			const { data } = await API.user.logoutActions();
			Methods_App.setUser({
				isLogin: false,
				loginState: GUEST_STATUS,
				userName: null,
				uid: null,
				role: "",
				type: ""
			});
			if (data === "ok") {
				router.push({ path: "/login" });
				UI.notification.success("退出成功! ");
			}
		} catch (error) {
			console.error(error);
		}
	},
	async fetchInterfaceListMenu() {},
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
	delFollow() {},
	addFollow() {},
	getProject() {},
	checkProjectName() {},
	copyProjectMsg() {},
	loginTypeAction() {}
};
