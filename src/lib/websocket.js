'use strict'

const ws = new WebSocket('ws://morgondag.nu:8787/');

ws.onopen = function(){
	ws.send('requestData');
}

ws.onmessage = function(msg){
	try{
		handleData(JSON.parse(msg.data))
	} catch(e){
		console.log(e)
	}
}

const handleData = function(data){
	//switch(data.type){
		console.log(data);
	//}
}

export default ws;
