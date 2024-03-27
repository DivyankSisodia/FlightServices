const { ClientErrors } = require('../utils/error-codes')

const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirport ||
        !req.body.arrivalAirport ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ) {
        // if any of the body params is missing then we will show an error
        return res.status(ClientErrors.BAD_REQUEST).json({
            message: 'missing required field',
            data: {},
            success: false,
            err: 'missing mandatory fields'
        })
    }
    next();
}

module.exports = {
    validateCreateFlight
}