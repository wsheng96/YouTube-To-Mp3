(function(){
	browser.contextMenus.removeAll();
	browser.contextMenus.create({
		title: browser.i18n.getMessage("openInNewTab"),
		contexts: ["page_action"],
		onclick: function(e,tab){
			browser.tabs.create({
				active: true,
				url:"https://ytmp3.cc/?"+tab.url
			});
		}
	});
})();

browser.runtime.getBrowserInfo().then(e=>{
	let version=+e.version.substr(0,2);
	if(version<59){
		browser.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
			if(!changeInfo.url)return;
			let vidURL = changeInfo.url;
			if(!vidURL.includes("youtube.com/watch?")){
				browser.pageAction.hide(tabId);
				return;
			}
			browser.pageAction.show(tabId);
			browser.pageAction.setPopup({
				tabId,
				popup: "https://ytmp3.cc/?"+changeInfo.url
			});
		});
	}
	if(version>=57){
		browser.contextMenus.create({
			id:			"downloadMP3",
			title:		browser.i18n.getMessage("extensionAction"),
			contexts:	["page","tab"],
			documentUrlPatterns: ["*://*.youtube.com/watch?*"]
		});
	}
});

browser.contextMenus.onClicked.addListener(e=>{
	if(e.menuItemId==="downloadMP3")browser.pageAction.openPopup();
});
