const express = require('express');

const router = express.Router();

const { 
    signup, 
    signin 
} = require('../controllers/userController');

const { 
    nowPlayingMovie, 
    movieTrailer, 
    popularMovie, 
    topRatedMovie,
    upcomingMovie
} = require('../controllers/movieController');

const { movieSuggestion } = require('../controllers/openAiController');

router.post('/sign-up', signup);
router.post('/sign-in', signin);

router.get('/now-playing-movie', nowPlayingMovie);
router.get('/trailer', movieTrailer);
router.get('/popular-movie', popularMovie);
router.get('/top-rated-movie', topRatedMovie);
router.get('/upcoming-movie', upcomingMovie);

router.get('/movie-suggestion', movieSuggestion);

module.exports = router;