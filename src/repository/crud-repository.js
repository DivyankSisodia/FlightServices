class CrudRepository {
    constructor(model) {
        console.log('model', model)
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async destroy(modelId) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log('Something went wrong in repository')
            throw error;
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log('Something went wrong in repository')
            throw error;
        }
    }

    async getAll() {
        try {
            console.log('this', this)
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log('Something went wrong in repository')
            throw error;
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            })
            return result;
        } catch (error) {
            console.log('Something went wrong in repository')
            throw error;
        }
    }
}

module.exports = CrudRepository;