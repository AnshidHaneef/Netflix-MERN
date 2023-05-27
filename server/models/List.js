const mongoose = require('mongoose')

const listSchema = new mongoose.Schema(
    {
        title: {required:true , type:String , unique:true },
        type: {type:String  },
        genre: { type:String  },
        content: { type:Array }
    },
    {timestamps:true}
)

module.exports = mongoose.model('list',listSchema)
