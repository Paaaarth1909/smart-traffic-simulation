import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import '../App.css';

const socket = io('http://localhost:5000');

function TrafficLight() {
  return (
    <div className="traffic-light">
      <div className="light red"></div>
      <div className="light yellow"></div>
      <div className="light green"></div>
    </div>
  );
}

export default TrafficLight;
