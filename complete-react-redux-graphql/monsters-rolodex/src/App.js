import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      name: 'Thomas',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name}! Welcome to Monsters Rolodex</p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: 'Thomas Bui' };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
