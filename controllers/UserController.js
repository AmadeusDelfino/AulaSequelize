const {users} = require('../models')

module.exports = {
    getAllUsers: async (request, response) => {
        response.end(
            JSON.stringify(await users.findAll({
                include: [
                    'tasks',
                    'configuration',
                    'cart',
                ],

            }))
        )
    },
    createUser: async (request, response) => {
        const userCreated = await users.create(request.body)

        return response.end(JSON.stringify(userCreated))
    },
    updateUser: async (request, response) => {
        await users.update(request.body, {
            where: {
                id: request.params.id
            }
        })

        return response.end()
    },
    deleteUser: async (request, response) => {
        users.destroy({
            where: {
                id: request.params.id
            }
        })

        response.end()
    }
}