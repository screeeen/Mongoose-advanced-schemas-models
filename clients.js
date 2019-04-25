const mongoose = require('mongoose');
const data = require('./data.js');
const dbName = 'iron-bank';

const Client = require('./models/ClientModel');


// CREATE AN INSTANCE OF CONNECTION TO DATABASE - `example-mongoose` 
mongoose.connect(`mongodb://localhost/${dbName}`)
  .then(() => console.log(`Connected to Mongo Database -> ${dbName}`))
  .catch((err) => console.error(`Error connecting to Mongo Database - ${dbName}`, err));











  


// INSERTING DOCUMENTS - `Model.create`   // https://mongoosejs.com/docs/api.html#model_Model.create
let client1 = {
  name: "Lidia Campos",
  age: 60,
  accountActive: true,
  balance: 31218.56,
  payments: []
}

Client.(client1, (err,result)=>{
if (err) console.log('Error',err);
else console.log('Document inserted',result);
})





// RETRIEVE A SINGLE DOCUMENT - `Model.findById`    //https://mongoosejs.com/docs/api.html#model_Model.findById

Client.findById('')
.then ((result) =>console.log('Retrieved: ',result))
.catch((err)=> console.log(err))





//  INSERT MULTIPLE DOCUMENTS - `Model.insertMany`    //  https://mongoosejs.com/docs/api.html#model_Model.insertMany
Client.insertMany(data)
.then ((result) =>console.log('Insert Many Retrieved: ',result))
.catch((err)=> console.log(err))





//  RETRIEVE DOCUMENTS  - `Model.find`    //  https://mongoosejs.com/docs/api.html#model_Model.find







// UPDATE ONE DOCUMENT  - Model.findOneAndUpdate    // https://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate







// DELETE ONE DOCUMENT -  Model.deleteOne   // https://mongoosejs.com/docs/api.html#model_Model.deleteOne


