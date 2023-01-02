import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello! Welcome to Monsters Rolodex</p>
        </header>
      </div>
    );
  }
}

export default App;
