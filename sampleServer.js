var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 5555 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send("1 1 4null");
});
