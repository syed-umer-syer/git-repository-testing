

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//school schema 
const schoolSchema = new Schema({
    name: {
        type: String,
        required: true
     },
    address: {
       type: String,
       //required: true
    }//,
    

}, 

{
    timestamps: true
}


);
//school schema end


// //student schema end
var Schools = mongoose.model('School', schoolSchema);

module.exports = Schools;
