import { useState } from "react";
import SpeciesDropDown from "./SpeciesDropDown";

const IndividualsForm = (props) => {
  const emptyIndividual = {
    nickname: "",
    species: "",
  };

  const [individual, setIndividual] = useState(emptyIndividual);

  //create functions that handle the event of the user typing into the form
  const handleNickName = (event) => {
    const nickname = event.target.value;
    setIndividual((individual) => ({ ...individual, nickname }));
  };

  const handleSpecies = (event) => {
    const species = event.target.value;
    setIndividual((individual) => ({ ...individual, species }));
  };

  //A function to handle the post request
  const postIndividual = (newIndividual) => {
    return fetch("http://localhost:5005/api/animalindividuals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIndividual),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addIndividual(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIndividual(emptyIndividual);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postIndividual(individual);
    props.addIndividuals(individual);
    setIndividual(emptyIndividual);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Animal's Nickname</label>
        <input
          type="text"
          id="add-nickname"
          placeholder="Nickname"
          required
          value={individual.nickname}
          onChange={handleNickName}
        />
        <br />

        <SpeciesDropDown handleSpecies={handleSpecies} />
        <p className="note">
          *If the individual's species is not available, make sure that it
          appears on the Species page.
        </p>
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default IndividualsForm;
