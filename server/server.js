import express from 'express';
import mongoose from 'mongoose';
import Planet from './model/Planet.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://galaxy:12345@galaxycluscter.lytezua.mongodb.net/')

app.post('/api/planet', async (req, res) => {
  const name = req.body.name;
  const climate = req.body.climate;
  const terrain = req.body.terrain;
  const gravity = req.body.gravity;
  const population = req.body.population;
  const residents = req.body.residents.split(",");
  const imageURL = req.body.imageURL;
  const planet = await new Planet({
    name,
    climate,
    terrain,
    gravity,
    population,
    residents,
    imageURL,
  })
  planet.save();
})

app.get('/api/proba', (req, res) => {
  res.send({hello: 'hello world'})
})

app.listen(5000, () => {
  console.log('http://localhost:5000');
})
