'use strict'
let socket
let connected = false
let once = false
let listeners = {}
const url = 'ws://morgondag.nu:8787/'
const init = (callback)=>{
	if (connected) {
		if (typeof callback === 'function') {
			callback()
		}
	} else {
		if(!once){
			socket = new WebSocket(url)
			socket.onopen = function(){
				connected = true
				socket.send('requestData')
			}
			socket.onmessage = function(msg) {
				try {
					emitData(JSON.parse(msg.data))
				} catch (e) {
					console.log(e)
				}
			}
			once = true
		}
		if(typeof callback == 'function'){
			callback()
		}
	}
}

const emitData = (data)=>{
	for(var k in listeners){
		if(k == data.type){
			listeners[k](data.data)
		}
	}
}

const addListener =(msg,callback)=>{
	listeners[msg] = callback
}
const removeListener =(msg)=>{
	delete listeners[msg]
}

exports.disconnect = (message) =>{
	removeListener(message)
}
exports.on = (message,callback)=>{
	if(!connected){
		init(()=>{
			addListener(message,callback)
		})
	} else {
		addListener(message,callback)
	}
}
