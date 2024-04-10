import {Schema, model} from "mongoose";

const planetSchema = new Schema({
  name: String,
  climate: String,
  terrain: String,
  gravity: String,
  population: String,
  residents: [Object],
  imageURL: String
})

export default model('Planet', planetSchema);
