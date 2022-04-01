//This code seemingly interacts with the MongoDB services?

const mongoose = require('mongoose'); //not sure what this does
const config = require('config'); //not sure what this does
const db = config.get('mongoURI'); //gets info from the default.json

//attemps an "asynchronous" connection. I'm familiar with the conecept of ASYNC. 
//Tries to connect, on fail, catches it and prompts (probably) a generic connection error it ran into
const connectDB = async () => {
  try {
      //this code attemps to connect
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );
      //success
    console.log('MongoDB is Connected...');
  } 
  //fail
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//what is this exporting?
module.exports = connectDB;