// Importing mongoose library to interact with MongoDB
const { default: mongoose } = require("mongoose");

// Defining a schema for the "Movie" model with fields for title, thumbnail, and description
const movieSchema = new mongoose.Schema({
    title: String,        // Title of the movie
    thumbnail: String,    // URL or path to the movie's thumbnail image
    discription: String   // Brief description of the movie
  });

// Creating a model for "Movie" based on the schema defined above
const Movie = mongoose.model('Movie', movieSchema);

// Exporting the Movie model so it can be used in other parts of the application
module.exports = Movie;
