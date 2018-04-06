import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker';

const MAX_TIME_RANGE = [300, 450];
const TIME_MULTIPLIER_RANGE = [1.1, 1.2];
const TIME_INITIAL_RANGE = [20, 70];
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
          things={["avocado", "bagel", "clarinet", "death", "snail", "Taylor Swift", "wingnut", "hipsters", "Trump", "UFOs", "memes", "SpongeBob", "AI", "UC Berkeley", "Canada", "Christmas ornaments", "standing desk", "Steph Curry", "banana", "platypus", "Game of Thrones", "Beyonce", "trash", "M&Ms", "Charles Darwin", "pizza", "Harvard", "Twitter", "Snapchat", "Mean Girls", "water bottle", "bougie places", "The Louvre", "Queen Elizabeth", "intestines", "fedoras", "monkey", "preschool", "toilet", "hash brown", "iPhones", "gym bros", "nuclear power", "NASA", "stress ball", "bike accident", "awkward dates", "Cinnamon Toast Crunch", "hip hop", "Walmart", "Tetris", "fire alarm", "peanut allergy", "frats", "Johnny Depp", "the Kardashians", "business school", "Drake", "Justin Bieber", "Texas", "hockey", "Caltrain", "San Francisco", "New York City", "North Korea", "farmer", "number theory", "C++", "orange juice", "rice cooker", "sriracha", "Cards Against Humanity", "sleeping bag", "virtual reality", "eyeball", "flip flop tan", "cupcakes", "fuzzy slippers", "design thinking", "duct tape", "Disney", "bicep curls", "suitcases", "Facebook Messenger", "business card", "tattoos", "earthquake", "Hawaii", "pillowcase", "Halloween", "Skittles", "lasers", "swiss army knife", "kangaroo", "buffet", "sushi", "rock climbing", "cliff jumping", "rain jacket", "resistor", "Buddha", "canola oil", "Dune", "1984", "Macbeth", "Silicon Valley", "Soylent", "jeggings", "tuxedo", "Tesla", "BMW", "waterfall", "camping", "brunch", "floppy disk", "UV rays"]}
        />
      </div>
    );
  }
}

export default App;
