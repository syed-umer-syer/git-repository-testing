const { makeExecutableSchema, gql } = require('apollo-server-express')

const loginTypeDef = require('./auth/login/schema')
const registertypeDef= require('./auth/register/schema')
const usertypeDef= require('./user/schema')
const schoolTypeDef = require('./school/schema')
const employeeTypeDef = require('./employee/schema')
const courserTypeDef = require('./course/schema')
const studentTypeDef = require('./student/schema')

const loginResolvers = require('./auth/login/resolver')
const registerResolvers = require('./auth/register/resolver')
const userResolvers = require('./user/resolver')
const schoolResolvers = require('./school/resolver')
const employeeResolvers = require('./employee/resolver')
const courseResolvers = require('./course/resolver')
const studentResolvers = require('./student/resolver')
// const schoolResolvers = require('./school/resolver')
// const studentResolvers = require('./student/resolver')

// intial setting for query
const Query = gql`
  type Query {
    _empty: String
  }
`;

module.exports = {
    typeDefs: [
        Query,
        loginTypeDef,
        registertypeDef,
        usertypeDef,
        schoolTypeDef,
        employeeTypeDef,
        courserTypeDef,
        studentTypeDef
        
        // schoolTypeDef,
        // studentTypeDef,
        

    ],
    resolvers: [
      loginResolvers,
      registerResolvers,
      userResolvers,
      schoolResolvers,
      employeeResolvers,
      courseResolvers,
      studentResolvers
      
        // employeeResolvers,
        // schoolResolvers,
        // studentResolvers,

    ],
}