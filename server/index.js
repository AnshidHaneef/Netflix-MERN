const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')

dotenv.config()


mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then(() => console.log('Connected!'));
  
app.listen(8800,()=>{
    console.log('server running on port http://localhost:8800');
})


app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/auth' , authRoute)
app.use('/users' , userRoute)
app.use('/movie',movieRoute)


// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
