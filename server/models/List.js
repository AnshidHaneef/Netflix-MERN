const mongoose = require('mongoose')

const listSchema = new mongoose.Schema(
    {
        listName: {equired:true , type:String , unique:true },
        desc: {type:String  },
        image: { type:String  },
        imageTitle: { type:String , default:'' },
        smallImage: { type:String  },
        trailer: { type: String   },
        video: { type:String  },
        year: { type:String  },
        limit: { type:String  },
        genre: { type:String  },
        isSeries: { type:Boolean , default: false  }
    },
    {timestamps:true}
)

module.exports = mongoose.model('list',listSchema)