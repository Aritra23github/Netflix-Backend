const express = require('express');

const router = express.Router();

const { signup, signin } = require('../controllers/userController');
const { nowPlayingMovie } = require('../controllers/movieController');

router.post('/sign-up', signup);
router.post('/sign-in', signin);

router.get('/now-playing-movie', nowPlayingMovie);

module.exports = router;