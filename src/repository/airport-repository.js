const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository {

    constructor() {
        console.log('Airport', Airport);
        super(Airport);
    }
    // async getAllAirport(){
    //     try {
    //         const result = await Airport.findAll();
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

module.exports = AirportRepository;