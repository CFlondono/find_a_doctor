const mongoose = require('mongoose')

const MONGO_URI = process.env.DB_URI || 'mongodb+srv://clondono:Luna2021@cluster0.hjbuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const MONGO_URI = 'mongodb://127.0.0.1:27017/doctorsDB'


mongoose.connect(MONGO_URI, ()=>{
    console.log('connected to MongoDB - DoctorsDB')
})
mongoose.connection.on('error', err=>{
    console.log(err.message, "is MongoDB running?")
})