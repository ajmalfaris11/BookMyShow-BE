const express = require ('express')
const cors = require('cors')
const mongoose = require('mongoose'); // Import the mongoose library for MongoDB connection

const movieRoutes = require('./routes/movieRoutes')
const genreRoutes = require('./routes/genreRoutes')

const app = express()
const port = 3000


// CORS (Cross-Origin Resource Sharing) middleware is used to allow or restrict resource sharing between different origins (domains). 
// It helps the server handle requests from external domains securely.
app.use(cors());


// Using express.json() middleware to automatically parse incoming JSON payloads.
// This allows the API to process the request body as a JavaScript object, making
// it accessible via req.body in route handlers.
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/movies', movieRoutes); // All routes in `router` are prefixed with `/movies`
app.use('/genres', genreRoutes); // All routes in `router` are prefixed with `/genre`

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// ===== DataBase ===== DataBase ===== DataBase =====

// Calling the main async function to establish a connection and log success or failure
main()
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log("Connection failed:", err));

// Define an asynchronous function to connect to MongoDB
async function main() { 
    // MongoDB connection string with actual credentials and URL encoded password
    const uri = 'mongodb+srv://AjmalBMS:itsMeAju@cluster0.g1wpj.mongodb.net/';

    try {
        // Connect to MongoDB (No need for deprecated options)
        await mongoose.connect(uri);
    } catch (err) {
        // Handle connection failure
        console.log("Error during connection:", err);
        throw err;
    }
}