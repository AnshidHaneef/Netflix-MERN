const router = require('express').Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken')

// Create
router.post('/', verify, async (req, res) => {
    if ( req.user.isAdmin) {

       const newMovie = new Movie({
        
       })
        try {
            const savedMovie = await newMovie.save()
            res.status(200).json(savedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you are not Allowed!')
    }
})

//Update
router.put('/:id', verify, async (req, res) => {
    if ( req.user.isAdmin) {
        try {
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id)
            res.status(200).json(updateMovie)

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you are not Allowed to make changes!')
    }
})


// Delete




module.exports = router