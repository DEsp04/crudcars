import { useState, useEffect } from "react";
import Layout from "../shared/Layout"
import { NavLink } from "react-router-dom";
import axios from "axios";
import {getCarBrands} from "../../services/api-helper"




function CarBrands() {


  const [carBrands, setBrands] = useState([]);

  const fetchCarBrands = async () => {
    const res = await getCarBrands();
    console.log(res.brands)
    setBrands(res.brands)
  }

  useEffect( () => {
      fetchCarBrands()
    }, [])

  
  const showCarBrands = carBrands.map((brand) => (
    <li>
      <NavLink to={`/car-brands/${brand._id}/car-models`} >{ brand.title}</NavLink>
    </li>
  ))
  

  return (
    <Layout>
      <h4>Show Car Brand</h4>
      <ul>
        {showCarBrands}
      </ul>
    </Layout>
  )
}

export default CarBrands


