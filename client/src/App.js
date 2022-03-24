import "./App.css";
import Animals from "./components/Animals";
import Sightings from "./components/Sightings";
import { useState } from "react"

const animalPage = <Animals />
const sightingPage = <Sightings />

function App() {
  const [page, setPage] = useState("animal")
  let selectedPage;
  if (page === "animal") {
    selectedPage = animalPage
  } else {
    selectedPage = sightingPage
  }

  const handleSelect = (event) => {
    event.preventDefault()
    setPage(event.target.value);
  }

  return (
    <div className="App">
      <select onChange={handleSelect}>
        <option value="animal">Animals</option>
        <option value="sightings">Sightings</option>
        </select>
      {
        selectedPage
      }
    </div>
  );
}

export default App;
