module.exports = (sequelize, DataTypes) => {

    const alias = "Genre"

    const cols = {
        id : {
            type : DataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique: true
        },
        active : {
            type : DataTypes.TINYINT(1),
            allowNull : false
        }
    }

    const config = {
        tableName : "genres",
        timestamps : false,
        underscored : true 
    }


    const Genre = sequelize.define(alias, cols, config)

    return Genre;
}