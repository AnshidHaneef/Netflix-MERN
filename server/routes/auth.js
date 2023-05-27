
const router = require('express').Router()
const { json } = require('express')
const User = require('../models/User')

router.get('/',(req,res)=>{
    res.json({message:"hello world"})
})

// Register 

router.post('/register', async (req, res) => {
    try {
    const newUser = new User({
        username: req?.body?.username,
        email: req.body.email,
        password: req.body.password
    })
        const user = await newUser.save() 
        res.status(201).json(user)

    } catch (error) {
        console.log('something went wrong', error);
    }
})

module.exports = router;