const mongoose = require('mongoose')
const colors=require('colors')
const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Connected to DB'.cyan.underline)
    } catch (err) {
        console.log(err.red.underline)
    }
}

module.exports=connectToDb