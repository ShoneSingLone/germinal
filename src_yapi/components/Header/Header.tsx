import "./Header.scss";

import Srch from "./Search/Search";
import { LogoSVG } from "ysrc/components/LogoSVG/index";
import { BreadcrumbNavigation } from "../Breadcrumb/Breadcrumb";
import GuideBtns from "../GuideBtns/GuideBtns";
import { defineComponent, VNode } from "vue";
import { Methods_App, State_App } from "ysrc/state/State_App";
import { UI, _ } from "lsrc/ui";

const tipFollow = (
	<div class="title-container">
		<h3 class="title">
			<xIcon icon="star" />
			关注
		</h3>
		<p>这里是你的专属收藏夹，便于你找到自己的项目</p>
	</div>
);
const tipAdd = (
	<div class="title-container">
		<h3 class="title">
			<xIcon icon="plus-circle" />
			新建项目
		</h3>
		<p>在任何页面都可以快速新建项目</p>
	</div>
);
const tipDoc = (
	<div class="title-container">
		<h3 class="title">
			使用文档 <aTag color="orange">推荐!</aTag>
		</h3>
		<p>
			初次使用 YApi，强烈建议你阅读{" "}
			<a
				target="_blank"
				href="https://hellosean1025.github.io/yapi/"
				rel="noopener noreferrer">
				使用文档
			</a>
			，我们为你提供了通俗易懂的快速入门教程，更有详细的使用说明，欢迎阅读！{" "}
		</p>
	</div>
);
export default defineComponent({
	props: [
		"router",
		"user",
		"msg",
		"uid",
		"role",
		"login",
		"relieveLink",
		"logoutActions",
		"loginTypeAction",
		"changeMenuItem",
		"history",
		"location",
		"study",
		"studyTip",
		"imageUrl"
	],
	setup() {
		return { State_App };
	},
	methods: {
		setBreadcrumb() {
			Methods_App.setBreadcrumb([]);
		},
		linkTo(e) {
			if (e.key != "/doc") {
				this.props.changeMenuItem(e.key);
				if (!this.props.login) {
					UI.notification.info("请先登录");
				}
			}
		},
		relieveLink() {
			this.props.changeMenuItem("");
		},
		handleLogin(e) {
			e.preventDefault();
			this.props.loginTypeAction("1");
		},
		handleReg(e) {
			e.preventDefault();
			this.props.loginTypeAction("2");
		}
	},
	computed: {
		ToolUser() {
			let {
				imageUrl,
				uid,
				groupList,
				study,
				studyTip,
				user,
				msg,
				role,
				logout,
				isLogin
			} = this.State_App.user;

			if (!isLogin) {
				return null;
			}
			imageUrl = imageUrl ? imageUrl : `/api/user/avatar?uid=${uid}`;

			const items = [
				{ content: "我的关注", path: "/follow", icon: "star" },
				{ content: "新建项目", path: "/follow", icon: "add" },
				{
					content: "使用文档",
					href: "https://hellosean1025.github.io/yapi",
					icon: "question"
				}
			].map(i => {
				let link: VNode | null = null;
				const iconStyle = { fontSize: 16, color: "white" };
				if (i.path) {
					link = (
						<RouterLink to={i.path}>
							<xIcon icon={i.icon} style={iconStyle} />
						</RouterLink>
					);
				}

				if (i.href) {
					link = (
						<a target="_blank" href={i.href} rel="noopener noreferrer">
							<xIcon icon={i.icon} style={iconStyle} />
						</a>
					);
				}
				return (
					<div class="toolbar-li" v-uiPopover={{ content: i.content }}>
						{link}
					</div>
				);
			});
			const avatarUrl = imageUrl ? imageUrl : `/api/user/avatar?uid=${uid}`;
			return (
				<div class="user-toolbar flex">
					<div class="toolbar-li item-search">
						<Srch groupList={groupList} />
					</div>
					{items}
					<div class="toolbar-li">
						<aDropdown
							trigger={["click"]}
							v-slots={{
								default: () => (
									<a class="dropdown-link">
										<aAvatar src={avatarUrl} />
									</a>
								),
								overlay: () => this.MenuUser
							}}
						/>
					</div>
				</div>
			);
		},
		MenuUser() {
			const { uid, role } = this.State_App.user;
			return (
				<aMenu
					class="user-menu"
					onClick={({ key }) => {
						if (key === "logout") {
							Methods_App.logoutActions();
						}
					}}>
					{_.map(
						{
							user: {
								path: `/user/profile/${uid}`,
								name: "个人中心",
								icon: "user",
								adminFlag: false
							},
							solution: {
								path: "/user/list",
								name: "用户管理",
								icon: "solution",
								adminFlag: true
							},
							logout: {
								name: "退出",
								icon: "logout"
							}
						},
						(item, key) => {
							const isAdmin = role === "admin";
							if (item.adminFlag && !isAdmin) {
								return null;
							}

							const menuContent = (
								<>
									<xIcon icon={item.icon} />
									<span class="ml4">{item.name}</span>
								</>
							);

							let menuLink = (
								<RouterLink to={item.path || ""} class="flex horizon">
									{menuContent}
								</RouterLink>
							);
							if (key === "logout") {
								let menuLink = <div class="flex horizon">{menuContent}</div>;
							}

							return <aMenuItem key={key}>{menuLink}</aMenuItem>;
						}
					)}
				</aMenu>
			);
		}
	},
	render() {
		return (
			<aLayoutHeader class="header-box m-header elevation-4">
				<div class="content g-row flex middle">
					<span onClick={this.setBreadcrumb}>
						<RouterLink to="/" class="flex">
							<LogoSVG length="32px" />
						</RouterLink>
					</span>
					<BreadcrumbNavigation />
					<span class="flex1"></span>
					{this.ToolUser}
				</div>
			</aLayoutHeader>
		);
	}
});
