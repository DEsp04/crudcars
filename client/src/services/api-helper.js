import axios from "axios";


export const modelUrl = 'https://carinfosection.herokuapp.com/api/carModels';

export const brandUrl = 'https://carinfosection.herokuapp.com/api/carBrands';



export const getCarModels = async () => {
  
  const results = await axios.get(modelUrl).then(({ data }) => {
    return data.cars
  })

  console.log(results);

  return results;
}



export const getCarBrands = async () => {
  
  const results = await axios.get(brandUrl).then(({ data }) => {
    return data;
  })

  console.log(results);

  return results;
}


export const getCarBrand = async (id) => {
  
  const results = await axios.get(`brandUrl/${id}`).then(({ data }) => {
    return data;
  })

  console.log(results);

  return results;
}