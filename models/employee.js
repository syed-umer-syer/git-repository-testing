const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
     },
    // course: {
    //    type: String,
    //    //required: true
    // },
    pay: {
       type: Number,
       //required: true
    },
    schoolid:{
        type: String,
    }

   
}, 
{
    timestamps: true
}


);

var Employees = mongoose.model('Employee', employeeSchema);

module.exports = {Employees};