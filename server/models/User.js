const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName: {required:true , type:String , unique:true },
        email: {required:true , type:String , unique:true },
        password: {required:true , type:String  },
        profilePic: { type:String , default:'' },
        isAdmin: { type:Boolean , default:false }
    },
    {timestamps:true}
)

module.exports = mongoose.model('user',userSchema)