const { gql } = require('apollo-server-express');

const registertypeDefs = gql`
#register

    type Register {
      id: ID!
      name: String
      email: String!
      password: String!
    }

   

    extend type Mutation {
        #login(email: String, password: String!): LoginUser
        registerUser( name: String!, email:String!, password:String! ):LoginUser
      }


`
module.exports = registertypeDefs