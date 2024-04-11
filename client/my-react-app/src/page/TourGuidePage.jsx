import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';


function TourGuidePage() {
  const params = useParams();
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    async function fetchGuide() {
      const response = await fetch(`/api/tourguide/${params.name}`);
      const data = await response.json();
      setGuide(data);
      console.log(data);
    }

    fetchGuide();
  }, [params.name])

  return (
    <div>
      {guide 
      ? <>
      <h1>{guide.name}</h1>
      <h2>Homeworld:</h2>
      <a href={`/destinations/${guide.homeworld.name}`}>{guide.homeworld.name}</a>
      <h2>Starships:</h2>
      {guide.starships.map((starship) => (
        <><h4>{starship.name}</h4></>
      ))}
      </> 
      : <Loading/>}
    </div>
  )
}

export default TourGuidePage