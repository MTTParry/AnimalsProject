import { useState, useEffect } from "react";
import SightingsForm from "./SightingsForm";

function Sightings() {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/api/animalsightings")
      .then((response) => response.json())
      .then((sightings) => {
        //setStudents((students[3]));
        //console.log("Testing", typeof students);
        // setSightings(sightings);
      });
  }, []);

  const addSighting = (newSighting) => {
    //console.log(newAnimal);
    //postAnimal(newAnimal);
    setSightings((sightings) => [...sightings, newSighting]);
  };

  function boolToStr(input) {
    if (input === true) {
      return "healthy";
    } else {
      return "not healthy";
    }
  }

  return (
    <div className="sightings">
      <h2> List of Animal Sightings</h2>
      <ul>
        {sightings.map((sighting) => (
          <li key={sighting.id}>
            {sighting.individualnickname} was spotted in {sighting.location} at{" "}
            {sighting.datetime}.
            <br />
            {sighting.individualnickname} appeared to be {boolToStr(sighting.healthy)}.
            <br/>
            To contact the spotter, please email them at {sighting.emailsighter}
            .<hr></hr>
          </li>
        ))}
      </ul>
      <SightingsForm addSighting={addSighting} />
    </div>
  );
}

export default Sightings;
