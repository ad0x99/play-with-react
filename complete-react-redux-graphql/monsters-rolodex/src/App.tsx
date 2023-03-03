import { useState, useEffect, ChangeEvent } from 'react';

import './App.css';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // Only fetch new monsters data when has no monsters yet
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  // Only filtering monsters when monsters or searchField changes
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
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
