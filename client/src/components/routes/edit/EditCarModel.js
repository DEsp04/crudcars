import React from 'react';
import Layout from "../../shared/Layout";
import ModelForm from "../../shared/form/ModelForm";
import { modelUrl } from "../../../services/api-helper";
import axios from "axios";

function EditCarModel() {
  







  return (
    <Layout>
      <h3>Car Model Edit</h3>
      <ModelForm />
    </Layout>
  )
}

export default EditCarModel
