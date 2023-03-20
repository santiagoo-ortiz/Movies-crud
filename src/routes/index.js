const express = require('express');
const actorRouter = require('./actor.router');
const directorRouter = require('./director.router');
const genreRouter = require('./genre.router');
const movieRouter = require('./movie.router');
const router = express.Router();

router.use('/movies', movieRouter)
router.use('/actors', actorRouter)
router.use('/directors', directorRouter)
router.use('/genres', genreRouter)



module.exports = router;