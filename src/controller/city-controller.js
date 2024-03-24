const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            messgae: "successfully created a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            messgae: "failed to create a city",
            err: error
        });
    }
}

// Delete -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            messgae: "successfully deleted a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            messgae: "failed to delete a city",
            err: error
        });
    }
}

// Put -> /city/:id =>> req.body
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            messgae: "successfully created a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            messgae: "failed to create a city",
            err: error
        });
    }
}

// Get -> /city/:id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            messgae: "successfully created a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            messgae: "failed to get the city",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            messgae: "successfully listed all the city",
            err: {}
        
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            messgae: "failed to get the city",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}