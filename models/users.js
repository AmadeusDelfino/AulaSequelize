const {tasks} = require('../models')

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })

    Users.associate = (models) => {
        Users.hasOne(models.configurations, {
            as: 'configuration', foreignKey: 'userId'
        })

        Users.hasMany(models.tasks, {
            foreignKey: 'userId', as: 'tasks'
        })

        Users.hasOne(models.carts, {
            foreignKey: 'userId', as: 'cart'
        })
    }


    // Users.associate = (models) => {
    //     Users.hasMany(
    //         models.tasks,
    //         {as: 'tasks'}
    //     )
    // }

    return Users
}