const { default: mongoose } = require("mongoose")

const connectDb = async () => {
    if(mongoose.connect(process.env.MONGO_URI)){
        console.log('Database connected')
    }
    else{
        console.log('Database not connected')
    }
}

module.exports = connectDb; 