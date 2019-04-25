const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema constructor

//create a schema
const paymentSchema = new Schema({
date:{type: Date,required:true,default:Date.now},
amount:{type:Number,required:true,default:0}
})

//export schema
module.exports = paymentSchema;