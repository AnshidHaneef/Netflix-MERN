const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.listen(3000,()=>{
    console.log('server running on port http://localhost:3000');
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})