//  import the express modules
const express = require('express')
// initialize the router instents
const router = express.Router();



// === define the routers ===

// get all movie
router.get('/', (req, res) => res.send("hello world"))

// get movie by id
router.get('/movies/:genereId', (req,res) => res.send("hello world"))

// add movie 
router.post('/', (req, res) => res.send("hello world"))

// update movie
router.patch("/:genereId", (req, res) => res.send("hello world"))

// delete  movie
router.delete("/:genereId", (req, res) => res.send("hello world"))


// export the router
module.exports = router