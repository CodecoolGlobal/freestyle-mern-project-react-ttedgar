
import NavButton from "./NavButton"


function NavBar() {
  return <div>
    <NavButton text="Home" pageLink="http://localhost:5173/" />
    <NavButton text="Destinations" pageLink="http://localhost:5173/destinations" />
    <NavButton text="About us" pageLink="http://localhost:5173/aboutus" />
    <NavButton text="Contact" pageLink="http://localhost:5173/contact" />
    <NavButton text="Tour guide" pageLink="http://localhost:5173/tourguide" />
    <NavButton text="Admin page" pageLink="http://localhost:5173/admin" />
  </div>
}

export default NavBar