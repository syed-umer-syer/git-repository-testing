const { gql } = require('apollo-server-express');

const courserTypeDef = gql`
#course
    type Courses {
        name:String!
        course_field: String!
        employeeid: ID
        employee: Employees
        student: [Student]
    
    }

    extend type Query {

        listCourses: [Courses]
        getCourse(id: ID!): Courses
    }

    extend type Mutation{

        addCourse(name:String!, course_field:String!, employeeid:String): Courses
        updateCourse(id:ID, name: String, course_field: String, employeeid: ID): Courses
        deleteCourse(id: ID): Courses
    }



`



module.exports = courserTypeDef