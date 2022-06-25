<script lang="jsx">
import "./Footer.scss";
import { defineComponent } from "vue";
import { $ } from "@ventose/ui";

const version = Date.now();

const FootItem = ({ linkList, title, iconType }) => {
	return (
		<aCol span={6}>
			<h4 class="title">
				{iconType ? <aIcon type={iconType} class="icon" /> : ""}
				{title}
			</h4>
			{linkList.map((item, i) => {
				return (
					<p key={i}>
						<a href={item.itemLink} class="link">
							{item.itemTitle}
						</a>
					</p>
				);
			})}
		</aCol>
	);
};

export default defineComponent({
	data() {
		return {
			footList: [
				{
					title: "GitHub",
					iconType: "github",
					linkList: [
						{
							itemTitle: "YApi 源码仓库",
							itemLink: "https://github.com/YMFE/yapi"
						}
					]
				},
				{
					title: "团队",
					iconType: "team",
					linkList: [
						{
							itemTitle: "YMFE",
							itemLink: "https://ymfe.org"
						}
					]
				},
				{
					title: "反馈",
					iconType: "aliwangwang-o",
					linkList: [
						{
							itemTitle: "Github Issues",
							itemLink: "https://github.com/YMFE/yapi/issues"
						},
						{
							itemTitle: "Github Pull Requests",
							itemLink: "https://github.com/YMFE/yapi/pulls"
						}
					]
				},
				{
					title: `Copyright © 2018-${new Date().getFullYear()} YMFE`,
					linkList: [
						{
							itemTitle: `版本: ${version} `,
							itemLink: "https://github.com/YMFE/yapi/blob/master/CHANGELOG.md"
						},
						{
							itemTitle: "使用文档",
							itemLink: "https://hellosean1025.github.io/yapi/"
						}
					]
				}
			]
		};
	},
	mounted() {
		$("#app").addClass("flex vertical");
	},
	unmounted() {
		$("#app").removeClass("flex vertical");
	},
	render() {
		return (
			<div class="footer-wrapper">
				<aRow class="footer-container">
					{this.footList.map((item, i) => {
						return (
							<FootItem
								key={i}
								linkList={item.linkList}
								title={item.title}
								iconType={item.iconType}
							/>
						);
					})}
				</aRow>
			</div>
		);
	}
});
</script>

<style></style>
