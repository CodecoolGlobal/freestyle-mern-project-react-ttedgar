import NewPlanetForm from './NewPlanetfForm'
import AdminDestinations from './AdminDestinations'

function Admin() {
  return (
    <div>
      <h1>Admin page</h1>
      <div><NewPlanetForm/></div>
      <div><AdminDestinations/></div>
    </div>
  )
}

export default Admin