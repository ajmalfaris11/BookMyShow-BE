//  import the express modules
const express = require('express');

const { getGenre, deleteGenre, updateGenre, addGenre, getAllGenres } = require('../controllers/genreControllers');

// initialize the router instents
const router = express.Router();



// === define the routers ===

// get all genre
router.get('/', getAllGenres)

// get genre by id
router.get('/:genereId', getGenre)

// add genre 
router.post('/', addGenre)

// update genre
router.patch("/:genereId", updateGenre)

// delete  genre
router.delete("/:genereId", deleteGenre)


// export the router
module.exports = router