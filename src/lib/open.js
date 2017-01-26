exports.open = function(e){
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if(iOS){
		window.location.replace('https://itunes.apple.com/app/imprint-x/id1141358425');
	} else if(isAndroid){
		window.location.replace('https://play.google.com/store/apps/details?id=nu.morgondag.imprintx');
	} else {
		window.location.replace('http://store.steampowered.com/app/434310/');
	}
}
