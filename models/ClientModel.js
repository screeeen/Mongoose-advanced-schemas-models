const mongoose = require("mongoose");
const Schema = mongoose.Schema; //schema constructor
const paymentSchema = require("./../schemas/paymentSchema");

//create a schema
const clientSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  accountActive: { type: Boolean, required: true, default: true },
  balance: { type: Number, required: true },
  payments: { type: paymentSchema, required: true }
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;