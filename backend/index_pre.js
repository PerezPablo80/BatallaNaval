const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.BACKEND_PORT || 4000;
const HOST = process.env.HOST || "localhost";

let data = {}; // This can be your database or a variable for demonstration
console.log(" HOST:" + HOST + ":PORT:" + PORT);
// console.log(" ENV VARS:" + JSON.stringify(process.env));
io.on("connection", (socket) => {
	console.log("New client connected");

	socket.on("updateValue", (newData) => {
		data = newData; // Update the data
		io.sockets.emit("valueUpdated", data); // Broadcast the update to all clients
	});

	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});
});

server.listen(PORT, HOST, () => {
	console.log(`Listening on port ${HOST}:${PORT}`);
});
