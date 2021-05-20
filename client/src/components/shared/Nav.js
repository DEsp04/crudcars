import {NavLink} from "react-router-dom"

function Nav() {
  return (
    <nav>
      <NavLink to="/">Homes</NavLink>
      <NavLink to="car-brands">Car Brands</NavLink>
      <NavLink to="/add-car-brand-or-model">Add a Car Brand or Model</NavLink>
    </nav>
  )
}

export default Nav
