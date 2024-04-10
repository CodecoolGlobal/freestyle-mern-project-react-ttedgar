import NewPlanetForm from './NewPlanetfForm'
import AdminDestinations from './AdminDestinations'
import NavBar from './NavBar'

function Admin() {
  return (

    <div>
      <NavBar/>
      <h1>Admin page</h1>
      <div><NewPlanetForm/></div>
      <div><AdminDestinations/></div>
    </div>
  )
}

export default Admin