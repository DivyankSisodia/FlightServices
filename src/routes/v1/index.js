const express = require('express');
const CityControllers = require('../../controller/city-controller');
const FlightController = require('../../controller/flight-controller');
const AirportController = require('../../controller/airport-controller');

const {FlightMiddlewares} = require('../../middleware/index');

const router = express.Router();

router.post('/city', CityControllers.create);
router.delete('/city/:id', CityControllers.destroy);
router.get('/city/:id', CityControllers.get);
router.patch('/city/:id', CityControllers.update);
router.get('/city', CityControllers.getAll);

router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);

router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);
router.get('/airports', AirportController.getAll);
module.exports = router;