import './App.css';
import { Route, withRouter } from "react-router-dom";
import Car from "./components/routes/CarBrand";
import createCarModel from "./components/routes/CreateCarModel";
import createCarBrand from "./components/routes/CreateCarBrand";
import Home from "./components/routes/Home";
import EditCar from "./components/routes/edit/EditCarModel";
import CarBrands from "./components/routes/CarBrands";
import CarBrand from "./components/routes/CarBrand";




function App(props) {
  return (
    <div className="App">
      <h3></h3>
      <Route exact path="/" component={Home} />
      <Route exact path="/car-Brands" component={CarBrands} />

      <Route exact path="/add-car-brand-or-model" component={CarBrandOrModelCreate} />



      <Route exact path="/car-models/:id/edit-car-model" component={CarModeEdit} />
      <Route exact path="/car-brands/:id/edit-car-brand" component={CarBrandsEdit} />
      

      <Route exact path="/car-brands/:id/car-models" component={CarBrand} />
      <Route exact path="/car-brands/:id/car-models/:id" component={CarModel} />
      
    </div>
  );
}

export default withRouter(App);
