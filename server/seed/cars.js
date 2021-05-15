const db = require("../db");
const CarBrand = require("../models/carBrand");
const CarModel = require("../models/carModel");




db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
  
  const carBrand1 = await new CarBrand(
    {
      title: "Fiat",
      country_of_origin: "Italy",
      website_link: "https://www.fiatusa.com/"
    }
  );
  carBrand1.save();

  const carBrand2 = await new CarBrand({
    title: "Nissan",
    country_of_origin: "Japan",
    website_link: "https://www.nissanusa.com/",
  });
  carBrand2.save();

  const carBrand3 = await new CarBrand({
    title: "Subaru",
    country_of_origin: "Japan",
    website_link: "https://www.subaru.com/",
  });
  carBrand3.save();

  const carBrand4 = await new CarBrand({
    title: "Mini",
    country_of_origin: "United Kingdom",
    website_link: "https://www.miniusa.com/",
  });
  carBrand4.save();

  const carBrand5 = await new CarBrand({
    title: "Dodge",
    country_of_origin: "United States",
    website_link: "https://www.dodge.com/",
  });
  carBrand5.save();

  const carBrand6 = await new CarBrand({
    title: "Chevrolet",
    country_of_origin: "United States",
    website_link: "https://www.chevrolet.com/",
  });
  carBrand6.save();

  const carBrand7 = await new CarBrand({
    title: "Volkswagen",
    country_of_origin: "German",
    website_link: "https://www.vw.com/en.html",
  });
  carBrand7.save();

  const carBrand8 = await new CarBrand({
    title: "Toyota",
    country_of_origin: "Japan",
    website_link: "https://www.toyota.com/",
  });
  carBrand8.save();

  const carBrand9 = await new CarBrand({
    title: "Kia",
    country_of_origin: "South Korea",
    website_link: "https://www.kia.com/us/en",
  });
  carBrand9.save();

  const carBrand10 = await new CarBrand({
    title: "Hyundai",
    country_of_origin: "South Korea",
    website_link: "https://www.hyundaiusa.com/us/en",
  });
  carBrand10.save();


  const carBrand11 = await new CarBrand({
    title: "Honda",
    country_of_origin: "Japan",
    website_link: "https://www.honda.com/",
  });
  carBrand11.save();

  const carBrand12 = await new CarBrand({
    title: "Mazda",
    country_of_origin: "Japan",
    website_link: "https://www.mazdausa.com/",
  });
  carBrand12.save();

 }
