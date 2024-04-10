import express from 'express';
import mongoose from 'mongoose';
import Planet from './model/Planet.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://galaxy:12345@galaxycluscter.lytezua.mongodb.net/')

/* async function fetchDataFromDatabase(url) {
  let allData = [];
  while (true) {
    const response = await fetch(url);
    const data = await response.json();
    allData = [...allData, data.results];
    url = data.next;
    if (!data.next) {
      break
    }
  }
  return allData;
}

app.post('/api/planet', async (req, res) => {
  const planetsFromDatabase = await fetchDataFromDatabase("https://swapi.dev/api/planets")
  planetsFromDatabase.forEach(async planetData => {
    const planet = await Planet.create({
      name: planetData.name,
      climate: planetData.climate,
      terrain: planetData.terrain,
      gravity: planetData.gravity,
      population: planetData.population,
      residents: planetData.residents,
      imageURL: null
    })
  })
}) */

app.get('/api/proba', (req, res) => {
  res.send({ hello: 'hello world' })
})

app.listen(5000, () => {
  console.log('http://localhost:5000');
})
