import React, { useState, useEffect } from "react";
import "../styles/Vehicle.css"; // Ensure the correct import path

const Vehicle = ({ speed, trafficLightState }) => {
  const [position, setPosition] = useState(0); // Start at position 0

  useEffect(() => {
    let interval;

    if (trafficLightState === "green") {
      interval = setInterval(() => {
        setPosition((prevPosition) => prevPosition + speed);
      }, 100);
    } else {
      clearInterval(interval); // Stop moving on red/yellow
    }

    return () => clearInterval(interval);
  }, [trafficLightState, speed]);

  return (
    <div
      className="vehicle"
      style={{
        transform: `translateX(${position}px)`, // Move vehicle
      }}
    ></div>
  );
};

export default Vehicle;
