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
    await fetch("/api/planets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlanet)
    })
  }

  return <div>
    <h2>Add new destination</h2>
    <form onSubmit={handleSubmit}>
      <div><input placeholder="name" onChange={event => setName(event.target.value)}></input></div>
      <div><input placeholder="climate" onChange={event => setClimate(event.target.value)}></input></div>
      <div><input placeholder="tererain" onChange={event => setTererain(event.target.value)}></input></div>
      <div><input placeholder="gravity" onChange={event => setGravity(event.target.value)}></input></div>
      <div><input placeholder="population" onChange={event => setPopulation(event.target.value)}></input></div>
      <div><input placeholder="residents" onChange={event => setResidents(event.target.value)}></input></div>
      <div><input placeholder="imageURL" onChange={event => setImageURL(event.target.value)}></input></div>
      <div><button type="submit">Submit</button></div>
    </form>
  </div>
}

export default NewPlanetForm;