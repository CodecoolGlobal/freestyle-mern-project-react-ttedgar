import {Schema, model} from "mongoose";

const planetSchema = new Schema({
  name: String,
  climate: String,
  terrain: String,
  gravity: String,
  population: String,
  residents: [Object],
  imageUrl: String,
  price: Number
})

export default model('Planet', planetSchema);
