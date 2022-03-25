import { useState } from "react";

const AnimalsForm = (props) => {
  const emptyAnimal = {
    commonname: "",
    scientificname: "",
    estimatedlivingwild: "",
    conservationstatus: "",
  };

  const [animal, setAnimal] = useState(emptyAnimal);

  //create functions that handle the event of the user typing into the form
  const handleCommonNameChange = (event) => {
    const commonname = event.target.value;
    setAnimal((animal) => ({ ...animal, commonname }));
  };

  const handleScientificNameChange = (event) => {
    const scientificname = event.target.value;
    setAnimal((animal) => ({ ...animal, scientificname }));
  };

  const handleNumberLivingChange = (event) => {
    const estimatedlivingwild = event.target.value;
    setAnimal((animal) => ({ ...animal, estimatedlivingwild }));
  };

  const handleStatusChange = (event) => {
    const conservationstatus = event.target.value;
    setAnimal((animal) => ({ ...animal, conservationstatus }));
  };

  //A function to handle the post request
  const postAnimal = (newAnimal) => {
    return fetch("http://localhost:5005/api/animals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnimal),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
      });
  };

  // ASK FOR HELP
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setAnimal(animal);
    await postAnimal(animal);
    // ignores promise
    props.addAnimal(animal);
    setAnimal(emptyAnimal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Common Name</label>
        <input
          type="text"
          id="add-common-name"
          placeholder="Common Name"
          required
          value={animal.commonname}
          onChange={handleCommonNameChange}
        />
        <br />

        <label>Scientific Name</label>
        <input
          type="text"
          id="add-scientific-name"
          placeholder="Latin Name"
          required
          value={animal.scientificname}
          onChange={handleScientificNameChange}
        />
        <br />

        <label>Number Living in the Wild</label>
        <input
          type="number"
          id="add-living-in-the-wild"
          min={0}
          placeholder="0"
          required
          value={animal.estimatedlivingwild}
          onChange={handleNumberLivingChange}
        />
        <br />

        <label>Conservation Status</label>
        {"      "}
        <select name="consevationstatus" onChange={handleStatusChange} required>
          <option hidden>Select</option>
          <option value="LC" key="1">
            LC - Least Concern
          </option>
          <option value="NT" key="2">
            NC - Near Threatened
          </option>
          <option value="VU" key="3">
            VU - Vulnerable
          </option>
          <option value="EN" key="4">
            EN - Endangered
          </option>
          <option value="CR" key="5">
            CR - Critically Endangered
          </option>
          <option value="EW" key="6">
            EW - Extinct in the Wild
          </option>
          <option value="EX" key="7">
            EX - Extinct
          </option>
          <option value="DD" key="8">
            DD - Data Deficient
          </option>
          <option value="NE" key="9">
            NE - Not Evaluated
          </option>
        </select>
        <br />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default AnimalsForm;
