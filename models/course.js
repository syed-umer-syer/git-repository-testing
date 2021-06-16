const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
     },
    course_field: {
       type: String,
       //required: true
    },
    
    employeeid:{
        type: String,
    }

   
}, 
{
    timestamps: true
}


);


var Courses = mongoose.model('Course', courseSchema);

module.exports = {Courses};