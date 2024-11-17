// Controller functions for movie-related operations

// Get all movies
const getAllMovies = (req, res) => res.send('all movies here') ;

// Get a movie by ID
const getMovie = (req, res) => res.send('hello World!') ;

// Add a new movie
const addMovie = (req, res) => res.send('hello World!') ;

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
