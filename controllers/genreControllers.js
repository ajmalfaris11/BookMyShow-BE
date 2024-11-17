// Controller functions for genre-related operations

const Genre = require("../models/genreModel");


// Get all genres
const getAllGenres = async (req, res) => {
    const genres = await Genre.find({});
    res.json(genres)
} 

// Get a genre by ID
const getGenre = (req, res) => res.send('hello World!') ;

// Add a new genre
const addGenre = (req, res) => res.send('hello World!') ;

// Update genre by ID
const updateGenre = (req, res) => res.send('hello World!') ;

// Delete genre by ID
const deleteGenre = (req, res) => res.send('hello World!') ;

module.exports = {
    getAllGenres,
    getGenre,
    addGenre,
    updateGenre,
    deleteGenre,
}
