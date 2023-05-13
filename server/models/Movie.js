const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
    {
        title: {required:true , type:String , unique:true },
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
module.exports = mongoose.model('movie',movieSchema)