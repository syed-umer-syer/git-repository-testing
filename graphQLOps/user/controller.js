// const { Schools} = require('../../models/school');
// const { Students} = require('../../models/student');
// const {  Employees} = require('../../models/employee');
// const { Courses} = require('../models/course');
const User = require('../../models/user');


const singleuser = async (id) => {
    try{
        let data = await User.findById(id);
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

const userslist = async () =>{

    let Users = await User.find({})
    return Users
}

const userupdate = async (args) => {
    try {
        return await User.findOneAndUpdate(
          {
            _id: args.id
          },
          {
            ...args
          },
          { new: true },
          (err, User) => {

            if (err) return next(error)
            else {

              console.log("updated User successfully")
            }
          }
        );
    } catch (err) {
        console.error(err)

    }

}


const deleteuser = async (id) => {
    
 
    try {
        let data = await User.findById(id);
        console.log(data)
        if(data._id){
            User.findOneAndDelete(
                {
                    _id: id
                },
    
                (err, User) => {
                    if (err) return next(error)
                    else {
                        return {SUCCESS :true , msg:"User Deleted Successfully"}
                    }
                }
            ); return data

            
        }else{

            return  {SUCCESS :false , msg:"user doesn`t exist"}
        }
       
    } catch (err) {
        console.error(err)

    }

}
module.exports = {
    singleuser,
    userslist,
    userupdate,
    deleteuser
    
}