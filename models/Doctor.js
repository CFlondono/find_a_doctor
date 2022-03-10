const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    specialities: [ String ],
    languages : [ String ],
    npi: {type: String},
    education: [ String ],
    address:{type: String},
    city:{type:String},
    zipcode:{type: Number},
    img: {type: String},
}, {timestamp: true })

const Doctor = mongoose.model("Doctor",doctorSchema)

module.exports = Doctor
/*
a name
a last_name
a specialities
languages 
npi - national provider identifier
education
address
zipcode
reviews
*/
