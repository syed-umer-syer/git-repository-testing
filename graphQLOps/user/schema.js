const { gql } = require('apollo-server-express');

const usertypeDefs = gql` 

    type User {
        id: ID!
        name: String
        email: String!
        password: String!
    }

    extend type Query {

        getUser(id: ID!): User
        listUsers: [User]
    }

    extend type Mutation {


        updateUser(id:ID, name: String, email: String, password:String): User
        deleteUser(id: ID): User
    }



`

module.exports = usertypeDefs