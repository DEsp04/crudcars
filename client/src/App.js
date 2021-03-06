import './App.css';
import { Route, withRouter } from "react-router-dom";
import CarModelEdit from "./components/routes/edit/EditCarModel"
import CarBrandEdit from "./components/routes/edit/EditCarBrand"
import Home from "./components/routes/Home";
import CarBrandOrModelCreate  from "./components/routes/create/ModelOrBrandCreate"
import CarBrands from "./components/routes/CarBrands";
import CarBrand from "./components/routes/CarBrand";
import CarModel from "./components/routes/CarModel"




function App() {
  return (
    <div className="App">
      <h3></h3>
      <Route exact path="/" component={Home} />
      
      <Route exact path="/car-Brands" component={CarBrands} />

      <Route exact path="/add-car-brand-or-model" component={CarBrandOrModelCreate} />

      <Route exact path="/car-brands/:id/car-models/:id/edit-car-model" component={CarModelEdit} />
      
      <Route exact path="/car-brands/:id/edit-car-brand" component={CarBrandEdit} />
      
      <Route exact path="/car-brands/:id/car-models" component={CarBrand} />
      
      <Route exact path="/car-brands/:id/car-models/:id" component={CarModel} />
      
    </div>
  );
}

export default withRouter(App);
