const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create police Schema and model

const PoliceSchema = new Schema ({
   name:{
     type:String,
     required:[true,"name field is required"]
   },

   posting:{
     type:String
   },

   rank:{
     type:String
   },

   commissioned:{
     type:Number
   }
});
const Police = mongoose.model('police',PoliceSchema);
module.exports = Police;
