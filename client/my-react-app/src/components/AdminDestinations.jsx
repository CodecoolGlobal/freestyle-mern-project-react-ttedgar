import { useState, useEffect } from 'react'

function AdminDestinations() {
  const [planetList, setPlanetList] = useState(null);

  useEffect(() => {
    async function fetchDestinations(url) {
      const response = await fetch(url);
      const data = await response.json();
      setPlanetList(data)
      console.log(data);
    }
  
    fetchDestinations('/api/planets');
  }, [])

  if (planetList) {
    return planetList.map((planet) => (
      <div key={planet['_id']}>
        <h2>{planet.name}</h2>
        <h3>{planet.climate}</h3>
        <h3>{planet.terrain}</h3>
        <h3>{planet.gravity}</h3>
        <h3>{planet.population}</h3>
        <h3>Residents:</h3>
        <>{planet.residents.map((resident, index) => (
          <div key={index}><h5>{resident.name}</h5></div>
        ))}</>
        <img src={planet.imgURL}></img>
      </div>
    ))
  }
  return (
    <div>
      <h1>Loading...</h1>

    </div>
  )
}

export default AdminDestinations