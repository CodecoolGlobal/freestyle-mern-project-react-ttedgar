import { Schema, model } from "mongoose";

const personSchema = new Schema({
  name: String,
  starships: [Object],
  homeworld: Object,
  imageUrl: String,
  id: Number
})

export default model('Person', personSchema);