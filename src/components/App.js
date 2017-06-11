import React, { Component } from 'react';
import CreaturesIndex from './creatures_index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Magical Creatures</h2>
        </div>
        <div className="App-Index">
          <CreaturesIndex />
        </div>
      </div>
    );
  }
}

export default App;
