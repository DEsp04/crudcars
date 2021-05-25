import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import BrandForm from "../../shared/form/BrandForm";
import { brandUrl } from "../../../services/api-helper";


function CreateBrand(props) {
  const [newlyCreated, setNewlyCreated] = useState(null)

  const [carBrand, setCarBrand] = useState({
    title: "",
    country_of_origin: "",
    website_link: ""
  })

  const handleChange = (e) => {
    const editField = { [e.target.name]: e.target.value };
    const createBrand = Object.assign(brand, editField);
    setCarBrand(createBrand)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      url: `${brandUrl}`,
      method: "POST",
      data: carBrand
    }).then((res) => setNewlyCreated(res.data.brand)).catch(console.error)
  }


  if (newlyCreated) {
    return <Redirect to={`/`} />;
  }


  return (
    <div>
      <BrandForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={"/"}
      />
    </div>
  )
}

export default CreateBrand
