const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("../server/db/db-connection.js");

const app = express();

const PORT = 5005;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My ExpressJS" });
});
// SPECIES //
//create the get request
app.get("/api/animals", cors(), async (req, res) => {
  try {
    const { rows: animals } = await db.query("SELECT * FROM species");
    res.send(animals);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//create the POST request
app.post("/api/animals", cors(), async (req, res) => {
  const newAnimal = {
    commonname: req.body.commonname,
    scientificname: req.body.scientificname,
    estimatedlivingwild: req.body.estimatedlivingwild,
    conservationstatus: req.body.conservationstatus,
  };
  console.log([
    newAnimal.commonname,
    newAnimal.scientificname,
    newAnimal.estimatedlivingwild,
    newAnimal.conservationstatus,
  ]);
  const result = await db.query(
    "INSERT INTO species (commonname, scientificname, estimatedlivingwild, conservationstatus, CreationTimeStamp) VALUES($1, $2, $3, $4, current_timestamp) RETURNING *",
    [
      newAnimal.commonname,
      newAnimal.scientificname,
      newAnimal.estimatedlivingwild,
      newAnimal.conservationstatus,
    ]
  );
  console.log("Post animal row 0", result.rows[0]);
  res.json(result.rows[0]);
});

// INDIVIDUALS //
//create the get request
app.get("/api/animalindividuals", cors(), async (req, res) => {
  try {
    const { rows: individuals } = await db.query("SELECT * FROM individuals");
    res.send(individuals);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//create the POST request
app.post("/api/animalindividuals", cors(), async (req, res) => {
  const newIndividual = {
    nickname: req.body.nickname,
    species: req.body.species,
  };
  console.log([newIndividual.nickname, newIndividual.species]);
  const result = await db.query(
    "INSERT INTO individuals (nickname, species, CreationTimestamp) VALUES($1, $2, current_timestamp) RETURNING *",
    [newIndividual.nickName, newIndividual.species]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

// SIGHTINGS //
//create the get request
app.get("/api/animalsightings", cors(), async (req, res) => {
  try {
    const { rows: sightings } = await db.query("SELECT * FROM sightings");
    res.send(sightings);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//create the POST request
app.post("/api/animalsightings", cors(), async (req, res) => {
  const newSighting = {
    datetime: req.body.datetime,
    individualnickname: req.body.individualnickname,
    location: req.body.location,
    healthy: req.body.healthy,
    emailsighter: req.body.emailsighter,
  };
  console.log([
    newSighting.datetime,
    newSighting.individualnickname,
    newSighting.location,
    newSighting.healthy,
    newSighting.emailsighter,
  ]);
  const result = await db.query(
    "INSERT INTO sightings (datetime, individualnickname, location, healthy, emailsighter, creationtimestamp) VALUES($1, $2, $3, $4, $5, current_timestamp) RETURNING *",
    [
      newSighting.datetime,
      newSighting.individualnickname,
      newSighting.location,
      newSighting.healthy,
      newSighting.emailsighter,
    ]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
