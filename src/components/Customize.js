import React, { Component } from 'react';
import '../styles/customize.css';

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 3,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.min, this.state.max);
  }

  render() {
    return (
      <div className="customize-container">
      <div className="setup-text">
      Set your number range (both inclusive values):
      </div>
        <form onSubmit={this.handleSubmit}>
          <div className="customize-container">
            <label>
              Min:
              <input className="input-field" type="text" value={this.state.min} name="min" onChange={this.handleChange} />
            </label>
          </div>
          <div className="customize-container">
            <label>
              Max:
              <input className="input-field" type="text" value={this.state.max} name="max" onChange={this.handleChange} />
            </label>
          </div>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Customize;
