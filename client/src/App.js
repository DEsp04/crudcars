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
      <Route exact path="/cars/:id" component={Car} />
      <Route exact path="/add-model" component={createCarModel} />
      <Route exact path="/create-brand" component={createCarBrand} />
      <Route exact path="/carBrand" component={CarBrands} />
      <Route exact path="/items/:id/edit" component={EditCar} />
      <Route exact path="/carModels/:id/carBrands" component={CarBrand} />
    </div>
  );
}

export default App;
