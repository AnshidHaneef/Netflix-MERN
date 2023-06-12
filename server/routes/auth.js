const router = require('express').Router()
const { json } = require('express')
const User = require('../models/User')
const dotenv = require('dotenv')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

dotenv.config()

router.get('/', (req, res) => {
    res.json({ message: "hello world" })
})

// Register 

router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req?.body?.username,
            email: req.body.email,
            // password:req.body.password
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY)
        })
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        console.log('something went wrong', error);
    }
})


// Login 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(401).json('wrong password or usrname')

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)

        originalPassword !== req.body.password &&
            res.status(401).json('wrong username or password')

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: '2d' })

        const { password, ...info } = user._doc

        res.status(200).json({...info,accessToken})

    } catch (error) {
        console.log(error);
        res.status(500).json()
    }
})




module.exports = router;