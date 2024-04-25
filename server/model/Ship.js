import { Schema, model } from "mongoose";

const shipSchema = new Schema({
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    passengers: String,
    pilots: [Object],
    imageUrl:String,
    url: String,
    id: Number,
    price: Number
})

export default model('Ship', shipSchema);
