const { Op } = require('sequelize');
const db = require('../database/models');


module.exports = {
    list : (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                return res.render('moviesList', {movies});
            })
            .catch(error => console.log(error));
    },
    new : (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ]
        })
            .then(movies => {
                return res.render('newestMovies', {movies})
            })
            .catch(error => console.log(error));
    },
    recomended : (req, res) => {
        db.Movie.findAll({
            where : {
                rating:{
                    [Op.gte] : 8
                },
                awards : {
                    [Op.gte] : 2
                }
            },
            limit : 5
        })
            .then(movies => {
                return res.render('recommendedMovies', {movies})
            })
            .catch(error => console.log(error));
    },
    detail : (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                return res.render('moviesDetail', {movie})
            })
            .catch(error => console.log(error));

    }
}