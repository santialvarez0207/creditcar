const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    amount:String,
    price:String,
    amountfinance:String,
    typeofresidence:String,
    credit:String,
    typeofcontract:String,
    income:String,
    zip:String,
    address: String,
    city: String,
    cellphone: String,
    email: String,
    name: String,
    password: String,
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Customer", customerSchema);