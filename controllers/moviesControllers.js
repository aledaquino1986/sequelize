let db = require("../database/models");
const sequelize = db.sequelize;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


let moviesControllers = {
    listMovies: function(req, res) {
       db.Movie.findAll()
       
          .then(function(movie) {
            res.render("movies", {movie:movie})
          
          })
    },

    showMovieDetail: function(req, res) {
      db.Movie.findByPk(req.params.id)
        .then(function(movie) {
               res.render("detailedMovie", {movie:movie});
        });
    },

    showNewMovies: function(req, res) {
      db.Movie.findAll({
        order: [
        ["release_date", "DESC"],
        ],
        limit: 5
        })
        .then(function(movie) {
      res.render("newMovies", {movie:movie})
    })

  },

  showRecommendedMovies: function(req, res) {
    db.Movie.findAll({
      where: {
        rating: { [Op.between]: [8, 10]}
      },
      
      order: [
      ["rating", "DESC"],
      ],
      
      
      })
      .then(function(movie) {
    res.render("recommendedMovies", {movie:movie})
  })

},

 search: function(req, res) {
   let userSearch = req.query.search

   db.Movie.findAll({where: {title: {[Op.like]: "%" + userSearch + "%" }}})
       
          .then(function(movie) {
            res.render("search", {movie:movie})
          
          })
   
 },

 
}



module.exports = moviesControllers;