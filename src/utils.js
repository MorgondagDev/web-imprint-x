import moment from '../node_modules/moment/min/moment.min.js'

exports.fromnow = function(timestamp){
	return moment(new Date(timestamp)).fromNow()
}

exports.linkify = function(text){
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    text = text.replace(exp, "<a href='$1' target='_blank'>$1</a>");
    exp = /(^|\s)#(\w+)/g;
    text = text.replace(exp, "$1<a href='https://twitter.com/search?f=tweets&vertical=default&q=$2&src=typd' target='_blank'>#$2</a>");
    exp = /(^|\s)@(\w+)/g;
    text = text.replace(exp, "$1<a href='http://www.twitter.com/$2' target='_blank'>@$2</a>");
    return text;
}

var cache = {}
exports.ajax = function(type, url, data,cb,json){
	if (cache.hasOwnProperty(url)) {
		cb(false, cache[url]);
		return;
	}
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(res) {

		if (xmlhttp.readyState == 4) {
			cache[url] = xmlhttp.response;
			cb(xmlhttp.response)
		}
	}
	xmlhttp.open(type, url);
	if (json) {
		xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	}
	if (data) {
		xmlhttp.send(data);
	} else {
		xmlhttp.send();
	}
}
