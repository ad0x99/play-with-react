import { Component, useState } from 'react';

import './App.css';
import CardList from './components/CardList/CardList.component.jsx';
import SearchBox from './components/SearchBox/SearchBox.component';

const App = () => {
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value.toLowerCase();

    setSearchField(searchFieldValue);
  };

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLowerCase().includes(searchField);
  // });

  return (
    <div className="App">
      <h1 className="app-title">Welcome to Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="search monsters"
      />

      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};

// class App extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Welcome to Monsters Rolodex</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange}
//           className="search-box"
//           placeholder="search monsters"
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
