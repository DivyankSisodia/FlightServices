const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully created an airport",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'cannot create airport',
            err: error,
            data: {},
            success: false
        });
    }
}
const getAll = async (req, res) => {
    try {
        const response = await airportService.getAll();
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully created an airport",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'cannot create airport',
            err: error,
            data: {},
            success: false
        });
    }
}

module.exports = {
    create,
    getAll
}