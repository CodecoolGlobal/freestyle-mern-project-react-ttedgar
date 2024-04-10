import express from 'express';
import mongoose from 'mongoose';
import Planet from './model/Planet.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://galaxy:12345@galaxycluscter.lytezua.mongodb.net/')

app.get('/api/destinations', async (req, res) => {
  const planetList = await Planet.find();
  res.send(planetList);
})

app.get('/api/people', async (req, res) => {
  const personList = await Person.find();
  res.send(personList);
})

app.listen(5000, () => {
  console.log('http://localhost:5000');
})
