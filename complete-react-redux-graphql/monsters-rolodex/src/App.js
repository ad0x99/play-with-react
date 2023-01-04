import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/CardList/CardList.component.jsx';
import SearchBox from './components/SearchBox/SearchBox.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // Only fetch new monsters data when has no monsters yet
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  // Only filtering monsters when monsters or searchField changes
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value.toLowerCase();

    setSearchField(searchFieldValue);
  };

  return (
    <div className="App">
      <h1 className="app-title">Welcome to Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="search monsters"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
