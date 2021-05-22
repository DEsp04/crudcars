const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");


router.get("/", (req, res) => res.send("This is root!"));


router.post("/carBrands", controllers.createCarBrand);

router.get("/carBrands", controllers.getAllCarBrands);

router.get("/carBrands/:id", controllers.getCarBrandById);

router.post("/carBrands/:id", controllers.updateCarBrand);

router.delete("/carBrands/:id", controllers.deleteCarBrand);


router.get("/carModels/:id/carBrands", controllers.getCarsByBrand)


router.post("/carModels", controllers.createCar);

router.get("/carModels", controllers.getAllCars);

router.get("/carModels/:id", controllers.getCarById);

router.post("/carModels/:id", controllers.updateCar);

router.delete("/carModels/:id", controllers.deleteCar);

module.exports = router;