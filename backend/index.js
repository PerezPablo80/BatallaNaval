const app = require("express")();
const server = require("http").createServer(app);

const cors = require("cors"); // Import the cors middleware
require("dotenv").config();
const PORT = process.env.BACKEND_PORT || 4000;
const HOST = process.env.HOST || "localhost";
// Use cors middleware
app.use(cors());

const io = require("socket.io")(server, {
	cors: {
		origin: "*", // Allow all origins
		methods: ["GET", "POST"],
	},
});

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

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// let data = {}; // This can be your database or a variable for demonstration
// console.log(" HOST:" + HOST + ":PORT:" + PORT);
// // console.log(" ENV VARS:" + JSON.stringify(process.env));
// io.on("connection", (socket) => {
// 	console.log("New client connected");

// 	socket.on("updateValue", (newData) => {
// 		data = newData; // Update the data
// 		io.sockets.emit("valueUpdated", data); // Broadcast the update to all clients
// 	});

// 	socket.on("disconnect", () => {
// 		console.log("Client disconnected");
// 	});
// });

// server.listen(PORT, HOST, () => {
// 	console.log(`Listening on port ${HOST}:${PORT}`);
// });
