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

async function fetchResidents(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function uploadDatabase() {
  const planetsFromDatabase = await fetchDataFromDatabase("https://swapi.dev/api/planets")
  for (const planet of planetsFromDatabase) {
    const residents = [];
    for (const residentURL of planet.residents) {
      residents.push(await fetchResidents(residentURL))
    }
    const dbplanet = await Planet.create({
      name: planet.name,
      climate: planet.climate,
      terrain: planet.terrain,
      gravity: planet.gravity,
      population: planet.population,
      residents: residents,
      imageURL: null
    })
  }

  planetsFromDatabase.forEach(async planetData => {
    const residentObject = [];
    for (const resURL of planetData.residents) {
      residentObject.push(await fetchResidents(resURL))
    }
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