var WebSocket = require('ws');
var client = new WebSocket("ws://localhost:5555");
client.onopen = function(event) {
	client.send("hello");
};

client.onmessage = function(data) {
	var receive = data.data.toString();
	console.log(data.data);
	if(!receive.charAt(0)) {
		console.log("notFound()");
	} else if(receive.charAt(2)) {
		var length = receive.charAt(4);
		password = receive.substring(5, 5 + length);
		console.log(password);
	}
};
