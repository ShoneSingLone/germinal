import Input from "./Input.jsx";
import DatePicker from "./DatePicker";
import RangePicker from "./RangePicker";
import Checkbox from "./Checkbox";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";

const itemRenders = {
	Input,
	Checkbox,
	Select,
	DatePicker,
	RangePicker,
	RadioGroup,
	CheckboxGroup
};
export default itemRenders;

export type t_xItem = keyof typeof itemRenders;
export type t_itemConfigs = {
	itemType?: t_xItem;
	value: any;
	prop: string;
};
