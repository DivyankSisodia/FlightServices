const { Flights } = require('../models/index');

class FlightRepository {
    async createFlight(data) {
        try {
            console.log(data);
            const flight = await Flights.create(data);
            console.log(flight);
            return flight;
        } catch (error) {
            console.log(error);
            throw Error(error);
        }
    }
}

module.exports = FlightRepository;