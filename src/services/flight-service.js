const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: 'Arrival time should be greater than departure time' };
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log(error);
            throw { error };
        }
    }

    async getAllFlightData(data) {
        try {
            const flight = await this.flightRepository.getAllFlight(data);
            return flight
        } catch (error) {
            console.log(error);
            throw { error };
        }
    }

    async getFlight(id){
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (error) {
            console.log(error);
            throw { error };
        }
    }

}

module.exports = FlightService;