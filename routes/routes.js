const express = require('express');
const router = express.Router();
const carsCrud = require('./crud_api')
const carsSearch = require('./search_api')

router.get('/', (req, res) =>{
    res.send("Bienvenue")
})

//Routes CRUD
router.post('/addCar', carsCrud.addCar);
router.get('/cars', carsCrud.getCars);
router.get('/cars/:id', carsCrud.getCarById);
router.put('/cars/:id', carsCrud.updateCar);
router.delete('/cars/:id', carsCrud.deleteCar);

//Routes de recherches simples
router.get('/carsByBrand', carsSearch.findCarsByBrandRoute);
router.get("/carsByModel", carsSearch.findCarsByModelRoute);
router.get("/carsByYear", carsSearch.findCarsByYearRoute);
router.get("/carsByState", carsSearch.findCarsByStateRoute);
router.get("/carsByMileage", carsSearch.findCarsByMileageRoute);
router.get("/carsByPrice", carsSearch.findCarsByPriceRoute);
router.get("/carsByColor", carsSearch.findCarsByColorRoute);
router.get("/CarsByTitleStatus", carsSearch.findCarsByStateRoute);

// Routes d'agrégation
router.get('/averagePriceByYear', carsSearch.averagePriceByYearRoute);
router.get('/carsCountByBrand', carsSearch.carsCountByBrandRoute);
router.get('/carsSortedByMileage', carsSearch.carsSortedByMileageRoute);
router.get('/distinctYears', carsSearch.distinctYearsRoute);
router.get('/totalPricesByBrand', carsSearch.totalPricesByBrandRoute);
router.get('/averageAndTotalPriceByYear', carsSearch.averageAndTotalPriceByYearRoute);


module.exports = router;