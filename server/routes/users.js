const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
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


// Delete

router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User deleted successfully')

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you can delete only your account')
    }
})

// Get By Id 
router.get('/find/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...info } = user._doc;
        res.status(200).json(info)
    } catch (error) {
        res.status(401).json('cannot find User')
    }
})

// Get All
router.get('/find', verify, async (req, res) => {
    const query = req.query.new
    if (req.user.isAdmin) {
        try {
            const userss = query ? await User.find().sort({ _id: 1 }).limit(8) : await User.find()
            res.status(200).json(userss)

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you are not allowed to see all users')
    }
})

// Get User Stats  ||  Total Users per Month ...
router.get('/stats',async(req,res)=>{
    const date = new Date()
    const lastYear = date.setFullYear(date.setFullYear() -1 )   /* This gives Last years stats */

    const month = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ]

    try {
        const data = await User.aggregate([
            {$project:{
                month:{$month:'$createdAt'}
            }},
            {$group:{
                _id:'$month',
                total:{$sum:1}
            }}
        ])
            res.status(200).json(data)
    } catch (error) {
        res.status(403).json('you Are Not Allowed to get User Stats')
    }
})


module.exports = router