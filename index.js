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
    .then(() => console.log("connected")) // Log message only after a successful connection
    .catch((err) => console.log("Connection failed:", err));

// Define an asynchronous function to connect to MongoDB
async function main() { 
    // MongoDB connection string with actual credentials and URL encoded password
    const uri = 'mongodb+srv://AjmalBMS:skJ%23eb-49SY%2A5Sp@cluster0.g1wpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    try {
        // Connect to MongoDB
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
        // Handle connection failure
        console.log("Error during connection:", err);
        throw err;
    }
}

