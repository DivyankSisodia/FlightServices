const express = require('express');
const CityControllers = require('../../controller/city-controller');
const FlightController = require('../../controller/flight-controller');

const router = express.Router();

router.post('/city', CityControllers.create);
router.delete('/city/:id', CityControllers.destroy);
router.get('/city/:id', CityControllers.get);
router.patch('/city/:id', CityControllers.update);
router.get('/city', CityControllers.getAll);

router.post('/flights', FlightController.create);

module.exports = router;