const {tasks} = require('../models')
const Sequelize = require('sequelize')
const operators = Sequelize.Op

module.exports = {
    paginate: async (request, response) => {
        const page = request.query.page
        const limit = 8
        const offset = (page * limit) - limit
        const total = await tasks.count()
        const totalPages = total / limit

        response.end(
            JSON.stringify({
                data: await tasks.findAll({
                    limit: limit,
                    offset: offset
                }),
                totalPages: Math.ceil(totalPages),
                currentPage: page,
                perPage: limit
            })
        )
    },
    find: async (request, response) => {
        response.end(
            JSON.stringify(await tasks.findOne({
                where: {id: request.params.id}
            }))
        )
    },
    findMany: async(request, response) => {
        response.end(
            JSON.stringify(await tasks.findAll({
                where: {
                    id: {
                        [operators.in]: request.query.ids.split(',')
                    }
                }
            }))
        )
    },
    create: async (request, response) => {
        const taskCreated = await tasks.create({
            task: request.body.task,
            userId: request.body.userId,
        })

        response.end(JSON.stringify(taskCreated))
    },
    update: async (request, response) => {
        let params = request.body
        delete params.userId

        tasks.update(params, {
            where: {
                id: request.params.id
            }
        })

        response.end()
    },
    delete: async (request, response) => {
        tasks.destroy({
            where: {id: request.params.id}
        })

        response.end()
    },
    all: async (request, response) => {

        response.end(
            JSON.stringify(await tasks.findAll())
        )
    },
    search: async (request, response) => {
        response.end(
            JSON.stringify(await tasks.findAll({
                where: {
                    task: {
                        [operators.like]: '%' + request.query.search + '%'
                    }
                }
            }))
        )
    }
}