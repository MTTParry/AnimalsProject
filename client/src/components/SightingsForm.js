import { useState } from "react";

const SightingsForm = (props) => {
  const emptySighting = Object.freeze({
    datetime: "",
    individualnickname: "",
    location: "",
    healthy: false,
    emailsighter: "",
  });

  const [sighting, setSighting] = useState(emptySighting);
  console.log(sighting)

  const handleTextChange = (e) => {
    setSighting({
      ...sighting,
      [e.target.name]: e.target.value.trim()
    })
  }
  
  const handleBoolChange = (e) => {
    setSighting({
      ...sighting,
      [e.target.name]: e.target.checked
    })
  }

  //A function to handle the post request
  const postSighting = (newSighting) => {
    return fetch("http://localhost:5005/api/animalsightings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response
        }
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addSighting(newSighting);
        setSighting(emptySighting);
      })
      .catch((error) => {
        // handle error?
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSighting(sighting);
    postSighting(sighting);
  };

  return (
    <form id="sighting" onSubmit={handleSubmit}>
      <fieldset>
        <label>Individual's Nickname</label>
        <input
          type="text"
          id="add-nickname"
          placeholder="Spot"
          required
          value={sighting.individualnickname}
          name="individualnickname"
          onChange={handleTextChange}
        />
        <br />

        <FormTextInput 
          form="sighting"
          label="Individual's Nickname"
          placeholder="Fluffy"
          value={sighting.individualnickname}
          name="individualnickname"
          callback={handleTextChange}
        />

        <label>Date and Time of Sighting</label>
        <input
          type="text"
          id="add-date-time"
          placeholder="YYYY-MM-DD HR:MN:SC"
          required
          value={sighting.datetime}
          name="datetime"
          onChange={handleTextChange}
        />
        <br />

        <label>Where were they seen?</label>
        <input
          type="text"
          id="add-location"
          required
          value={sighting.location}
          name="location"
          onChange={handleTextChange}
        />
        <br />

        <label for="add-healthy">Did they appear healthy?</label>
        <input
          type="checkbox"
          id="add-healthy"
          required
          name="healthy"
          checked={sighting.healthy}
          onChange={handleBoolChange}
        />
        <br />

        <label>Please enter your email</label>
        <input
          type="text"
          id="add-emailsighter"
          placeholder="name@email.com"
          required
          value={sighting.emailsighter}
          name="emailsighter"
          onChange={handleTextChange}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

const FormTextInput = (props) => {
  return (
    <>
    <label for={props.name}>{props.label}</label>
    <input
      type="text"
      id={props.form + "-" + props.name}
      placeholder={props.placeholder}
      required
      value={props.value}
      name={props.name}
      onChange={props.callback}
    />
    <br />
    </>
  );
}

export default SightingsForm;
