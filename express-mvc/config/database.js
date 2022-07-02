const mongoose = require('mongoose')

const configureDB = () =>{
    mongoose.connect('mongodb://localhost:27017/express-mvc-may',
        // useNewUrlParser : true,
        // useUnifiedTopology : true
    )
        .then(()=>{
            console.log('connect to db')
        })
        .catch((err)=>{
            console.log('error connecting to db',err)
        })
}

module.exports = configureDB
