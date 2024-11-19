// Controller functions for movie-related operations

const Movie = require("../models/movieModel");

// Get all movies
const getAllMovies = async (req, res) => {
    const genres = await Movie.find({});
    res.json(genres)
}

// Get a movie by ID
const getMovie = async (req, res) => {
   const movie = await Movie.findById(req.params.movieId).exec();
   res.json(movie)
};

// Add a new movie
const addMovie = async (req, res) => {
    // 1. Get movie data
    const movieData = req.body;
    // 2. Create document with data
    const movie = new Movie(movieData)
    // 3. Save document with the data
    await movie.save();
    // 4. Send document as response
    res.json(movie);

} ;

// Update movie by ID
const updateMovie = (req, res) => res.send('hello World!') ;

// Delete movie by ID
const deleteMovie = (req, res) => res.send('hello World!') ;

module.exports = {
    getAllMovies,
    getMovie,
    addMovie,
    updateMovie,
    deleteMovie,
}
