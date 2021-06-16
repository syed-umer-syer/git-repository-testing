const { Schools} = require('../../models/school');
const { Students} = require('../../models/student');
const {  Employees} = require('../../models/employee');
const { Courses} = require('../../models/course');


const SingleStudentinfo = async (id) => { 
    try{
        let data = await Students.findById(id);
        console.log(data)
        if(data.id){

            return data
        }else{

            return  {SUCCESS :false , msg:"id doesn`t exist"}
        }

    }catch (e) {
        throw ("cannot fetch data ")
      }



}
const schoolStudent = async (schoolID) =>{
    let schoolStudentData = await Students.find({ schoolid: schoolID })
    return schoolStudentData
}

const courseStudents = async (courseID) =>{
    let courseStudentData = await Students.find({ courseid: courseID })
    return courseStudentData
}
studentList = async () => {

    let allstudents = await Students.find({})
    return allstudents
}

newStudent= async (args) => {


    console.log(args)
    let NewStudents = new Students({
      name: args.name,
      address: args.address,
      fathername: args.fathername,
      schoolid: args.schoolid,
      courseid: args.courseid,
    });
    return NewStudents.save(); 

}

updateOldStudent = async (args) => {

    try {
        return Students.findOneAndUpdate(
          {
            _id: args.id
          },
          {
            ...args
          },
          { new: true },
          (err, Student) => {

            if (err) return next(error)
            else {

              console.log("updated Student successfully")
              return args
            }
          }
        );
      } catch (err) {
        console.error(err)

    }
}

deleteAStudent= async (args) => {

    try {
        return Students.findOneAndDelete(
          {
                _id: args.id
          },

          (err, Students) => {
                if (err) return next(error)
                else {
                    console.log("student Deleted successfully")
                    return args
                }
            }
        );
      } catch (err) {
        console.error(err)

    }
}
deleteSchoolStudents = async (args) => {


  Students.deleteMany(
    {
      schoolid: args.id
    },
      (err, Students) => {
        if (err) return next(error)
        else {
          console.log("students Deleted successfully")
        }
      }
    );
}

module.exports = {
    
    SingleStudentinfo,
    studentList,
    newStudent,
    updateOldStudent,
    deleteAStudent,
    schoolStudent,
    courseStudents,
    deleteSchoolStudents
    // AllCourses,
    // courseList,
    // newcourse,
    // updateOldCourse,
    // deleteACourse
    
    
}