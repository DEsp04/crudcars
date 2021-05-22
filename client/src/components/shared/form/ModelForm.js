import React from 'react';
import { NavLink } from "react-router-dom";
import { getCarBrands } from "../../../services/api-helper";
import { useState, useEffect } from "react";


function ModelForm( {handleChange, handleSubmit, cancelPath}) {
  const [brands, setBrands] = useState([]);

  const fetchAllBrands = async () => {
    const data = await getCarBrands();
    console.log(data.brands)
    setBrands(data.brands)
  }

  useEffect(() => {
    fetchAllBrands()
  }, [])


  const listBrands = brands.map((brand) => (
    <option value={brand._id}>
      {brand.title}
    </option>
  ))

  console.log(listBrands)

  return (
    <form onClick={handleSubmit}>
      <label>Model Name: </label>
      <input placeholder="car model" name="model_name" onChange={handleChange} />
      <label>Model Type: </label>
      <input placeholder="model type" name="type_of_car" onChange={handleChange} />
      <label>Model Image:</label>
      <input
        placeholder="http://modelimage.com"
        name="car_image"
        onChange={handleChange}
      />
      <select
        name="car_brand"
        type="text"
        placeholder="Car Brand"
        
      >
        <option disabled selected>
          Car Brand
        </option>
        {listBrands}
      </select>


      <NavLink to={cancelPath}>
        <button>Cancel</button>
      </NavLink>
      <input type="submit" />
    </form>
  );
};

export default ModelForm
