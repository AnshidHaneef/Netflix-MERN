const router = require('express').Router()
const CryptoJS = require('crypto-js')
const Users = require('../models/User')

// Update
router.put( '/:id', (req,res)=>{
    if(req.user.id == req.params.id || req.user.isAdmin){
        
    }
})



// Delete
// Get 
// Get All
// Get All Stats 

