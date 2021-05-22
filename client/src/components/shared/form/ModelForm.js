import React from 'react';
import { NavLink } from "react-router-dom";
import { getCarBrands } from "../../../services/api-helper";
import { useState, useEffect } from "react";


function ModelForm() {
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
    <form >
      <label>Model Name: </label>
      <input placeholder="car model" name="model_name" />
      <label>Model Type: </label>
      <input placeholder="model type" name="type_of_car" />
      <label>Model Image:</label>
      <input
        placeholder="http://modelimage.com"
        name="car_image"
        
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


      <NavLink >
        <button>Cancel</button>
      </NavLink>
      <input type="submit" />
    </form>
  );
};

export default ModelForm
