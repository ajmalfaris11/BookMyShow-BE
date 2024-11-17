const express = require("express");
const {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getMovie,
} = require("../controllers/movieControllers");
const router = express.Router();

// 1 - Get all movies

router.get("/", getAllMovies);

// 2 - Get Movie by ID

router.get("/:movieId", getMovie);

// 3 - Add Movie

router.post("/", addMovie);

// 4 - Update Movie

router.patch("/:movieId", updateMovie);

// 5 - Delete Movie

router.delete("/:movieId", deleteMovie);

module.exports = router;
