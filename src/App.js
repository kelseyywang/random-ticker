import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker';
import Customize from './components/Customize';

const MAX_TIME_RANGE = [300, 400];
const TIME_MULTIPLIER_RANGE = [1.1, 1.2];
const TIME_INITIAL_RANGE = [20, 70];
const THINGS = ["avocado", "bagel", "clarinet", "death", "snail", "Taylor Swift", "wingnut", "hipsters", "Donald Trump", "UFOs", "memes", "SpongeBob", "AI", "UC Berkeley", "Canada", "Christmas ornaments", "standing desk", "Steph Curry", "banana", "platypus", "Game of Thrones", "Beyonce", "trash", "M&Ms", "Charles Darwin", "pizza", "Harvard", "Twitter", "Snapchat", "Mean Girls", "water bottle", "bougie restaurants", "The Louvre", "Queen Elizabeth", "intestines", "fedoras", "monkey", "preschool", "toilet", "hash brown", "iPhones", "gym bros", "nuclear power", "NASA", "stress ball", "bike accident", "awkward dates", "Cinnamon Toast Crunch", "hip hop", "Walmart", "Tetris", "fire alarm", "peanut allergy", "frats", "Johnny Depp", "the Kardashians", "business school", "Drake", "Justin Bieber", "Texas", "hockey", "Caltrain", "San Francisco", "New York City", "North Korea", "farmer", "number theory", "C++", "orange juice", "rice cooker", "sriracha", "Cards Against Humanity", "sleeping bag", "virtual reality", "eyeball", "flip flop tan", "cupcakes", "fuzzy slippers", "design thinking", "duct tape", "Disney", "bicep curls", "suitcases", "Facebook Messenger", "business card", "tattoos", "earthquake", "Hawaii", "pillowcase", "Halloween", "Skittles", "lasers", "swiss army knife", "kangaroo", "buffet", "sushi", "rock climbing", "cliff jumping", "rain jacket", "resistor", "Buddha", "canola oil", "Dune", "1984", "Macbeth", "Silicon Valley", "Soylent", "jeggings", "tuxedo", "Tesla", "BMW", "waterfall", "camping", "brunch", "floppy disk", "UV rays", "black coffee", "Philz", "Chick-fil-a", "waffles", "helicopter", "figure skating", "Bitcoin", "mismatched socks", "Chevron", "La Croix", "The Chainsmokers", "cat", "kiwi", "swordfighting", "police", "your grandma", "Nicki Minaj", "acrobatic yoga", "weed", "Monopoly", "Mark Zuckerberg", "Elon Musk", "Tinder", "unicorn", "journalists", "The New York Times", "Pop-Tarts", "tequila", "Banksy", "Barack Obama", "post-it", "floss"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randMaxTime: MAX_TIME_RANGE[0],
      randTimeMultiplier: TIME_MULTIPLIER_RANGE[0],
      randTimeInitial: TIME_INITIAL_RANGE[0],
      showTicker: false,
      myMin: 1,
      myMax: 3,
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

  onSubmit(min, max) {
    if (min <= max && min >= 0) {
      this.setState({
        showTicker: true,
        myMin: min,
        myMax: max,
      });
    }
  }

  //renders random ticker between min and max (both inclusive)
  render() {
    return (
      <div className="app-container">
        {!this.state.showTicker &&
        <Customize
          onSubmit={this.onSubmit.bind(this)}
        />}
        {this.state.showTicker &&
        <Ticker
          maxTime={this.state.randMaxTime}
          timeMultiplier={this.state.randTimeMultiplier}
          timeInitial={this.state.randTimeInitial}
          min={this.state.myMin}
          max={this.state.myMax}
          onRestart={this.onRestart.bind(this)}
          things={THINGS}
        />}
      </div>
    );
  }
}

export default App;
