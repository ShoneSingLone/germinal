import "./Breadcrumb.scss";

import { defineComponent } from "vue";
import { State_App } from "ysrc/state/State_App";
import { _ } from "@ventose/ui";

export const BreadcrumbNavigation = defineComponent({
	setup() {
		return {
			State_App
		};
	},
	render() {
		const getItem = _.map(this.State_App.user.breadcrumb, (item, index) => {
			if (item.href) {
				return (
					<aBreadcrumbItem key={index}>
						<RouterLink to={item.href}>{item.name}</RouterLink>
					</aBreadcrumbItem>
				);
			} else {
				return <aBreadcrumbItem key={index}>{item.name}</aBreadcrumbItem>;
			}
		});
		return (
			<div class="breadcrumb-container">
				<aBreadcrumb>{getItem}</aBreadcrumb>
			</div>
		);
	}
});
