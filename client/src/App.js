import React, { useState, useEffect } from "react";
import "../styles/Vehicle.css"; // Ensure correct path

const Vehicle = ({ speed, trafficLightState }) => {
  const [position, setPosition] = useState(0); // Starting position

  useEffect(() => {
    let interval;
    
    if (trafficLightState === "green") {
      // Move the vehicle when light is green
      interval = setInterval(() => {
        setPosition((prevPosition) => prevPosition + speed);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [trafficLightState, speed]); // Re-run effect when light or speed changes

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
