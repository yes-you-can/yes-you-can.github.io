function load_article(clicked_id) {
	function reqListener() {
		var elem = document.getElementById(clicked_id)
		var article_container_elem = document.getElementById("article_container");
		article_container.innerHTML = this.responseText;
	}

	var req = new XMLHttpRequest();
	req.addEventListener("load", reqListener);
	req.open("GET", "articles/" + clicked_id);
	req.send();
}
