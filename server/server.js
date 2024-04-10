import express from 'express';
import mongoose from 'mongoose';
import Planet from "./model/Planet.js";

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://galaxy:12345@galaxycluscter.lytezua.mongodb.net/')

app.get('/api/people', async (req, res) => {
  const personList = await Person.find();
  res.send(personList);
})

app.get('/api/planets', async (req, res) => {
  const planets = await Planet.find();
  res.send(planets)
});

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

