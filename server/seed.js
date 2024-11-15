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
  return allData;
}

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function uploadDatabase() {
  const planetsFromDatabase = await fetchDataFromDatabase("https://swapi.py4e.com/api/planets")
  for (const planet of planetsFromDatabase) {
    if (planet.residents.length) {
      const residents = [];
      for (const residentURL of planet.residents) {
        residents.push(await fetchData(residentURL))
      }
      const dbplanet = await Planet.create({
        name: planet.name,
        climate: planet.climate,
        terrain: planet.terrain,
        gravity: planet.gravity,
        population: planet.population,
        residents: residents,
        imageURL: `${planet.name}.jpg`,
        price: Math.floor(100000 + (Math.random() * 100000))
      })
    }
  }

  planetsFromDatabase.forEach(async planetData => {
    const residentObject = [];
    for (const resURL of planetData.residents) {
      residentObject.push(await fetchData(resURL))
    }
  })

  const peopleFromDatabase = await fetchDataFromDatabase("https://swapi.py4e.com/api/people")
  let peopleIndex = 0
  for (const dbperson of peopleFromDatabase) {
    if (dbperson.starships.length) {
      const starships = [];
      const homeworld = await fetchData(dbperson.homeworld)
      peopleIndex++
      console.log(`${((dbperson.name.split(' '))[0]).toLowerCase()}.jpg`);
      for (const starshipURL of dbperson.starships) {
        starships.push(await fetchData(starshipURL))
      }
      const person = await Person.create({
        name: dbperson.name,
        starships: starships,
        homeworld: homeworld,
        imageUrl: `${((dbperson.name.split(' '))[0]).toLowerCase()}.jpg`,
        id: peopleIndex,
        price: Math.floor(10000 + (Math.random() * 10000))
      })
    }
  }

  const starshipsFromDatabase = await fetchDataFromDatabase("https://swapi.py4e.com/api/starships")
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
          imageUrl: `${((dbship.name.split(' '))[0]).toLowerCase()}.img`,
          id: shipIndex,
          price: Math.floor(500000 + (Math.random() * 500000))
        })
    }
  }
}


uploadDatabase();