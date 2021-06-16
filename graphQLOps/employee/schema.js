const { gql } = require('apollo-server-express');

const employeetypeDefs = gql` 
    type Employees {
        name:String!
        pay: Int
        school:  School
        schoolid: ID
        course: [Courses]

    } 

    extend type Query {

        employeeslist: [Employees]
        getEmployee(id: ID!): Employees
        
    }

    extend type Mutation{

        addEmployee(name:String!, pay: Int, schoolid:ID): Employees
        updateEmployee(id:ID, name: String, pay: Int, schoolid: ID): Employees
        deleteEmployee(id: ID): Employees


    }

`

module.exports = employeetypeDefs