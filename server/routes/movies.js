const router = require('express').Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken')

//Create
router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
        try {
            const savedMovie = await newMovie.save()
            res.status(201).json(savedMovie)

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you are not Allowed!')
    }
})


//Update
router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true },
            )
            res.status(200).json(updateMovie)

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you are not Allowed to make changes!')
    }
})



// Get By Id
router.get('/find/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movie = await Movie.findById(req.params.id)
            res.status(200).json(movie)
        } catch (error) {
            res.status(500).json(error)
        }
    }
})


// Get Random
router.get('/random', verify, async (req, res) => {
    const type = req.query.type
    let randomMovie;
    try {

        if (type === "series") {
            randomMovie = await Movie.aggregate([
                {
                    $match: { isSeries: true },
                },
                {
                    $sample: { size: 1 }
                }
            ])
        } else {
            randomMovie = await Movie.aggregate([
                {
                    $match: { isSeries: false }
                },
                {
                    $sample: { size: 1 }
                }
            ])
        }
        res.status(200).json(randomMovie)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})




module.exports = router