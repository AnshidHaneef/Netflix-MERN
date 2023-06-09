const router = require('express').Router()
const Movies = require('../models/Movie')
const verify = require('../verifyToken')

// Update
router.put('/:id', verify, async (req, res) => {
    console.log('req.user', req.user);

    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,
                { $set: req.body }, { new: true }
            )
            res.status(200).json(updateUser)

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you can update only your account')
    }
})





module.exports = router