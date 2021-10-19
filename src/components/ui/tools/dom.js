import $ from "jquery";

let $title = false;

export const setDocumentTitle = (title) => {
	/* document.title = title; */
	/* 没啥特别意思，就是想用一下jQuery */
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