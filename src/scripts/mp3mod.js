(function(){
	document.getElementById("input").value=window.location.search.substr(1);
	setTimeout(()=>{
		if(document.getElementsByTagName("form")[0].style.display=="")
			document.getElementById("submit").click();
	},100);
	if(window.innerWidth<640){
		let a=document.createElement('div');
		a.style.height="100%";
		a.style.width="100%";
		a.style.top=0;
		a.style.left=0;
		a.style.zIndex=2147483647;
		a.style.position="fixed";
		a.style.backgroundColor="#f9f9fa";
		a.style.backgroundImage=`url('${browser.extension.getURL("icons/loading.png")}')`;
		a.style.backgroundRepeat="no-repeat";
		a.style.backgroundPosition="50%";
		document.body.appendChild(a);
		download();
	}
})();

function download(){
	setTimeout(()=>{
		let a=document.getElementById("download").getAttribute("href");
		if(a)document.getElementById("download").click();
		else download();
	},100);
}
