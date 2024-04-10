import  { useState } from "react"


function NewPlanetForm() {
  const [name, setName] = useState(null)
  const [climate, setClimate] = useState(null)
  const [tererain, setTererain] = useState(null)
  const [gravity, setGravity] = useState(null)
  const [population, setPopulation] = useState(null)
  const [residents, setResidents] = useState(null)
  const [imageURL, setImageURL] = useState(null)

  async function handleSubmit() {
    const newPlanet = {
      name,
      climate,
      tererain,
      gravity,
      population,
      residents,
      imageURL,
    }
    await fetch("/api/planet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlanet)
    })
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input placeholder="name" onChange={event => setName(event.target.value)}></input>
      <input placeholder="climate" onChange={event => setClimate(event.target.value)}></input>
      <input placeholder="tererain" onChange={event => setTererain(event.target.value)}></input>
      <input placeholder="gravity" onChange={event => setGravity(event.target.value)}></input>
      <input placeholder="population" onChange={event => setPopulation(event.target.value)}></input>
      <input placeholder="residents" onChange={event => setResidents(event.target.value)}></input>
      <input placeholder="imageURL" onChange={event => setImageURL(event.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  </div>
}

export default NewPlanetForm;