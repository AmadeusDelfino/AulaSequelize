module.exports = (sequelize, DataType) => {
    let Products = sequelize.define('products', {
        name: DataType.STRING,
        price: DataType.DECIMAL,
        createdAt: DataType.DATE,
        updatedAt: DataType.DATE,
    })

    Products.associate = (models) => {
        Products.belongsToMany(models.carts, {
            foreignKey: 'productId',
            as: 'carts',
            through: 'cart_product'
        })
    }
    return Products
}