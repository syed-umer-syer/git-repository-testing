

const express = require('express');
const mongoose = require('mongoose');
//const schema = require('./models/schema');

const schema = require('./graphQLOps/index');
// const typeDefs = require('./graphQLOps/index');
// const resolvers = require('./graphQLOps/index ');

const cookieParser = require ('cookie-parser');

const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');


const url = "mongodb://localhost:27017/org1db";
const connect = mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false,
       useCreateIndex:true , useUnifiedTopology:true});
connect.then((db) => {
      console.log('Connected correctly to server!');
}, 
(err) => {
      console.log(err);
});

const server = new ApolloServer({
    
      typeDefs: schema.typeDefs,
      resolvers: schema.resolvers,
      // schema,
      tracing: true,
      
      context: ({ req, res,next }) => {
            // console.log(req)
            const token = req.headers.authorization? req.headers.authorization.split("Bearer ")[1] : ""
            req.userToken = token
            //console.log(res)
            
            return { req, res }
      },
     
  playground: {
    settings: {
      'request.credentials': 'include',
    },
  },
    
});
const app = express();
//app.use(cookie());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('*', cors());

//app.use(validateTokensMiddleware); // middleware to be built
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res
    .status(err.statusCode)
    .json({ err: true, message: err.message })
    .end();
});
server.applyMiddleware({ app });
app.listen(process.env.port || 4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});
