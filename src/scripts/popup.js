browser.tabs.query({
	currentWindow:true,
	active:true
}).then(tabs=>{
	const url=tabs[0].url;
	window.location.href="https://ytmp3.cc/?"+url;
})
