import { useState, useEffect } from "react";
import IndividualsForm from "./IndividualsForm";
// import SpeciesDropDown from "";

function Individuals() {
  const [individuals, setIndividuals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/api/animalindividuals")
      .then((response) => response.json())
      .then((individuals) => {
        //setStudents((students[3]));
        //console.log("Testing", typeof students);
        setIndividuals(individuals);
      });
  }, []);

  const addIndividuals = (newIndividual) => {
    console.log(newIndividual);
    //postAnimal(newAnimal);
    setIndividuals((individuals) => [...individuals, newIndividual]);
  };

  return (
    <div className="individuals">
      <h2> List of Individual Animals</h2>
      <ul>
        {individuals.map((individual) => (
          <li key={individual.id}>
            {individual.nickname} is a <i>{individual.species}</i>
            <hr></hr>
          </li>
        ))}
      </ul>
      <IndividualsForm addIndividuals={addIndividuals} />
    </div>
  );
}

export default Individuals;
