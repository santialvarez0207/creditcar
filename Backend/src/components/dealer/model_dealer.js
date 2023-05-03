const mongoose = require("mongoose");
const { Schema } = mongoose;

const DealerSchema = new Schema(
  {
    user:  String,
    password: String,
    email: String,
    phone_number:  String,
    location:  {
        address:  String,
        state: String,
        city: String
    },
    contact_ids:  [String],
    registration_date: Date,

    credit_requirements: {
        age: Number,
        amount:Number, 
        price:Number,
        amountfinance:Number,
        typeofresidence:String, 
        credit:String,
        typeofcontract:String,
        income:Number,  
        zip:String,
    },
    percent: Number
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Dealer", DealerSchema);