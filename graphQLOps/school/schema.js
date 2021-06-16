const { gql } = require('apollo-server-express');

const schooltypeDefs = gql` 
    type School {
        id: ID!
        name: String
        address: String
        student: [Student]
        employee: [Employees]
        #sid: String!
    } 
    extend type Query{
        listSchool: [School]
        getSchool(id: ID!): School
    }

    extend type Mutation{

        addSchool(name:String!, address:String!): School
        updateSchool(id:ID, name: String, address: String,): School
        deleteSchool(id: ID): School
    }




`

module.exports = schooltypeDefs
