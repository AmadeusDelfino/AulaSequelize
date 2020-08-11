module.exports = (sequelize, DataType) => {
    let Tasks = sequelize.define('tasks', {
        task: DataType.STRING,
        userId: DataType.INTEGER,
        createdAt: DataType.DATE,
        updatedAt: DataType.DATE,
    })

    Tasks.associate = (models) => {
        Tasks.belongsTo(models.users, {
            foreignKey: 'userId', as: 'user'
        })
    }
    return Tasks
}


// const {users} = require('../models')
//
// module.exports = (sequelize, DataTypes) => {
//     let Tasks = sequelize.define('tasks', {
//         task: DataTypes.STRING,
//         userId: DataTypes.INTEGER,
//         createdAt: DataTypes.DATE,
//         updatedAt: DataTypes.DATE,
//     })
//
//     Tasks.associate = (models) => {
//         Tasks.belongsTo(
//             models.users,
//             {foreignKey: 'userId', as: 'user'}
//         )
//     }
//
//     return Tasks
// }