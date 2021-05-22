import React from 'react'
import { NavLink } from "react-router-dom";




function BrandForm({ handleSubmit, handleChange, cancelPath}) {
  return (
    <form onClick={handleSubmit}>
      <label>Title: </label>
      <input
        placeholder="name of brand"
        name="title"
        onChange={handleChange}
      />

      <label>Country of Origin: </label>
      <input
        placeholder="origin of car brand"
        name="country_of_origin"
        onChange={handleChange}
      />

      <label>Website: </label>  
      <input
        placeholder="ex: http://brandlink.com"
        name="website_link"
        onChange={handleChange}
      />

      <NavLink to={cancelPath}>
        <button>Cancel</button>
      </NavLink>
     <input type="submit" />
    </form>
  )
}

export default BrandForm
