const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    name:  String,
    last_name:  Number,
    email:  String,
    phone_number:  String,
    location:  {
        address:  String,
        country: String,
        city: String
    },
    contact_ids:  [String],
    registration_date: Date
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Customer", customerSchema);