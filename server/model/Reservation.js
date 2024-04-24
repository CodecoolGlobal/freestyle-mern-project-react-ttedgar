import {Schema, model} from "mongoose";

const reservationModel = new Schema({
  tripDetails: {
    planet: String,
    guide: String,
    ship: String,
    arrival: Date,
    departure: Date
  },
  personalInfo: { 
    firstName: String, 
    lastName: String, 
    email: String, 
    passport: String 
  },
  creditcardInfo: {
    ccName: String,
    ccNumber: String,
    ccExpiration: String,
    cvv: String
  }
})

export default model('Reservation', reservationModel);
