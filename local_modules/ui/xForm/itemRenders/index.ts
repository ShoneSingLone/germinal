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
	/*������Ƿ���ʾ��Ĭ����ʾ Function ��Ϊ setup computed�Ĳ������룬boolean��Ϊ����ֵ*/
	vIf?: boolean | Function;
	itemType?: t_xItem;
	value: any;
	prop: string;
};
