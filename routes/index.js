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
    upcomingMovie,
    suggestedMovie
} = require('../controllers/movieController');

const { movieSuggestion } = require('../controllers/openAiController');

router.post('/sign-up', signup);
router.post('/sign-in', signin);

router.get('/now-playing-movie', nowPlayingMovie);
router.get('/trailer', movieTrailer);
router.get('/popular-movie', popularMovie);
router.get('/top-rated-movie', topRatedMovie);
router.get('/upcoming-movie', upcomingMovie);

router.post('/movie-suggestion', movieSuggestion);
router.post('/list-of-movies', suggestedMovie);

module.exports = router;