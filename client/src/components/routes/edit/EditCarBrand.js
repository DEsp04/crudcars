import React from 'react';
import Layout from "../../shared/Layout";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import BrandForm from "../../shared/form/BrandForm"



function EditCarBrand() {
  return (
    <Layout>
      <BrandForm />
    </Layout>
  )
}

export default EditCarBrand
