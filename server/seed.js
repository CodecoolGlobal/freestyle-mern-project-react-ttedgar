import Planet from "./model/Planet.js";
import Person from "./model/Person.js";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://galaxy:12345@galaxycluscter.lytezua.mongodb.net/')

async function fetchDataFromDatabase(url) {
  let allData = [];
  while (true) {
    const response = await fetch(url);
    const data = await response.json();
    allData = [...allData, ...data.results];
    url = data.next;
    if (!data.next) {
      break
    }
  }
  console.log(allData);
  return allData;
}

async function uploadDatabase() {
  const planetsFromDatabase = await fetchDataFromDatabase("https://swapi.dev/api/planets")
  planetsFromDatabase.forEach(async planetData => {
    const planet = await Planet.create({
      name: planetData.name,
      climate: planetData.climate,
      terrain: planetData.terrain,
      gravity: planetData.gravity,
      population: planetData.population,
      residents: planetData.residents,
      imageURL: null
    })
  })

  const peopleFromDatabase = await fetchDataFromDatabase("https://swapi.dev/api/people")
  peopleFromDatabase.forEach(async peopleData => {
    const person = await Person.create({
      name: peopleData.name,
      starships: peopleData.starships,
      homeworld: peopleData.homeworld,
      imageURL: null
    })
  })
}


uploadDatabase();