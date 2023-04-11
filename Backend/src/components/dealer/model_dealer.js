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
        country: String,
        city: String
    },
    contact_ids:  [String],
    registration_date: Date,

    credit_requirements: {
        age: Number,
        type_of_residence: String,
        credit_status: String,
        job_status: String,
        annual_income: Number,
        zip: Number,
        vehicle_price: Number,
        down_payment: Number,
        down_payment_percentage: Number,
        loan_term: Number,
    }
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("dealer", DealerSchema);