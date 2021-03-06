import { useState } from "react";
import IndividualsDropDown from "./IndividualsDropDown";

const SightingsForm = (props) => {
  const emptySighting = {
    datetime: "",
    individualnickname: "",
    location: "",
    healthy: "",
    emailsighter: "",
  };

  const [sighting, setSighting] = useState(emptySighting);

  //create functions that handle the event of the user typing into the form
  const handleDateTime = (event) => {
    const datetime = event.target.value;
    setSighting((sighting) => ({ ...sighting, datetime }));
    console.log(sighting);
  };

  const handleIndividualNickName = (event) => {
    const individualnickname = event.target.value;
    setSighting((sighting) => ({ ...sighting, individualnickname }));
    console.log(sighting);
  };

  const handleLocation = (event) => {
    const location = event.target.value;
    setSighting((sighting) => ({ ...sighting, location }));
    console.log(sighting);
  };

  const handleHealthy = (event) => {
    const healthy = strToBool(event.target.value);
    setSighting((sighting) => ({ ...sighting, healthy }));
    console.log(sighting);
  };

  const handleEmailSighter = (event) => {
    const emailsighter = event.target.value;
    setSighting((sighting) => ({ ...sighting, emailsighter }));
    console.log(sighting);
  };

  //A function to handle the post request
  const postSighting = (newSighting) => {
    return fetch("http://localhost:5005/api/animalsightings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSighting(sighting); // redundant
    postSighting(sighting);
    props.addSighting(sighting);
    setSighting(emptySighting);
  };

  function strToBool(input) {
    if (input === "true") {
      return true;
    }
    return false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <IndividualsDropDown
          handleIndividualNickName={handleIndividualNickName}
        />

        <label>Date and Time of Sighting</label>
        <input
          type="datetime-local"
          id="add-date-time"
          required
          value={sighting.datetime}
          onChange={handleDateTime}
        />
        <br />

        <label>Where were they seen?</label>
        <input
          type="text"
          id="add-location"
          placeholder="They were seen at..."
          required
          value={sighting.location}
          onChange={handleLocation}
        />

        <p>
          Did they appear healthy?
          <input
            type="radio"
            id="healthy-individual"
            value="true"
            onChange={handleHealthy}
            name="health-status"
          />
          <label for="healthy" value="true">
            Yes
          </label>
          <input
            type="radio"
            id="unhealthy-individual"
            value="false"
            onChange={handleHealthy}
            name="health-status"
          />
          <label for="unhealthy" value="false">
            No
          </label>
        </p>

        <label>Please enter your email</label>
        <input
          type="email"
          id="add-conversation-status"
          placeholder="name@email.com"
          required
          value={sighting.emailsighter}
          onChange={handleEmailSighter}
        />
        <p className="note">
          *If the individual's nickname is not available, make sure that they
          appear on the Individual Animals Page.
        </p>
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default SightingsForm;
