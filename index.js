const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

mongoose.connect('mongodb://localhost/policego');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//initialize routes

app.use('/api',require('./routes/api2'));

//error handling  middleware

app.use(function(err,req,res,next){
  res.status(422).send({error:err.message});
});


//listen for request
/*
app.listen(process.env.port||4000,function(){
    console.log("now listening for request");
});
*/

app.listen(3000);
