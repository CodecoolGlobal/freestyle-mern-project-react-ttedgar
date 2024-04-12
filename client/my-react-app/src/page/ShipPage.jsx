import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';

function ShipPage() {
  const params = useParams();
  const [ship, setShip] = useState(null);
  
  useEffect(() => {
    async function fetchShip() {
      const response = await fetch(`/api/starships/${params.name}`)
      const data = await response.json();
      setShip(data);
    }

    fetchShip();
    
  }, [params.name])

  return (
    <div>
      {ship 
      ? <div>
        <h1>{ship.name}</h1>
        <h2>Model: {ship.model}</h2>
        <h2>Manufacturer: {ship.manufacturer}</h2>
        <h2>Maximum speed: {ship['max_atmosphering_speed']}</h2>
        <h2>Passengers: {ship.passengers}</h2>
        <h2>Pilots: </h2>
        {ship.pilots.map((pilot, index) => (
          <div key={index}><a href={`/tourguide/${pilot.name}`}>{pilot.name}</a></div>
        ))}
      </div>
      : <Loading/>}
    </div>
  )
}

export default ShipPage