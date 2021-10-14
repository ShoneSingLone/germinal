import $ from "jquery";

let $title = false;

export const setHtmlTitle = (title) => {
	if (!$title) {
		let $head = $("html head");
		if (!$head) {
			$head = $("<head/>");
			$head.prependTo($("html"));
		}
		$title = $head.find("title");
		if (!$title) {
			$title = $("<title/>");
			$title.prependTo($head);
		}
	}
	$title.text(title);
};
