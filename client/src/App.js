import React from "react";
import TrafficLight from "./components/TrafficLight";
import "./App.css"; // Ensure this file exists inside src/

function App() {
    return (
        <div className="App">
            <h1>Smart Traffic Simulation 🚦</h1>
            <TrafficLight />
        </div>
    );
}

export default App;
