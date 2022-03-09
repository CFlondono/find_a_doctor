const express = require('express')
const app = express()
const doctorsController = require('./controllers/doctors')
require('./db')

//APP CONFIGS
const PORT = 9000

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/doctors',doctorsController)
// ROUTING

app.get('/', (req, res)=>{
    res.json({
        body:"you have found the drs app"
    })
})

app.listen(PORT, () =>{
    console.log(`App to find doctors happening on port ${PORT}!!`)
})