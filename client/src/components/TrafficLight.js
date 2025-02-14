import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "../styles/TrafficLight.css"; 

const socket = io("http://localhost:5000");

const TrafficLight = () => {
    const [light, setLight] = useState("red");

    useEffect(() => {
        socket.on("lightChange", (newLight) => {
            setLight(newLight);
        });

        return () => {
            socket.off("lightChange");
        };
    }, []);

    return (
        <div className="traffic-light">
            <div className={`light red ${light === "red" ? "active" : ""}`}></div>
            <div className={`light green ${light === "green" ? "active" : ""}`}></div>
        </div>
    );
};

export default TrafficLight;
