module.exports = (sequelize, DataType) => {
    let Configurations = sequelize.define('configurations', {
        dark_mode: DataType.TINYINT,
        save_password: DataType.TINYINT,
        userId: DataType.INTEGER,
        createdAt: DataType.DATE,
        updatedAt: DataType.DATE,
    })

    Configurations.associate = (models) => {
        Configurations.belongsTo(models.users, {
            foreignKey: 'userId', as: 'user'
        })
    }

    return Configurations
}