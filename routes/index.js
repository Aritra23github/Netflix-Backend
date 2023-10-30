const express = require('express');

const router = express.Router();

const { signup, signin } = require('../controllers/userController');
const { nowPlayingMovie, movieTrailer } = require('../controllers/movieController');

router.post('/sign-up', signup);
router.post('/sign-in', signin);

router.get('/now-playing-movie', nowPlayingMovie);
router.get('/trailer', movieTrailer);

module.exports = router;