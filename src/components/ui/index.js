import {Button, List, Checkbox, Popconfirm, Input,Alert} from "ant-design-vue";
import xRender from "./xRender/xRender.vue";
import _ from "lodash";
import xItem from "./xForm/xItem.vue";
const components = {
	/* my-ui */
	xRender,
	xItem,
	/* ant-d-v */
	Button,
	List,
	Checkbox,
	Popconfirm,
	Input,
	Alert,
};

export default {
	install: (app, options) => {
		console.log(options);
		_.each(components, (component, name) => app.component(name, component));
	},
};
