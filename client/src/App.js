import React, { useState, useEffect } from "react";
import TrafficLight from "./components/TrafficLight";
import Vehicle from "./components/Vehicle"; // Ensure correct path
import "../../styles/App.css"; // Ensure styles are imported

const App = () => {
  const [trafficLightState, setTrafficLightState] = useState("red"); // Initial state
  const [speed, setSpeed] = useState(5); // Speed of the vehicle

  useEffect(() => {
    const cycle = ["red", "green", "yellow"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % cycle.length;
      setTrafficLightState(cycle[index]);
    }, 3000); // Change light every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <TrafficLight state={trafficLightState} />
      <Vehicle speed={speed} trafficLightState={trafficLightState} />
    </div>
  );
};

export default App;
