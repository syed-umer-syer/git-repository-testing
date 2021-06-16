const { Schools} = require('../../models/school');
const { Students} = require('../../models/student');
const {  Employees} = require('../../models/employee');
const { Courses} = require('../../models/course');


const singleEmployee = async (id) => {
    try{
        let data = await Employees.findById(id);
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

const employeeList = async () =>{

    let allEmployees = await Employees.find({})
    return allEmployees
}

const schoolEmployees = async (schoolID) =>{
    let schoolEmployeeData = await Employees.find({ schoolid: schoolID })
    return schoolEmployeeData
}

const newemployee = async (args) =>{ 
    console.log(args)
      let NewEmployee = new Employees({
        name: args.name,        
        pay: args.pay,
        schoolid: args.schoolid,
      });
      return NewEmployee.save();


}
const updateOldEmployee = async (args) =>{ 

    console.log(args)

    try {
        return Employees.findOneAndUpdate(
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

              console.log("updated Employee successfully")
              return args
            }
          }
        );
      } catch (err) {
        console.error(err)

      }


}

const deleteAnEmployee = async (args) =>{ 

    
      try {
        return Employees.findOneAndDelete(
          {
            _id: args.id
          },

          (err, Employees) => {
            if (err) return next(error)
            else {
              console.log("Employee Deleted successfully")
              return args
            }
          }
        );
      } catch (err) {
        console.error(err)

      }
}

schoolemployeedelete = async (args) =>{ 


  Employees.deleteMany(
    {   
       schoolid: args.id,
        
    },
    (err, Employees) => {
      if (err) return next(error)
      else {
        console.log("employees Deleted successfully")
        }
      }
  );
}
module.exports = {
    singleEmployee,
    employeeList,
    schoolEmployees,
    newemployee,
    updateOldEmployee,
    deleteAnEmployee,
    schoolemployeedelete

    
    
}