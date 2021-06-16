const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require('../../../models/user');
const secret = require('../../../graphQLMiddleware/secret')
const { tokencreation } = require('../../../graphQLMiddleware/token')
//const { gql, AuthenticationError, concatenateTypeDefs } = require('apollo-server-express');
const mongologin = async (Email,Password) => {

    let foundUser = await User.findOne({ email: Email })
    
    if (foundUser){
        console.log(foundUser._id)
        //checking if the password is correct      password    hashed password
        let userAuthenticated = bcrypt.compareSync(Password, foundUser.password);
        if (userAuthenticated == true) {

            let newToken = await tokencreation(foundUser._id)

            return newToken
        }else{
            console.log("incorrect password")
            return {SUCCESS :false , msg:"wrong password"}
            
        }
                
    }else{
        console.log("email doesn`t exist")
        return {SUCCESS :false , msg:"Email Doesn`t Exists"}
    }
}



module.exports = {
    mongologin
    
}