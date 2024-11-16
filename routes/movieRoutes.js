const express = require('express')
const router = express.Router()

// 1 - Get all movies

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

// 2 - Get Movie by ID

router.get('/movies/:movieId', (req, res) => {
  res.send('hello World!');
});

// 3 - Add Movie

router.post('/', (req, res) => {
  res.send('hello world!')
})

// 4 - Update Movie

router.patch('/:movieId', (req, res) => {
  res.send('hello world')
})

// 5 - Delete Movie

router.delete('/:movieId', (req, res) => {
  res.send('hello world')
})

module.exports = router