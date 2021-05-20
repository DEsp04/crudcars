import React from 'react';
import {NavLink} from "react-router-dom"

function Nav() {
  return (
    <nav>
      <NavLink>Brands</NavLink>
      <NavLink>Add a Brand</NavLink>
      <NavLink> Add a Car</NavLink>
    </nav>
  )
}

export default Nav
