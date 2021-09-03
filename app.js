const express = require('express');
const path = require('path');
const { createServer } = require('http');

const WebSocket = require('ws');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function (ws) {
	ws.on('message', async (message) => {
		ws.send(message.toString());
	});
});

server.listen(8080, function () {
	console.log('Listening on http://0.0.0.0:8080');
});