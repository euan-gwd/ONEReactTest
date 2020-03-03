import React, { Component } from 'react';
import billboard from './billboard.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-heading App-flex">
          <h2>
            Welcome to <span className="App-react">The Shopping Cart</span>
          </h2>
        </div>
        <div>
          <img className="App-billboard" src={billboard} alt="billboard" />
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
