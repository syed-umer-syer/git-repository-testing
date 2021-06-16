const { auth } = require ('../../graphQLMiddleware/authentication')
const {
    SingleStudentinfo,
    studentList,
    newStudent,
    updateOldStudent,
    deleteAStudent
    // courseList,
    // newcourse,
    // updateOldCourse,
    // deleteACourse
    
    
} = require('./controller')
const {
    SingleCourseinfo,
    
    
} = require('../course/controller')

const {
    singleSchool,
    
    
} = require('../school/controller')

const studentResolvers = {
    
    Query: {

        getStudent:auth(async(parent, args,context) => {
            if (!args.id) return "error"
            console.log(args.id)
            const singleStudent = await SingleStudentinfo( args.id)
            console.log(singleStudent)
            return singleStudent

        }),

        listStudents:auth(async(parent, args,context) => {
            let StudentData = await studentList()
            return StudentData

        }),
    },


    Student: {
        course: async (parent, args) => {
    
          //return Courses.findOne({ _id: parent.courseid })
          console.log("inside course")
          let courseID = parent.courseid
          console.log(courseID)
          let courseData = await SingleCourseinfo(courseID)
          return courseData
    
        },
        school: async(parent, args) => {
    
          //return Schools.findOne({ _id: parent.schoolid })
          console.log("inside school")
          let SchoolID = parent.schoolid
          console.log(SchoolID)
          let schoolData = await singleSchool(SchoolID)
          return schoolData
    
        },
    
      },

    Mutation: {

        addStudent: auth(async(parent, args,context) => {

            const NewStudent = await newStudent( args )
            console.log(NewStudent)
            return NewStudent 
        }),


        updateStudent: auth(async(parent, args,context) => {


            if (!args.id) return;
            const updatedStudent = await updateOldStudent( args )
            console.log(updatedStudent)
            return updatedStudent
        }),

        deleteStudent: auth(async(parent, args,context) => {



            if (!args.id) return;
            const deletedStudent = await deleteAStudent( args )
            console.log(deletedStudent)
            return deletedStudent
        }),



    }


};

module.exports = studentResolvers