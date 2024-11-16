const express = require ('express')
const movieRoutes = require('./routes/movieRoutes')
const genreRoutes = require('./routes/genreRoutes')
const app = express()
const port = 3000

// Using express.json() middleware to automatically parse incoming JSON payloads.
// This allows the API to process the request body as a JavaScript object, making
// it accessible via req.body in route handlers.
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/movies', movieRoutes); // All routes in `router` are prefixed with `/movies`
app.use('/genre', genreRoutes); // All routes in `router` are prefixed with `/genre`

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})