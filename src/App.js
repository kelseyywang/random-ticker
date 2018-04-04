import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Ticker
          maxTime={500}
          timeMultiplier={1.15}
          timeInitial={50}
          min={1}
          max={4}
        />
      </div>
    );
  }
}

export default App;
