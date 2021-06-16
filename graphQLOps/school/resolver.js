const { auth } = require ('../../graphQLMiddleware/authentication')
const {
    singleSchool,
    schoolslist,
    NewSchool,
    updatedschool,
    deletedschool
} = require('./controller')
const {
    schoolEmployees,
    schoolemployeedelete
    
    
} = require('../employee/controller')
const {
    schoolStudent,
    deleteSchoolStudents
    
    
} = require('../student/controller')


const schoolResolvers = { 
    Query: {

        getSchool: auth(async(parent, args,context) => {
            if (!args.id) return "error"
            console.log(args.id)
            const singlschool = await singleSchool( args.id)
            console.log(singlschool)
            return singlschool

        }),

        listSchool:  auth(async(parent, args,context) => {

            let schoollist = await schoolslist()
            return schoollist
                
        }),



        


    },

    School: {
        employee: async (parent, args) => {
          console.log(parent)
          //return Employees.find({ schoolid: parent.id })
          console.log("inside employes")
          let schoolID = parent.id
          console.log(schoolID)
          let schoolData = await schoolEmployees( schoolID)
          return schoolData
    
        },
    
        student: async(parent, args) => {
    
          //return Students.find({ schoolid: parent.id })
          console.log("inside student")
          let schoolID = parent.id
          console.log(schoolID)
          let schoolData = await schoolEmployees( schoolID)
          return schoolData
    
        },
    
      },


    Mutation: {
        
        addSchool:  auth(async(parent, args, context) => {
            
            const newSchool = await NewSchool( args )
            console.log(newSchool)
            return newSchool
            
          
        }),

        updateSchool: auth(async(parent, args, context) => {
            if (!args.id) return;

            const schoolUpdate = await updatedschool( args )
            console.log(schoolUpdate)
            return schoolUpdate


        }),

        deleteSchool: auth(async(parent, args, context) => {

            if (!args.id) return
            
            const studentdelete = await deleteSchoolStudents( args )
            console.log(studentdelete)
            const employeedelete = await schoolemployeedelete( args )
            console.log(employeedelete)
            const schooldelete = await deletedschool( args )
            console.log(schooldelete)
            return schooldelete
            
        }),



    }



};

module.exports = schoolResolvers
