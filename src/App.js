import './App.css';
import { useEffect, useState } from 'react';
import Person from './Person.js';
import SearchBar from './SearchBar.js';

// URL to grab all the characters
const STAR_WARS_PEOPLE = "https://swapi.info/api/people";

function App() {

  // State to show loading if the data hasn't loaded quite yet
  const [isLoading, setIsLoading] = useState(true);
  // State for all the characters to display
  const [allPeople, setAllPeople] = useState();
  // State for the results in searching
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    // Fetch request to grab all the different characters' data
    async function getAllPeople() {
      const response = await fetch(STAR_WARS_PEOPLE);
      const data = await response.json();
      setAllPeople(data);
      setSearchResults(data);
      setIsLoading(false);
    }

    getAllPeople();
  }, [])

  return (
    <div className='people'>
      <SearchBar characters={allPeople} setSearchResults={setSearchResults}></SearchBar>
      {isLoading ? <div>Loading...</div> : searchResults.map((person, i) => 
        <Person key={i} props={person}></Person>
      )}
    </div>
  );
}

export default App;
