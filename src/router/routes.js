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

export const menuTree = [
	{
		id: genId("menu"),
		label: genId("label"),
		children: [
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
