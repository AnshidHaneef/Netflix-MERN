
const router = require('express').Router()
const { json } = require('express')
const User = require('../models/User')


// Register 
router.post('/register',async (req,res)=>{
    const newUser = new User({
        username:req.body.userName,
        email:req.body.email,
        password: req.body.password
    })
    console.log('post request reached 1 ..');

    const user = await newUser.save()
    try {
        console.log('post request reached 2 ..');
    res.status(200).json(user) 
    } catch (error) {
        console.log('something went wrong',error);
    }
})

module.exports = router;