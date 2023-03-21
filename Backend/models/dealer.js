const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    name:  String,
    email: String,
    phone_number:  String,
    location:  {
        address:  String,
        country: String,
        city: String
    },
    contact_ids:  [String],
    registration_date: Date,

    credit_requirements: {
        minimum_amount: Number,
        financing_term: Number,
        credit_score: Number
    }
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Customer", customerSchema);