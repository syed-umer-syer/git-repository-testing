const { AuthenticationError,ForbiddenError ,apolloError} = require('apollo-server-express');
const jwt = require("jsonwebtoken");
let _ = require("lodash");
const User = require('../models/user');
const secret = require('./secret')


let auth = resolver => async (parent, args, context)=>{
    try{
    const tokenOne = context.req.userToken
    //console.log("token one", tokenOne)
    let jwtPayload = jwt.verify(tokenOne, secret)
    //console.log("jwt id",jwtPayload._id)
    let userId= jwtPayload._id
   
    //console.log("user id",userId)
    let findUser = await User.findOne( { _id: userId } )
    foundid = findUser._id
    console.log(findUser._id)
    context.req.userID =  foundid
    
    if (foundid == userId){
      console.log("if args return")
      return resolver(parent, args, context)
    }else {
      
      throw new AuthenticationError(JSON.stringify({ message: "Invalid Password", status: 401 }))
    }
  }catch (e) {
    
    context.res.statusCode = 401;
    throw new AuthenticationError(JSON.stringify({ message: "you must be logged in", status: 401 }))
   
    
  }
  }
  module.exports = { auth }