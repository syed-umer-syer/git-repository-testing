
const { AuthenticationError } = require("apollo-server-errors");

const {
  mongologin,
  //mongopassword
} = require('./controller')


const loginResolvers = {
  LoginUser: {
    token: (parent, args) => {
      return parent
    }
  },
  Mutation: {
    login: async (parent, args, context) => {
      console.log("inside login ")
      // let oldUser = new User({
      //   email: args.email,
      //   password: args.password,

      // });
      const  { email, password } = args
      const emailvarify = await mongologin( email,password )
      if(emailvarify.SUCCESS == false){

        throw new AuthenticationError(emailvarify.msg)
      }
      else {
        return emailvarify
      }
           
    
    },


  }
};

module.exports =  loginResolvers 