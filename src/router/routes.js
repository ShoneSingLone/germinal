import NotFound from "lsrc/views/system/NotFound.vue";
import { _ } from "@ventose/ui";
const { genId } = _;

export const routeNames = {
	shell: "shell",
	404: "404"
};
export const toPath = name => `/${name}`;

export const NewRoute = (name, component, options = {}) =>
	_.merge({ name, path: `/${name}`, component }, options);

export const routes = [NewRoute(routeNames[404], NotFound)];

function Menu(id, label, icon = "mail", children = []) {
	return {
		id,
		label,
		icon,
		children: children
	};
}

export const menuTree = [
	Menu(genId("menu"), genId("label"), "user", [
		Menu(genId("menu"), genId("label")),
		Menu(genId("menu"), genId("label")),
		Menu(genId("menu"), genId("label")),
		Menu(genId("menu"), genId("label")),
		Menu(genId("menu"), genId("label"))
	]),
	{
		id: genId("menu"),
		icon: "mail",
		label: genId("label"),
		children: [
			{
				id: genId("menu"),
				icon: "mail",
				label: genId("label"),
				children: [
					{ id: genId("menu"), icon: "mail", label: genId("label") },
					{ id: genId("menu"), icon: "mail", label: genId("label") },
					{ id: genId("menu"), icon: "mail", label: genId("label") },
					{ id: genId("menu"), icon: "mail", label: genId("label") },
					{ id: genId("menu"), icon: "mail", label: genId("label") },
					{ id: genId("menu"), icon: "mail", label: genId("label") }
				]
			},
			{ id: genId("menu"), icon: "mail", label: genId("label") },
			{ id: genId("menu"), icon: "mail", label: genId("label") },
			{ id: genId("menu"), icon: "mail", label: genId("label") },
			{ id: genId("menu"), icon: "mail", label: genId("label") },
			{ id: genId("menu"), icon: "mail", label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	},
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") },
			{ id: genId("menu"), label: genId("label") }
		]
	}
];
