
import NavButton from "./NavButton"


function NavBar() {
  return <div className="navbar">
    <NavButton text="Home" pageLink="http://localhost:5173/" />
    <NavButton text="Destinations" pageLink="http://localhost:5173/destinations" />
    <NavButton text="About us" pageLink="http://localhost:5173/aboutus" />
    <NavButton text="Contact" pageLink="http://localhost:5173/contact" />
    <NavButton text="Tour guides" pageLink="http://localhost:5173/tourguide" />
    <NavButton text="Starships" pageLink="http://localhost:5173/starships" />
    <NavButton text="Admin" pageLink="http://localhost:5173/admin" id="adminBtn" />
    <NavButton text="Starmap minigame" pageLink="http://localhost:5173/starmap" id="adminBtn" />
  </div>
}

export default NavBar