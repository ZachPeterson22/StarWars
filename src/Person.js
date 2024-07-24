import './App.css';
import { useEffect, useState } from 'react';

function Person({ character, searchResults, setSearchResults}) {

  // State to show loading if the homeworld data hasn't loaded quite yet
  const [isHomeworldLoading, setIsHomeworldLoading] = useState(true);
  // State to show loading if the species data hasn't loaded quite yet
  const [isSpeciesLoading, setIsSpeciesLoading] = useState(true);
  // State for the species for this specific character
  const [species, setSpecies] = useState();

  useEffect(() => {
    // fetch request to grab characters homeworld value
    async function getHomeworld() {
      const response = await fetch(character.homeworld);
      const data = await response.json();
      const temp = searchResults.map(res => {
        if (res.homeworld === data.url) {
          res.homeworld = data.name;
        }
        return res;
      })
      setSearchResults(temp);
      setIsHomeworldLoading(false);
    }

    getHomeworld();
  }, []);

  useEffect(() => {
    async function getSpecies() {
      // can be an empty array so if it is it makes the value 'Unknown' similar to how homeworld works
      if(character.species.length > 0) {
        const response = await fetch(character.species[0]);
        const data = await response.json();
        setSpecies(data.name);
      } else {
        setSpecies('Unknown');
      }
      setIsSpeciesLoading(false);
    }

    // ---------
    // This is where I got to with species, adding this breaks searching but technically "searches"
    // ---------
    // async function getSpecies() {
    //   const response = await fetch(character.species[0]);
    //   const data = await response.json();
    //   const temp = searchResults.map(res => {
    //     if (res.species[0]) {
    //       if (res.species[0] === data.url) {
    //         res.species = data.name;
    //       }
    //     } else {
    //       res.species = "Unknown";
    //     }
    //     return res;
    //   })
    //   setSearchResults(temp);
    //   setIsSpeciesLoading(false);
    // }

    getSpecies();
  }, []);

  return (
    <div>
      <div className='character'>
        <div className='attribute'>Name: {character.name}</div>
        {isHomeworldLoading ? <div>Loading Homeworld...</div> : <div className='attribute'>Homeworld: {character.homeworld}</div>}
        {isSpeciesLoading ? <div>Loading Species...</div> : <div className='attribute'>Species: {species}</div>}
      </div>
    </div>
  );
}

export default Person;
