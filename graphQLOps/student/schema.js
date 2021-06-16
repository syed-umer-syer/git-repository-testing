const { gql } = require('apollo-server-express');

const studentTypeDef= gql`

    type Student {
        name:String!
        address:String!
        fathername:String!
        schoolid:ID
        courseid:ID
        course: Courses
        school: School
        
    }

    extend type Query {
        listStudents: [Student]
        getStudent(id: ID!): Student

        
    }

    extend type Mutation{

        addStudent(name: String!, address:String!, fathername:String!, schoolid:ID, courseid:ID): Student
        updateStudent(id:ID, name: String, address: String,fathername: String, schoolid: ID, courseid: ID): Student
        deleteStudent(id: ID): Student
    }


`



module.exports = studentTypeDef