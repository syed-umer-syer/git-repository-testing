const { gql } = require('apollo-server-express');

const logintypeDefs = gql`
#register

    type Login {
      id: ID!
      name: String
      email: String!
      password: String!
    }

    #authentication token
    type LoginUser {
      token: String!
    }

      type Mutation {
        login(email: String!, password: String!): LoginUser
        #registerUser( name: String!, email:String!, password:String! ):LoginUser
      }


`
module.exports = logintypeDefs