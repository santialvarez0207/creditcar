const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    user:  String,
    password: String,
    email: String,
    phone_number:  String,
    permits: [String],
    contact_ids:  [String],
    registration_date: Date,

  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Admin", DealerSchema);