const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')

dotenv.config()



mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then(() => console.log('Connected!'));
  
app.listen(3000,()=>{
    console.log('server running on port http://localhost:3000');
})


app.use(express.json())
app.use('/server/auth' , authRoute)


// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
