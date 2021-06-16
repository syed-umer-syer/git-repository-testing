const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require('../../../models/user');
const secret = require('../../../graphQLMiddleware/secret')
const { tokencreation } = require('../../../graphQLMiddleware/token')

const registeruser = async (Name,Email,Password) => {

    let newUser = new User ({
        name: Name,
        email: Email,
        password: bcrypt.hashSync(Password, 3),
    });
    
    await newUser.save();
    
    let newToken = await tokencreation(newUser._id)
    console.log(newToken)

    if(newToken){
        return newToken
    }
    
    else {
            
        return {SUCCESS :false , msg:"anthentication token failed"}

    }
    
    
    
}



module.exports = {
    registeruser
    
}