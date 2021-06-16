const { auth } = require ('../../graphQLMiddleware/authentication')
const {
    
    singleuser,
    userslist,
    userupdate,
    deleteuser
  } = require('./controller')
const userResolvers = { 
    Query: {

        getUser:  auth(async(parent, args,context) => {

            const singleuserr = await singleuser( args.id)
            return singleuserr
                
        }),

        listUsers:  auth(async(parent, args,context) => {

            let userlist = await userslist()
            return userlist
                
        }),


    },

    Mutation:{


        updateUser:  auth(async(parent, args, context) => {
     

            if (!args.id) return;
            const updatedUser = await userupdate( args )
            console.log(updatedUser)
            return updatedUser
          
        }),

        deleteUser: auth(async(parent, args,context) => {
      
              
            if (!args.id) return;
            const deletedUser = await deleteuser( args.id )
            console.log(deletedUser)
            return deletedUser
          
        
        }),

    }

};

module.exports = userResolvers