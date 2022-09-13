module.exports = (sequelize, DataTypes) => {

    const alias = "Movie"

    const cols = {
        id : {
            type : DataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        title : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        release_date : {
            type : DataTypes.DATE,
            allowNull : false
        },
        length : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        genre_id : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
    }

    const config = {
        tableName : "movies",
        timestamps : false,
        underscored : true 
    }


    const Movie = sequelize.define(alias, cols, config)

    return Movie;
}