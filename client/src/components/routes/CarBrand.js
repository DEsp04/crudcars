import React from 'react'
import Layout from "../shared/Layout"
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import {brandUrl} from "../../services/api-helper"
import axios from "axios"


function CarBrand(props) {

  const [carBrand, setCarBrand] = useState({})


  const fetchCarBrand = async () => {
    const res = await axios.get(`${brandUrl}/${props.match.params.id}`).then(({ data }) => {
      return data
    });

    console.log(res.brand)
    setCarBrand(res.brand)
  };

  useEffect(() => {
    fetchCarBrand();
  }, [])




  return (
    <Layout>
      <h4>{carBrand.title}</h4>
      <h5>Coutry of Origin: { carBrand.country_of_origin}</h5>
      <a href={carBrand.website_link}
       target="_blank"
       rel="noreferrer">
      <button>Website</button>
      </a>
      <NavLink to="/car-Brands">
        <button>Return to Car Brands</button>
      </NavLink>
    </Layout>
  )
}

export default CarBrand
