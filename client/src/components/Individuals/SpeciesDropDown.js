import { useState, useEffect } from "react";

const SpeciesDropDown = (prop) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/api/animals`)
      .then((response) => response.json())
      .then((animals) => {
        setAnimals(animals);
      });
  }, []);

  //Listing Species
  return (
    <div>
      <select onChange={prop.handleSpecies}>
        {animals.map((animal) => (
          <option value={animal.scientificname} key={animal.id}>
            {animal.commonname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SpeciesDropDown;
