import {Button, List, Checkbox, Popconfirm, Input} from "ant-design-vue";
import XRender from "./XRender/XRender.vue";
import _ from "lodash";

const components = {
	/* my-ui */
	XRender,
	/* ant-d-v */
	Button,
	List,
	Checkbox,
	Popconfirm,
	Input,
};

export default {
	install: (app, options) => {
		console.log(options);
		_.each(components, (component, name) => app.component(name, component));
	},
};
