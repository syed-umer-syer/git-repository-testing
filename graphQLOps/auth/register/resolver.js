
const { AuthenticationError } = require("apollo-server-errors");
const jwt = require("jsonwebtoken");
const secret = require('../../../graphQLMiddleware/secret')
const {
  registeruser
} = require('./controller')

const registerResolvers = {

  Mutation: {

    registerUser: async (parent, args, context, info) => {
      console.log("inside register user")
    const  { name, email, password } = args
      console.log(email)
      newUser = await registeruser(name,email,password)

      return newUser

    }

  }
};

module.exports =  registerResolvers