import React from 'react';
import Layout from "../shared/Layout"
import { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import {modelUrl} from "../../services/api-helper"




function CarModel(props) {
  const [carModel, setCarModel] = useState({});
  const [deleteModel, setDeleteModel] = useState(false);

  const fetchCarModel = async () => {
    const res = await axios.get(`${modelUrl}/${props.match.params.id}`).then(({ data }) => {
      return data
    });

    console.log(res.car)
    setCarModel(res.car)
  };

  useEffect(() => {
    fetchCarModel();
  }, [])

  const deleted = async () => {
    await axios({
      url: `${modelUrl}/${props.match.params.id}`,
      method: "DELETE"
    }).then(() => {
      setDeleteModel(true);
    }).catch(console.error)
  }


  if (!carModel) {
      return <p>loading....</p>
  }

  if (deleteModel) {
    return (
      <Redirect to={{ pathname: "/", deleted: { msg: "Model is deleted!" } }} />
    );
  }


  return (
    <Layout>
      <h4>{carModel.model_name}</h4>
      <h5>{carModel.type_of_car}</h5>
      <img src={carModel.car_image} alt="" style={{ width: "80%" }} />
      
      <NavLink to={`/car-brands/${carModel.car_brand}/car-models/${carModel._id}/edit-car-model`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={deleted}>Delete</button>
      <NavLink to={`/car-brands/${carModel.car_brand}/car-models`}>
        <button>return</button>
      </NavLink>
    </Layout>
  )
}

export default CarModel
