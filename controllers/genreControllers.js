// Controller functions for genre-related operations

const Genre = require("../models/genreModel");

// Get all genres
const getAllGenres = async (req, res) => {
  const genres = await Genre.find({});
  res.json(genres);
};

// Get a genre by ID
// Asynchronous function to retrieve a specific genre by its ID
const getGenre = async (req, res) => {
  // Use the findById method to fetch the genre document with the given ID
  // The ID is extracted from the request parameters (req.params.genreId)
  const genre = await Genre.findById(req.params.genreId).exec();

  // Send the retrieved genre document as a JSON response
  res.json(genre);
};

// Add a new genre
const addGenre = async (req, res) => {
  // 1. Get genre data from request body
  const genreData = req.body;
  // 2. Create document with the date
  const genre = new Genre(genreData);
  // 3. Save document with the data
  await genre.save();
  // 4. send document as response
  res.json(genre);
};

// Update genre by ID
const updateGenre = (req, res) => res.send("hello World!");

// Delete genre by ID
const deleteGenre = async (req, res) => {
    const genre = await Genre.findById(req.params.genereId);
    await genre.deleteOne();
    res.json(genre);
};

module.exports = {
  getAllGenres,
  getGenre,
  addGenre,
  updateGenre,
  deleteGenre,
};
