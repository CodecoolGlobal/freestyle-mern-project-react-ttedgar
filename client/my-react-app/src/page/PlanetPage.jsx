import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import Booking from '../components/Booking';

function PlanetPage() {
  const params = useParams();
  const [planet, setPlanet] = useState(null);

  
  useEffect(() => {
    async function fetchPlanet() {
      console.log(params.id);
      const response = await fetch(`/api/planets/${params.id}`)
      const data = await response.json();
      console.log(data);
      setPlanet(data);
    }

    fetchPlanet();
    
  }, [])

  return (
    <div>
      {planet 
      ? <div>
        <h1>{planet.name}</h1>
        <h2>Terrain: {planet.terrain}</h2>
        <h2>Climate: {planet.climate}</h2>
        <h2>Population: {planet.population}</h2>
        <h2>Gravity: {planet.gravity}</h2>
        <h2>Residents: </h2>
        {planet.residents.map((resident, index) => (
          <div key={index}><a href={`/tourguide/${resident.name}`}>{resident.name}</a></div>
        ))}
        <Booking/>
      </div>
      : <Loading/>}
    </div>
  )
}

export default PlanetPage