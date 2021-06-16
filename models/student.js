const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
     },
    address: {
       type: String,
       //required: true
    },
    
    fathername:{
        type: String,
    },

    schoolid:{
        type: String,
    },

    courseid:{
        type: String,
    },
   
}, 
{
    timestamps: true
}


);
var Students = mongoose.model('Student',studentSchema);
module.exports = { Students };