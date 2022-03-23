import { useState } from "react";

const SightingsForm = (props) => {
  const emptySighting = {
    datetime: "",
    individualnickname: "",
    location: "",
    healthy: "",
    emailsighter: "",
  };

  const [sighting, setSighting] = useState({ emptySighting });

  //create functions that handle the event of the user typing into the form
  const handleDateTime = (event) => {
    const datetime = event.target.value;
    setSighting((sighting) => ({ ...sighting, datetime }));
  };

  const handleIndividualNickName = (event) => {
    const individualnickname = event.target.value;
    setSighting((sighting) => ({ ...sighting, individualnickname }));
  };

  const handleLocation = (event) => {
    const location = event.target.value;
    setSighting((sighting) => ({ ...sighting, location }));
  };

  const handleHealthy = (event) => {
    const healthy = event.target.value;
    setSighting((sighting) => ({ ...sighting, healthy }));
  };

  const handleEmailSighter = (event) => {
    const emailsighter = event.target.value;
    setSighting((sighting) => ({ ...sighting, emailsighter }));
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
    // e.preventDefault();
    setSighting(sighting);
    postSighting(sighting);
    props.addSighting(sighting);
    setSighting(emptySighting);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Individual's Nickname</label>
        <input
          type="text"
          id="add-nickname"
          placeholder="Spot"
          required
          value={sighting.individualnickname}
          onChange={handleIndividualNickName}
        />
        <br />

        <label>Date and Time of Sighting</label>
        <input
          type="text"
          id="add-date-time"
          placeholder="YYYY-MM-DD HR:MN:SC"
          required
          value={sighting.datetime}
          onChange={handleDateTime}
        />
        <br />

        <label>Where were they seen?</label>
        <input
          type="text"
          id="add-location"
          required
          value={sighting.location}
          onChange={handleLocation}
        />
        <br />

        <label>Did they appear healthy?</label>
        <input
          type="text"
          id="add-conversation-status"
          placeholder="True or False"
          required
          value={sighting.healthy}
          onChange={handleHealthy}
        />
        <br />

        <label>Please enter your email</label>
        <input
          type="text"
          id="add-conversation-status"
          placeholder="name@email.com"
          required
          value={sighting.emailsighter}
          onChange={handleEmailSighter}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default SightingsForm;
