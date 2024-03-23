const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (err) {
            throw { err }
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId,
                }
            });
            return true;
        }
        catch (err) {
            throw { err }
        }
    }

    async updateCity(cityId, data) {
        try {
            await City.update(data, {
                where: {
                    id: cityId,
                }
            });
            return true;
        }
        catch (err) {
            throw { err }
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = CityRepository;