import React from 'react';
import Layout from "../../shared/Layout";
import ModelForm from "../../shared/form/ModelForm";
import { modelUrl } from "../../../services/api-helper";
import axios from "axios";
import { useState, useEffect } from "react";

function EditCarModel(props) {
  const [carModel, setCarModel] = useState({
    "model_name": "",
    "type_of_car": "",
    "car_image": "",
    "car_brand": ""
  })


  const fetchModel = async () => {
    const res = await axios.get(`${modelUrl}/${props.match.params.id}`).then(({ data }) => {
      return data
    });

    setCarModel(res.car)
  };

  useEffect(() => {
    fetchModel();
  }, [])


  const handleChange = (e) => {
    const editField = { [e.target.name]: e.target.value };
    const edit_model = Object.assign(carModel, editField);

    // console.log(edit_brand)

    setCarModel(edit_model);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      url: `${modelUrl}/${props.match.params.id}`,
      method: "POST",
      data: carModel,
    }).then((res) => console.log(res)).catch(console.error)
  }





  return (
    <Layout>
      <h3>Car Model Edit</h3>
      <ModelForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cancel={`/car-brands/${carModel._id}/car-models/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default EditCarModel
