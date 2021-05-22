import React from 'react';
import Layout from "../../shared/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import BrandForm from "../../shared/form/BrandForm";
import { brandUrl } from "../../../services/api-helper";




function EditCarBrand(props) {
  const [editBrand, setEditBrand] = useState(
    {
      title: "",
      country_of_origin: "",
      website_link: "",
    }
  );



  console.log(props.match.params.id)


  const fetchBrand = async () => {
    const url = `${brandUrl}/${props.match.params.id}`;
    const res = await axios.get(url).then(({ data }) => {
      return data;
    });
    setEditBrand(res.brand)
  }



  useEffect(() => {
    fetchBrand();
  }, [])

 

  const handleChange = (e) => {
    const editField = { [e.target.name]: e.target.value };
    const edit_brand = Object.assign(editBrand, editField);

    console.log(edit_brand)

    setEditBrand(edit_brand)
  }

  console.log(editBrand)

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
      url: `${brandUrl}/${props.match.params.id}`,
      method: "POST",
      data: editBrand,
    }).then((res) => console.log(res)).catch(console.error);
  }

  return (
    <Layout>
      <BrandForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/car-brands/${props.match.params.id}/car-models`}
      />
    </Layout>
  )
}

export default EditCarBrand
