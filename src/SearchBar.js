import { useEffect, useState } from 'react';
function SearchBar({ characters, setSearchResults }) {
  const handlsSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchResults
    }

    const resultsArray = characters.filter(
      character => 
        character.name.includes(e.target.value)
        // character.homeworld.includes(e.target.value) ||
        // character.species[0].includes(e.target.value)
    );
    
    setSearchResults(resultsArray);
  }

  return (
    <div>
        <form className='' onSubmit={handlsSubmit}>
            <input 
                className=''
                type='text'
                id='search'
                onChange={handleSearchChange}
              />
            <button>Search</button>
        </form>
    </div>
  );
}

export default SearchBar;
