import axios from "axios";


let modelUrl = 'https://carinfosection.herokuapp.com/api/carModels';

let brandUrl = 'https://carinfosection.herokuapp.com/api/carBrands';



export const getCarModels = async () => {
  
  const results = await axios.get(modelUrl).then(({ data }) => {
    return data.brands
  })

  console.log(results);

  return results;
}


