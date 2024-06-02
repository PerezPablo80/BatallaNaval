import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const SERVER_IP = import.meta.env.BACKEND_HOST || "http://192.168.1.6"; // Replace with your server's IP address
const PORT = import.meta.env.BACKEND_PORT || "4001";
var socket;
try {
	let conn = `${SERVER_IP}:${PORT}`;
	console.log("CONN:", conn);
	socket = io(conn);
} catch (e) {
	console.log("Error on socket:", e);
}

function App() {
	const [value, setValue] = useState("");

	useEffect(() => {
		socket.on("valueUpdated", (newValue) => {
			console.log("Updated value:", newValue);
			setValue(newValue);
		});

		return () => {
			socket.off("valueUpdated");
		};
	}, []);

	const handleChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
		socket.emit("updateValue", newValue);
	};

	return (
		<div>
			<input type="text" value={value} onChange={handleChange} />
			<p>Current Value: {value}</p>
		</div>
	);
}

export default App;
