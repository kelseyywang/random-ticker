import React, { Component } from 'react';
import '../styles/ticker.css';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.min,
      lastTimeoutAmt: this.props.timeInitial,
    };
  }

  onRestartClick() {
    this.setState({
      lastTimeoutAmt: this.props.timeInitial,
    }, this.changeNum.bind(this));
  }

  changeNum() {
    if (this.state.lastTimeoutAmt < this.props.maxTime) {
      let timeoutAmt = this.state.lastTimeoutAmt * this.props.timeMultiplier;
      let randNum = Math.floor(Math.random() * (this.props.max - this.props.min + 1) + this.props.min);
      if (randNum === this.state.number) {
        randNum = (randNum + 1) % (this.props.max - this.props.min + 1) + this.props.min;
      }
      this.setState({
        number: randNum,
        changeCount: this.state.changeCount + 1,
        lastTimeoutAmt: timeoutAmt,
      }, this.setNewTimeout.bind(this, timeoutAmt));
    }
  }

  setNewTimeout(time) {
    this.timeout = setTimeout(this.changeNum.bind(this), time);
  }

  render() {
    return (
      <div className="ticker-container">
        <div className="number">
          {this.state.number}
        </div>
        <div
          className="restart-button"
          onClick={this.onRestartClick.bind(this)}
        >
          Click Me
        </div>
      </div>
    );
  }
}

export default Ticker;
