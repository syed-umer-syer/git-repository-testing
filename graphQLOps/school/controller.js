 const Schools = require('../../models/school');
 const { Students} = require('../../models/student');
 const {  Employees} = require('../../models/employee');
 const { Courses} = require('../../models/course');
//const User = require('../../models/user');


const singleSchool = async (id) => {
    try{
        console.log("inside schoolS" , id)
        let data = await Schools.findOne({ _id: id })
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

const schoolslist = async () =>{

    let AllSchools = await Schools.find({})
    return AllSchools
}

const NewSchool = async (args)=>{

    console.log("add school")
    let NewSchool = new Schools({
    name: args.name,
    address: args.address,
  })
  let data = await NewSchool.save();  
  return data

}

const updatedschool = async (args)=> {

    try {
        return Schools.findOneAndUpdate(
          {
            _id: args.id
          },
          {
            ...args
          },
          { new: true },
          (err, Schools) => {

            if (err) return next(error)
            else {

              console.log("updated School successfully")
              return args
            }
          }
        );
      } catch (err) {
        console.error(err)

      }


}



deletedschool = async (args)=> {

   
        
       
            
        try {
            return Schools.findOneAndDelete(
           {
            _id: args.id
            },
            
          (err, Schools) => {
            if (err) return next(error)
            else {
            
              console.log("School Deleted successfully")
              return "args"
            }
          }
          );
          

        } catch (err) {
          console.error(err)

        }



}


module.exports = {
    singleSchool,
    schoolslist,
    NewSchool,
    updatedschool,
    deletedschool
    
}