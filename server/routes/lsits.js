const router = require('express').Router()
const jwt = require('jsonwebtoken');
const Lists = require('../models/List');
const verify = require('../verifyToken');
const List = require('../models/List');

// Create List 
router.post('/',verify , (req,res)=>{
    if (req.user.isAdmin) {
        const newList = new Lists(req.body)
        try {
            const savedList = newList.save()
            res.status(201).json(newList)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
      res.status(403).json('you are not allow to create List')  
    }
})


// Get lists 
router.get('/find',async(req,res)=>{
    const typeQuery = req.query.type
    const genreQuery = req.query.genre
    let list = [];
    try {
        if (typeQuery) {
            if(genreQuery){
                list = await Lists.aggregate([{
                    $sample:{size:5},
                    $match:{type:typeQuery,genre:genreQuery}
                }])
            }else{
                list = await Lists.aggregate([{
                    $sample:{size:5},
                    $match:{type:typeQuery}
                }])
            }  
        } else {
            list = await Lists.aggregate([{$sample:{size:5}}])
        }
            res.status(200).json(list)
    } catch (error) {
        res.status(500).json(error)
    }
})



// Delete List
router.delete('/:id',verify,async(req,res)=>{

    if(req.user.isAdmin){
        try {
           await  Lists.findByIdAndDelete(req.params.id)
            res.status(200).json('list deleted Successsfully')
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        req.status(403).json('Not able to delete ...')
    }
})



module.exports = router