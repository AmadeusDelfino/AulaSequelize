module.exports = (sequelize, DataType) => {
    let Carts = sequelize.define('carts', {
        userId: DataType.INTEGER,
        createdAt: DataType.DATE,
        updatedAt: DataType.DATE,
    })

    Carts.associate = (models) => {
        Carts.belongsToMany(models.products, {
            foreignKey: 'cartId',
            as: 'products',
            through: 'cart_product'
        })

        Carts.belongsTo(models.users, {
            foreignKey: 'userId',
            as: 'user'
        })
    }
    return Carts
}