const { Schools} = require('../../models/school');
const { Students} = require('../../models/student');
const {  Employees} = require('../../models/employee');
const { Courses} = require('../../models/course');


const SingleCourseinfo = async (id) => {
    try{
        let data = await Courses.findById(id);
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

const AllCourses = async (id) => {

    let employeeCourseData = await Courses.find({ employeeid: id })
    return employeeCourseData
}

const courseList = async (id) => {

    let allCourses = await Courses.find({})
    return allCourses
}

const newcourse = async (args) => {


    console.log(args)
      let NewCourse = await new Courses({
        name: args.name,
        course_field: args.course_field,
        employeeid: args.employeeid,
      });
      let course = await NewCourse.save();
      return course

}
const updateOldCourse = async (args) => { 

    try {
        return Courses.findOneAndUpdate(
          {
            _id: args.id
          },
          {
            ...args
          },
          { new: true },
          (err, Courses) => {

            if (err) return next(error)
            else {

              console.log("updated Course successfully")
            }
          }
        );
      } catch (err) {
        console.error(err)

    }
}

const deleteACourse = async (args) => { 


    try {
        return Courses.findOneAndDelete(
          {
            _id: args.id
          },

          (err, Courses) => {
            if (err) return next(error)
            else {
              console.log("Course Deleted successfully")
            }
          }
        );
      } catch (err) {
        console.error(err)

      }
}
const deleteEmployeeCourses = async (args) => {


  Courses.deleteMany(
    {
      employeeid: args.id
    },
    (err, Courses) => {
      if (err) return next(error)
      else {
        console.log("courses Deleted successfully")
      }
    }
  );
}

module.exports = {
    SingleCourseinfo,
    AllCourses,
    courseList,
    newcourse,
    updateOldCourse,
    deleteACourse,
    deleteEmployeeCourses
    
    
}