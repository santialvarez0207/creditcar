
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CarSchema = new Schema(
  {
    visits: Number,
    information: {    
        id_dealer: {type: 'String', required: true},
        name: String,
        price: String,
        way:{state: String, city: String},
        url:String,},

    pspecifications: {
        mileage: String,
        outsideColor: String,
        consumption: String,
        fueltype: String,
        traction: String,
        insidecolour: String,
        engine: String,
        transmission: String,
    },
    consumption: {
        Combinedconsumption: String,
        Consumptioncity: String,
        Consumptionroad: String,
        tanksize: String,      
    },
    performace: {
        Transmission: String,
        Traction: String,
        Engine: String,
        Power: String,
    },
    security: {
        Reversingcamera: String,
        Blindspot: String,
        Adaptivespeed: String,
    },
    measures: {
        doors: String,
        cargovolume: String,
    },

    additional: {
    Heatedseats: String,
    Bluetooth: String,
    remotestart: String,
    Systemnavigation: String,
    SunroofHatch: String,
    hatch: String,
    }


  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Car", CarSchema);






