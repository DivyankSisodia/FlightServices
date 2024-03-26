const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            messgae: "successfully created a flight",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            messgae: "unable to create a flight",
            err: error
        });
    }
}


const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            messgae: "successfully fetched a flight",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            messgae: "unable to create a flight",
            err: error
        });
    }
}
module.exports = {
    create,
    getAll
}