import NewPlanetForm from '../components/NewPlanetfForm'
import AdminDestinations from '../components/AdminDestinations'
import PlanetFilter from '../components/PlanetFilter'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function AdminPage() {
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

  return (
    <>
      {planetList ? (
        <div className='container'>
          <NewPlanetForm />
          <PlanetFilter />
          <AdminDestinations planetList={planetList} />
        </div>) :
        (<Loading />)
      }
    </>
  )
}

export default AdminPage