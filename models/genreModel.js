// Importing mongoose library to interact with MongoDB
const { default: mongoose } = require("mongoose");

// Defining a schema for the "Genre" model with a field for the genre name
const genreSchema = new mongoose.Schema({
    genreName: String // Name of the genre (e.g., Action, Comedy)
});

// Creating a model for "Genre" based on the schema defined above
const Genre = mongoose.model('Genre', genreSchema);

// Exporting the Genre model so it can be used in other parts of the application
module.exports = Genre;
