import React from 'react';
import '../styles/Map.css';
import AvengersLogo from '../images/logo.jpg';

const Map = () => {
  return (
    <div className="game">
      <img src={AvengersLogo} alt="Avengers Logo" className="avengers-logo" />
      <h1>Welcome to the Game</h1>
      <div className="levels">
        <div className="level level-1">
          <h2>Level 1</h2>
          <div className="map">
            <div className="level-circle"></div>
          </div>
        </div>
        <div className="level level-2">
          <h2>Level 2</h2>
          <div className="map">
            <div className="level-circle"></div>
          </div>
        </div>
        <div className="level level-3">
          <h2>Level 3</h2>
          <div className="map">
            <div className="level-circle"></div>
          </div>
        </div>
        <div className="level level-4">
          <h2>Level 4</h2>
          <div className="map">
            <div className="level-circle"></div>
          </div>
        </div>
        <div className="level level-5">
          <h2>Level 5</h2>
          <div className="map">
            <div className="level-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
