function SearchBar({ characters, setSearchResults }) {
  const handlsSubmit = (e) => e.preventDefault();

  // Checks the searchbar for anything being typed and then tries to display only the characters that match your input
  // live input, doesn't use a button
  const handleSearchChange = (e) => {
    if (!e.target.value || '') {
      return setSearchResults
    }

    const resultsArray = characters.filter(
      character => 
        character.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    
    setSearchResults(resultsArray);
  }

  return (
    <div className='search'>
      <div>Search for a StarWars Character!</div>
      <form onSubmit={handlsSubmit}>
          <input
              type='text'
              id='search'
              onChange={handleSearchChange}
            />
      </form>
    </div>
  );
}

export default SearchBar;
