const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const verify = require('../verifyToken')

// Update
router.put('/:id',verify, async (req, res) => {
    console.log('req.user',req.user);

    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,
                {$set:req.body},{new:true}
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

router.delete('/:id',verify, (req,res)=>{
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
             User.findByIdAndDelete(req.params.id)
            res.status(200).json('User deleted successfully')

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you can delete only your account')
    }
})

// Get By Id 
router.get('/:id',verify, async(req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(401).json('cannot find User')
        }
    }
})

// Get All
router.get('/',async (req,res)=>{
        try {
          const userss =   await User.find()
            res.status(200).json(userss)
        } catch (error) {
            res.status(500).json(error)
        }
})

// Get User Stats 



module.exports = router