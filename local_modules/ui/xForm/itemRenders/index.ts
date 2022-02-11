import Input from "./Input.jsx";
import Checkbox from "./Checkbox";
const itemRenders = { Input, Checkbox };
export default itemRenders;

export type t_xItem = keyof typeof itemRenders;
export type t_itemConfigs = {
	itemType?: t_xItem;
	value: any;
	prop: string;
};
