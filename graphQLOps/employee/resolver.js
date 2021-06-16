const { auth } = require ('../../graphQLMiddleware/authentication')
const {
    singleEmployee,
    employeeList,
    newemployee,
    updateOldEmployee,
    deleteAnEmployee
    
} = require('./controller')
const {
    singleSchool,
    
    
} = require('../school/controller')
const {
    AllCourses,
    deleteEmployeeCourses,
    
    
} = require('../course/controller')

const employeeResolvers = { 
    Query: {

        getEmployee: auth(async(parent, args,context) => {
            if (!args.id) return "error"
            console.log(args.id)
            const singlemployee = await singleEmployee( args.id)
            console.log(singlemployee)
            return singlemployee

        }),

        employeeslist:  auth(async(parent, args,context) => {

            let employeedata = await employeeList()
            return employeedata
                
        }),


    },
    Employees: {
        school: async (parent, args) => {
          console.log("inside employes")
          let schoolID = parent.schoolid
          console.log(schoolID)
          let schoolData = await singleSchool( schoolID)
          return schoolData
        },
        course: async(parent, args) => {
          console.log("inside emplyoyee`s course")
          console.log()
          //return Courses.find({ employeeid: parent.id })
          let EmployeeID = parent.id
          console.log(EmployeeID)
          let courseData = await AllCourses( EmployeeID)
          return courseData
        }
      },

    Mutation: {
        addEmployee: auth(async(parent, args,context) => {

            const newEmployee = await newemployee( args )
            console.log(newEmployee)
            return newEmployee
        }),

        updateEmployee: auth(async(parent, args,context) => {
            if (!args.id) return;
            const updatedEmployee = await updateOldEmployee( args )
            console.log(updatedEmployee)
            return updatedEmployee



        }),

        deleteEmployee: auth(async(parent, args,context) => {

            if (!args.id) return;
            
            
            const deleteEmployeeCourse = await deleteEmployeeCourses( args )
            const deletedEmployee = await deleteAnEmployee( args )
            console.log(deletedEmployee)
            return deletedEmployee



        }),



    }





};

module.exports = employeeResolvers