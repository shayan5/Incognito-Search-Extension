function OnClick(info, tab) {
	var searchParams = info.selectionText;
	var query = "https:/google.com/search?q=" + searchParams;
	var url = query.replace(/ /g, "+");
	alert(url);
	chrome.windows.create({"url": url, "incognito": true});
}

var title = "Search in Incognito";
var id = chrome.contextMenus.create({"title": title, "contexts":["selection"],
                                       "onclick": OnClick});
