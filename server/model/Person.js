import { Schema, model } from "mongoose";

const personSchema = new Schema({
  name: String,
  starships: [String],
  homeworld: String,
  imageUrl: String
})

export default model('Person', personSchema);