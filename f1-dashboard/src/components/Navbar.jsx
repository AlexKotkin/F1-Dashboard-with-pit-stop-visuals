import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Driver Standings</NavLink>
      <NavLink to="/constructors">Constructors</NavLink>
      <NavLink to="/pitstops">Pit Stops</NavLink>
      <NavLink to="/DriverPoints">Driver Points Visual</NavLink>
    </nav>
  )
}

export default Navbar