import Input from "./Input.jsx";
import DatePicker from "./DatePicker";
import RangePicker from "./RangePicker";
import Checkbox from "./Checkbox";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import Switch from "./Switch";

const itemRenders = {
	Input,
	Checkbox,
	Select,
	Switch,
	DatePicker,
	RangePicker,
	RadioGroup,
	CheckboxGroup
};
export default itemRenders;

export type t_xItem = keyof typeof itemRenders;
export type t_itemConfigs = {
	/*该组件是否显示，默认显示 Function 作为 setup computed的参数传入，boolean作为返回值*/
	vIf?: boolean | Function;
	itemType?: t_xItem;
	value: any;
	prop: string;
};
