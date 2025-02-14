import React from "react";
import "../../styles/Vehicle.css";  // Correct relative path inside src/

const Vehicle = ({ speed, trafficLightState }) => {
  return (
    <div
      className="vehicle"
      style={{
        animation: trafficLightState === "green" ? `moveVehicle ${10 / speed}s linear forwards` : "none",
      }}
    >
      🚗
    </div>
  );
};

export default Vehicle;
