import express from 'express';
import mongoose from 'mongoose';
import Planet from "./model/Planet.js";
import Person from "./model/Person.js";
import Ship from "./model/Ship.js"

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://galaxy:12345@galaxycluscter.lytezua.mongodb.net/')

function createOptionEndpoint(option, database) {
  app.get(`/api/${option}/:name`, async (req, res) => {
    const chosenItem = await database.findOne({name: req.params.name});
    res.send(chosenItem);
  })
}

app.get('/api/planets', async (req, res) => {
  const filter = req.query;
  const key = Object.keys(filter)[0];
  if (key) {
    const planets = await Planet.find({ [key]: { $regex: filter[key] } });
    res.send(planets)
  } else {
    const planets = await Planet.find();
    res.send(planets)
  }
});
function createListEndpoint(list, database) {
  app.get(`/api/${list}`, async (req, res) => {
    const toSend = await database.find();
    res.send(toSend);
  })
}

createOptionEndpoint('planets', Planet)
createOptionEndpoint('tourguide', Person)
createOptionEndpoint('starships', Ship)
createListEndpoint('planets', Planet)
createListEndpoint('people', Person)
createListEndpoint('starships', Ship)

app.post('/api/planets', async (req, res) => {
  const newPlanet = req.body;
  const residentIDs = newPlanet.residents.split(',');
  const residents = [];
  for (const residentID of residentIDs) {
    residents.push(await Person.findOne({ id: residentID }))
  }
  newPlanet.residents = residents;
  console.log(newPlanet);
  Planet.create(newPlanet);
})

app.listen(5000, () => {
  console.log('http://localhost:5000');
})

