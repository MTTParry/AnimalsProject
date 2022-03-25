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
      <label>Species*</label>
      {"      "}
      <select onChange={prop.handleSpecies} required>
        <option hidden>Select</option>
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
