import Planet from "./model/Planet.js";
import Person from "./model/Person.js";
import mongoose from "mongoose";
import Ship from "./model/Ship.js";

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

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function uploadDatabase() {
  // const planetsFromDatabase = await fetchDataFromDatabase("https://swapi.dev/api/planets")
  // for (const planet of planetsFromDatabase) {
  //   const residents = [];
  //   for (const residentURL of planet.residents) {
  //     residents.push(await fetchData(residentURL))
  //   }
  //   const dbplanet = await Planet.create({
  //     name: planet.name,
  //     climate: planet.climate,
  //     terrain: planet.terrain,
  //     gravity: planet.gravity,
  //     population: planet.population,
  //     residents: residents,
  //     imageURL: null
  //   })
  // }

  // planetsFromDatabase.forEach(async planetData => {
  //   const residentObject = [];
  //   for (const resURL of planetData.residents) {
  //     residentObject.push(await fetchData(resURL))
  //   }
  // })

  // const peopleFromDatabase = await fetchDataFromDatabase("https://swapi.dev/api/people")
  // let peopleIndex = 0
  // for (const dbperson of peopleFromDatabase) {
  //   const starships = [];
  //   const homeworld = await fetchData(dbperson.homeworld)
  //   peopleIndex++
  //   for (const starshipURL of dbperson.starships) {
  //     starships.push(await fetchData(starshipURL))
  //   }
  //   const person = await Person.create({
  //     name: dbperson.name,
  //     starships: starships,
  //     homeworld: homeworld,
  //     id: peopleIndex,
  //     imageURL: null
  //   })
  // }

  const starshipsFromDatabase = await fetchDataFromDatabase("https://swapi.dev/api/starships")
  let shipIndex = 0
  for (const dbship of starshipsFromDatabase) {
    if (dbship.pilots.length) {
      const pilots = [];
      shipIndex++
      for (const pilotURL of dbship.pilots) {
        pilots.push(await fetchData(pilotURL))
      }
        const ship = await Ship.create({
          name: dbship.name,
          model: dbship.model,
          manufacturer: dbship.manufacturer,
          length: dbship['length'],
          max_atmosphering_speed: dbship['max_atmosphering_speed'],
          passengers: dbship.passengers,
          pilots: pilots,
          url: dbship.url,
          id: shipIndex
        })
    }
  }
}


uploadDatabase();