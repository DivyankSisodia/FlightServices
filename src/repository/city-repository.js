const { Op } = require('sequelize');

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
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
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

    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = CityRepository;