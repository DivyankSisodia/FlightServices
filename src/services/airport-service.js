const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index')

class AirportService extends CrudService {
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
    // async getAllAirport(){
    //     try {
    //         const result = await this.repository.getAllAirport();
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

module.exports = AirportService;


