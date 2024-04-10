import express from 'express';
import mongoose from 'mongoose';
import Planet from "./model/Planet.js";

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://galaxy:12345@galaxycluscter.lytezua.mongodb.net/')


app.get('/api/planets', async (req, res) => {
  try {
    const planets = await Planet.find({});
    console.log(planets);
    res.send(planets)
  } catch {
    res.status(400).json({ status: false })
  }
})

app.listen(5000, () => {
  console.log('http://localhost:5000');
})
