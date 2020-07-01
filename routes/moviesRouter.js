var express = require('express');
var router = express.Router();
var moviesControllers = require("../controllers/moviesControllers")

/* GET users listing. */
router.get('/', moviesControllers.listMovies);

router.get('/detail/:id',moviesControllers.showMovieDetail);
  
  router.get('/new', moviesControllers.showNewMovies)
  
  router.get('/recommended', moviesControllers.showRecommendedMovies);
  
  router.get('/search', moviesControllers.search);


  

module.exports = router;
