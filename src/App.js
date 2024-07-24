import './App.css';
import { useEffect, useState } from 'react';
import Person from './Person.js';
import SearchBar from './SearchBar.js';

// URL to grab all the characters initially
const STAR_WARS_PEOPLE = "https://swapi.info/api/people";

function App() {

  // State to show loading if the data hasn't loaded quite yet
  const [isLoading, setIsLoading] = useState(true);
  // State for all the characters to display
  const [allCharacters, setallCharacters] = useState();
  // State for the results in searching
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    // Fetch request to grab all the different characters' data
    async function getallCharacters() {
      const response = await fetch(STAR_WARS_PEOPLE);
      const data = await response.json();
      setallCharacters(data);
      setSearchResults(data);
      setIsLoading(false);
    }

    getallCharacters();
  }, [])

  return (
    <div className='mainPage'>
      <SearchBar characters={allCharacters} setSearchResults={setSearchResults}></SearchBar>
      <div className='people'>
        {isLoading ? <div>Loading...</div> : searchResults.map((character, i) => 
          <Person key={i} character={character}></Person>
        )}
      </div>
    </div>
  );
}

export default App;
