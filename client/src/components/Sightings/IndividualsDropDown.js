import { useState, useEffect } from "react";

const IndividualsDropDown = (prop) => {
  const [individuals, setIndividuals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/api/animalindividuals`)
      .then((response) => response.json())
      .then((individuals) => {
        setIndividuals(individuals);
      });
  }, []);

  //Listing Individuals
  return (
    <div>
      <label>Individuals*</label> {"      "}
      <select onChange={prop.handleIndividualNickName} required>
        <option hidden>Select</option>
        {individuals.map((individual) => (
          <option value={individual.nickname} key={individual.id}>
            {individual.nickname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IndividualsDropDown;
