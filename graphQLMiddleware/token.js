const jwt = require("jsonwebtoken");
const secret = require('./secret')

//const tokencreation = async (id) => {
const tokencreation = async (id)=>{
    token=jwt.sign(
    {
        _id: id,
    },
    secret,
    {
        expiresIn: "10d",
    }
)
return token 

}
//}
module.exports = {
    tokencreation
    
}