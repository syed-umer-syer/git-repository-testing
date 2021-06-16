const { auth } = require ('../../graphQLMiddleware/authentication')
const {
    SingleCourseinfo,
    courseList,
    newcourse,
    updateOldCourse,
    deleteACourse
    
    
} = require('./controller')
const {
    singleEmployee,
    
    
} = require('../employee/controller')
const {
    courseStudents,
    
    
} = require('../student/controller')

const courseResolvers = { 

    Query: {

        getCourse:auth(async(parent, args,context) => {
            if (!args.id) return "error"
            console.log(args.id)
            const singleCourse = await SingleCourseinfo( args.id)
            console.log(singleCourse)
            return singleCourse

        }),

        listCourses:auth(async(parent, args,context) => {
            let coursedata = await courseList()
            return coursedata

        }),

    },

    Courses: {
        employee: async(parent, args) => {
          //return Employees.findOne({ _id: parent.employeeid })
          console.log("inside employes")
          let employeelID = parent.employeeid
          console.log(employeelID)
          let employeeData = await singleEmployee( employeelID)
          return employeeData
        },
        student: async (parent, args) => {
    
          //return Students.find({ courseid: parent.id })
          console.log("inside student")
          let courseID = parent.id
          console.log(courseID)
          let schoolData = await courseStudents( courseID)
          return schoolData
    
        }
      },

    Mutation: {

        addCourse: auth(async(parent, args,context) => {

            const NewCourse = await newcourse( args )
            console.log(NewCourse)
            return NewCourse
        }),

        updateCourse: auth(async(parent, args,context) => {


            if (!args.id) return;
            const updatedCourse = await updateOldCourse( args )
            console.log(updatedCourse)
            return updatedCourse
        }),

        deleteCourse: auth(async(parent, args,context) => {



            if (!args.id) return;
            const deletedCourse = await deleteACourse( args )
            console.log(deletedCourse)
            return deletedCourse
        }),

    }

};

module.exports = courseResolvers