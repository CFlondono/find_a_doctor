const express = require('express')
const app = express()
const doctorsController = require('./controllers/doctors')
const cors = require('cors')
require('./db')

//APP CONFIGS
const PORT = process.env.PORT || 9000
const acceptList = ["http://localhost:3000", "https://doctorfinderbyclaudia.netlify.app"]
const options = {
    origin: function(origin, callback){
        // if the origin argument is in the acceprlist -> continue
        if(acceptList.lastIndexOf(origin) !== -1 || !origin){
            callback(null,  true);
        } else {
            callback (new Error ("Not allowed by CORS"))
        }
        // else - throw an error

    }
}

// MIDDLEWARE
app.use(cors(options));

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