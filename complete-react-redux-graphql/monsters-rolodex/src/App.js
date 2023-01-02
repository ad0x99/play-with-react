import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [
        {
          id: '123ea34f4',
          name: 'Thomas',
        },
        {
          id: '123ea34f5',
          name: 'Marcus',
        },
        {
          id: '123ea34f6',
          name: 'Seneca',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
