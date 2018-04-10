import React, { Component } from 'react';
import '../styles/ticker.css';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: this.props.min,
      lastTimeoutAmt: this.props.timeInitial,
      currentDisplayStyle: "number",
      ticking: false,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.numberTimeout);
    clearTimeout(this.thingTimeout);
  }

  onNewNumberClick() {
    if (!this.state.ticking) {
      this.props.onRestart();
      this.setState({
        lastTimeoutAmt: this.props.timeInitial,
        currentDisplayStyle: "number",
        ticking: true,
      }, this.changeNum.bind(this));
    }
  }

  onNewThingClick() {
    if (!this.state.ticking) {
      this.props.onRestart();
      this.setState({
        lastTimeoutAmt: this.props.timeInitial,
        currentDisplayStyle: "thing",
        ticking: true,
      }, this.changeThing.bind(this));
    }
  }

  changeNum() {
    if (this.state.lastTimeoutAmt < this.props.maxTime) {
      let timeoutAmt = this.state.lastTimeoutAmt * this.props.timeMultiplier;
      let randNum = Math.floor(Math.random() * (this.props.max - this.props.min + 1)) + parseInt(this.props.min, 10);
      if (randNum === this.state.displayed) {
        randNum = ((randNum - this.props.min + 1) % (this.props.max - this.props.min + 1)) + parseInt(this.props.min, 10);
      }
      this.setState({
        displayed: randNum,
        lastTimeoutAmt: timeoutAmt,
      }, this.setNewNumberTimeout.bind(this, timeoutAmt));
    }
    else {
      this.setState({
        ticking: false,
      });
    }
  }

  changeThing() {
    if (this.state.lastTimeoutAmt < this.props.maxTime) {
      let thingArr = this.props.things;
      let timeoutAmt = this.state.lastTimeoutAmt * this.props.timeMultiplier;
      let randInd = Math.floor(Math.random() * (thingArr.length));
      if (thingArr[randInd] === this.state.displayed) {
        randInd = (randInd + 1) % thingArr.length;
      }
      this.setState({
        displayed: thingArr[randInd],
        lastTimeoutAmt: timeoutAmt,
      }, this.setNewThingTimeout.bind(this, timeoutAmt));
    }
    else {
      this.setState({
        ticking: false,
      });
    }
  }

  setNewNumberTimeout(time) {
    this.numberTimeout = setTimeout(this.changeNum.bind(this), time);
  }

  setNewThingTimeout(time) {
    this.thingTimeout = setTimeout(this.changeThing.bind(this), time);
  }

  render() {
    return (
      <div className="ticker-container">
        <div className={this.state.currentDisplayStyle}>
          {this.state.displayed}
        </div>
        <div className="button-container">
          <div
            className="restart-button"
            onClick={this.onNewNumberClick.bind(this)}
          >
            New Number!
          </div>
          <div
            className="restart-button"
            onClick={this.onNewThingClick.bind(this)}
          >
            New Thing!
          </div>
          </div>
      </div>
    );
  }
}

export default Ticker;
