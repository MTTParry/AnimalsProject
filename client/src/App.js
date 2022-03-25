import { useState } from "react";
import "./App.css";
import Animals from "./components/Species/Animals";
import Sightings from "./components/Sightings/Sightings";
import Individuals from "./components/Individuals/Individuals";

const animalPage = <Animals />;
const sightingsPage = <Sightings />;
const individualsPage = <Individuals />;

function App() {
  // How to set pages
  const [page, setPage] = useState("sightings");
  let selectedPage;
  if (page === "sightings") {
    selectedPage = sightingsPage;
  } else if (page === "animals") {
    selectedPage = animalPage;
  } else if (page === "individuals") {
    selectedPage = individualsPage;
  }

  const handleSelect = (e) => {
    e.preventDefault();
    setPage(e.target.value);
  };

  return (
    <div className="App">
      <div className="topnav">
        <select className="dropdown" onChange={handleSelect}>
          <option className="dropdown-contents" value="sightings">
            Animal Sightings
          </option>
          <option className="dropdown-contents" value="animals">
            Species
          </option>
          <option className="dropdown-contents" value="individuals">
            Individual Animals
          </option>
        </select>
      </div>
      {selectedPage}
    </div>
  );
}

export default App;
