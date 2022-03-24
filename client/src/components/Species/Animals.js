import { useState, useEffect } from "react";
import AnimalsForm from "./AnimalsForm";

function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // it's called 'animal' but it's species
    fetch("http://localhost:5005/api/animals")
      .then((response) => response.json())
      .then((animals) => {
        //setStudents((students[3]));
        //console.log("Testing", typeof students);
        setAnimals(animals);
      });
  }, []);

  const addAnimal = (newAnimal) => {
    console.log(newAnimal);
    //postAnimal(newAnimal);
    setAnimals((animals) => [...animals, newAnimal]);
  };

  return (
    <div className="animals">
      <h2> List of Animal Species</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {" "}
            <b>{animal.commonname}</b> or <i>{animal.scientificname}</i>,
            <br />
            is {animal.conservationstatus} with an estimated{" "}
            {animal.estimatedlivingwild} living in the wild.
            <hr></hr>
          </li>
        ))}
      </ul>
      <AnimalsForm addAnimal={addAnimal} />
    </div>
  );
}

export default Animals;
