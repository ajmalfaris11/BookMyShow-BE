// Importing mongoose library to interact with MongoDB
const { default: mongoose } = require ("mongoose");

// Defining a schema for the "Movie" model with fields for title, thumbnail, and description
const movieSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  languages: {
    type: [String], // Array of strings to allow multiple languages
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  dimension: {
    type: [String], // Array of strings for options like "2D", "3D", "4D", "IMAX"
    default: [],
  },
  uaOptions: {
    type: Boolean, // On/Off option for UA (Universal Approval)
    default: false,
  },
  movieTiming: {
    type: [String], // Array of strings for show timings
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

});

// Creating a model for "Movie" based on the schema defined above
const Movie = mongoose.model('Movie', movieSchema);

// Exporting the Movie model so it can be used in other parts of the application
module.exports = Movie;
