const {carts, products} = require('../models')

module.exports = {
    creteCart: async (request, response) => {
        let cart = await carts.findOne({
            where: {
                userId: request.body.userId
            }
        })
        // Caso o usuario ja tenha um carrinho criado, nao sera necessario criar outro
        if (cart !== null) {
            return response.end(JSON.stringify(cart))
        }

        cart = await carts.create({
            userId: request.body.userId
        })

        response.end(JSON.stringify(cart))
    },
    addProduct: async (request, response) => {
        const cartId = request.body.cartId
        const productId = request.body.productId
        const cart = await carts.findOne({
            where: {
                id: cartId
            }
        })
        const product = await products.findOne({
            where: {
                id: productId
            }
        })
        const result = await cart.addProduct(product)
        console.log(result)

        response.end()
    },
    all: async (request, response) => {
        response.end(
            JSON.stringify(
                await carts.findAll({
                    include: [
                        'products',
                        'user'
                    ]
                })
            )
        )
    }
}





