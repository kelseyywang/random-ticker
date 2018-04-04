import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker';

const MAX_TIME_RANGE = [300, 600];
const TIME_MULTIPLIER_RANGE = [1.1, 1.2];
const TIME_INITIAL_RANGE = [20, 80];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randMaxTime: MAX_TIME_RANGE[0],
      randTimeMultiplier: TIME_MULTIPLIER_RANGE[0],
      randTimeInitial: TIME_INITIAL_RANGE[0],
    };
  }

  onRestart() {
    let randMaxTime = Math.floor(Math.random() * (MAX_TIME_RANGE[1]-MAX_TIME_RANGE[0]) + MAX_TIME_RANGE[0]);
    let randTimeMultiplier = Math.random() * (TIME_MULTIPLIER_RANGE[1]-TIME_MULTIPLIER_RANGE[0]) + TIME_MULTIPLIER_RANGE[0];
    let randTimeInitial = Math.floor(Math.random() * (TIME_INITIAL_RANGE[1]-TIME_INITIAL_RANGE[0]) + TIME_INITIAL_RANGE[0]);
    this.setState({
      randMaxTime: randMaxTime,
      randTimeMultiplier: randTimeMultiplier,
      randTimeInitial: randTimeInitial,
    });
  }
  //renders random ticker between min and max (both inclusive)
  render() {
    return (
      <div className="app-container">
        <Ticker
          maxTime={this.state.randMaxTime}
          timeMultiplier={this.state.randTimeMultiplier}
          timeInitial={this.state.randTimeInitial}
          min={1}
          max={3}
          onRestart={this.onRestart.bind(this)}
        />
      </div>
    );
  }
}

export default App;
