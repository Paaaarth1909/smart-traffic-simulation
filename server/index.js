const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

let currentLight = "red"; // Initial light state

// Change traffic light every 5 seconds
setInterval(() => {
    currentLight = currentLight === "red" ? "green" : "red";
    io.emit("lightChange", currentLight); // Send update to all clients
}, 5000);

io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    socket.emit("lightChange", currentLight); // Send initial state

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
