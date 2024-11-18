// Controller functions for genre-related operations

const Genre = require("../models/genreModel");


// Get all genres
const getAllGenres = async (req, res) => {
    const genres = await Genre.find({});
    res.json(genres)
} 

// Get a genre by ID
const getGenre = (req, res) => res.send('hello World!');

// Add a new genre
const addGenre =  async (req, res) => {
    // 1. Get genre data from request body
    const genreData = req.body
    // 2. Create document with the date
    const genre = new Genre(genreData)
    // 3. Save document with the data
    await genre.save();
    // 4. send document as response
    res.json(genre)
};

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
