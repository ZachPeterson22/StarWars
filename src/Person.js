import './App.css';
import { useEffect, useState } from 'react';

function Person(character) {

  // State to show loading if the homeworld data hasn't loaded quite yet
  const [isHomeworldLoading, setIsHomeworldLoading] = useState(true);
  // State to show loading if the species data hasn't loaded quite yet
  const [isSpeciesLoading, setIsSpeciesLoading] = useState(true);
  // State for the homeworld for this specific character
  const [homeworld, setHomeworld] = useState();
  // State for the species for this specific character
  const [species, setSpecies] = useState();

  useEffect(() => {
    // fetch request to grab characters homeworld value
    async function getHomeworld() {
      const response = await fetch(character.character.homeworld);
      const data = await response.json();
      setHomeworld(data.name);
      setIsHomeworldLoading(false);
    }

    getHomeworld();
  }, []);

  useEffect(() => {
    // fetch request to grab a characters species value
    async function getSpecies() {
      // can be an empty array so if it is it makes the value 'Unknown' similar to how homeworld works
      if(character.character.species.length > 0) {
        const response = await fetch(character.character.species[0]);
        const data = await response.json();
        setSpecies(data.name);
      } else {
        setSpecies('Unknown');
      }
      setIsSpeciesLoading(false);
    }

    getSpecies();
  }, []);

  return (
    <div>
      <div className='person'>
        <div className='attribute'>Name: {character.character.name}</div>
        {isHomeworldLoading ? <div>Loading Homeworld...</div> : <div className='attribute'>Homeworld: {homeworld}</div>}
        {isSpeciesLoading ? <div>Loading Species...</div> : <div className='attribute'>Species: {species}</div>}
      </div>
    </div>
  );
}

export default Person;
