import mongoose, {Schema, model} from "mongoose";

const planetSchema = new Schema({
  name: String,
  climate: String,
  terrain: String,
  gravity: String,
  population: String,
  residents: Array,
  imageURL: String
})

export default model('Planet', planetSchema);
