import React from 'react'
import Layout from "../shared/Layout"
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { brandUrl, modelUrl } from "../../services/api-helper"
import axios from "axios"


function CarBrand(props) {

  const [carBrand, setCarBrand] = useState({})
  const [carModelByBrand, setModelByBrand] = useState([])


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


  const fetchCarModelByBrand = async () => {
    console.log(carBrand)
    const res = await axios.get(`${modelUrl}/${carBrand._id}/carBrands`).then(({ data }) => {
      return data
    });
    console.log(res.cars)
    setModelByBrand(res.cars)
  }


  useEffect(() => {
    fetchCarModelByBrand();
  }, [carBrand])


  const getCars = carModelByBrand.map((cars) => (
    <li key={ cars._id}><NavLink to={`/car-brands/${carBrand._id}/car-models/${cars._id}`}> {cars.model_name}</NavLink></li>
  ))


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
      <NavLink to={`/car-brands/${carBrand._id}/edit-car-brand`}>
        <button>Edit</button>
      </NavLink>
      <ul>
        {getCars}
      </ul>
    </Layout>
  )
}

export default CarBrand
