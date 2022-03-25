import { useState } from "react";
import "./App.css";
import Animals from "./components/Species/Animals";
import Sightings from "./components/Sightings/Sightings";
import Individuals from "./components/Individuals/Individuals";

const animalPage = <Animals />;
const sightingsPage = <Sightings />;
const individualsPage = <Individuals />;

const Pages = Object.freeze({
  individuals: "individuals",
  animals: "animals",
  sightings: "sightings"
})

function App() {
  // How to set pages
  const [page, setPage] = useState(Pages.sightings);
  let selectedPage;
  if (page === Pages.sightings) {
    selectedPage = sightingsPage;
  } else if (page === Pages.animals) {
    selectedPage = animalPage;
  } else if (page === Pages.individuals) {
    selectedPage = individualsPage;
  }

  const handleSelect = (e) => {
    e.preventDefault();
    setPage(e.target.value);
  };

  return (
    <div className="App">
      <div className="topnav">
        <select onChange={handleSelect}>
          <option value={Pages.sightings}>Animal Sightings</option>
          <option value={Pages.animals}>Species of Animals</option>
          <option value={Pages.individuals}>Individual Animals</option>
        </select>
      </div>
      {selectedPage}
    </div>
  );
}

export default App;
