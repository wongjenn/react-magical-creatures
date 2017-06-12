import React, { Component } from 'react';
import CreaturesIndex from './creatures_index';
import CreatureDetail from './creature_detail';
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
        <div className="App-Detail">
          <CreatureDetail />
        </div>
      </div>
    );
  }
}

export default App;
