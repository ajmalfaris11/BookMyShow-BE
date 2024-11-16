//  import the express modules
const express = require('express')
// initialize the router instents
const router = express.Router();



// === define the routers ===

// get all genre
router.get('/', (req, res) => res.send("hello world"))

// get genre by id
router.get('/genre/:genereId', (req,res) => res.send("hello world"))

// add genre 
router.post('/', (req, res) => res.send("hello world"))

// update genre
router.patch("/:genereId", (req, res) => res.send("hello world"))

// delete  genre
router.delete("/:genereId", (req, res) => res.send("hello world"))


// export the router
module.exports = router