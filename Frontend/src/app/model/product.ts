import { PerfilCar } from "./search";

export class Specifications1{
    mileage:string;
    outsideColor:string;
    consumption:string;
    fueltype:string;
    traction:string;
    insidecolour:string;
    engine:string;
    transmission:string;

    constructor(
        mileage:string = "",
        outsideColor:string = "",
        consumption:string = "",
        fueltype:string = "",
        traction:string = "",
        insidecolour:string = "",
        engine:string = "",
        transmission:string = ""){
            
            this.mileage = mileage;
            this.outsideColor = outsideColor;
            this.consumption = consumption;
            this.fueltype = fueltype;
            this.traction = traction;
            this.insidecolour = insidecolour;
            this.engine = engine;
            this.transmission = transmission;

    }
}
export class Specifications2{
    Combinedconsumption:string;
    Consumptioncity:string;
    Consumptionroad:string;
    tanksize:string;

    constructor(Combinedconsumption:string = "",
        Consumptioncity:string = "",
        Consumptionroad:string = "",
        tanksize:string = ""){
            
            this.Combinedconsumption = Combinedconsumption;
            this.Consumptioncity = Consumptioncity;
            this.Consumptionroad = Consumptionroad;
            this.tanksize = tanksize;

    }

    
}
export class Specifications3{
    Transmission:string;
    Traction:string;
    Engine:string;
    Power:string;

    constructor(Transmission:string = "",
        Traction:string = "",
        Engine:string = "",
        Power:string = ""){
        
        this.Transmission = Transmission;
        this.Traction = Traction;
        this.Engine = Engine;
        this.Power = Power;

}
}
export class Specifications4{
    Reversingcamera:string;
    Blindspot:string;
    Adaptivespeed:string;

    constructor(Reversingcamera:string = "",
        Blindspot:string = "",
        Adaptivespeed:string = ""){
    
    this.Reversingcamera = Reversingcamera;
    this.Blindspot = Blindspot;
    this.Adaptivespeed = Adaptivespeed;

}
}
export class Specifications5{
    doors:string;
    cargovolume:string;
    
    constructor(doors:string = "",
        cargovolume:string = ""){

    this.doors = doors;
    this.cargovolume = cargovolume;

}
}
export class Specifications6{
    Heatedseats:string;
    Bluetooth:string;
    remotestart:string;
    Systemnavigation:string;
    SunroofHatch:string;
    hatch:string;

    constructor(Heatedseats:string = "",
        Bluetooth:string = "",
        remotestart:string = "",
        Systemnavigation:string = "",
        SunroofHatch:string = "",
        hatch:string = ""){
    
    this.Heatedseats = Heatedseats;
    this.Bluetooth = Bluetooth;
    this.remotestart = remotestart;
    this.Systemnavigation = Systemnavigation;
    this.SunroofHatch = SunroofHatch;
    this.hatch = hatch;

}
}

export class Car {
    visits: number;
    _id:String;
    information: {
      nameDealer:string;
      id_dealer: string;
      name: string;
      price: number;
      way: { state: string; city: string };
      urls: string[];
    };
    pspecifications: {
      mileage: string;
      outsideColor: string;
      consumption: string;
      fueltype: string;
      traction: string;
      insidecolour: string;
      engine: string;
      transmission: string;
    };
    consumption: {
      Combinedconsumption: string;
      Consumptioncity: string;
      Consumptionroad: string;
      tanksize: string;
    };
    performace: {
      Transmission: string;
      Traction: string;
      Engine: string;
      Power: string;
    };
    security: {
      Reversingcamera: string;
      Blindspot: string;
      Adaptivespeed: string;
    };
    measures: {
      doors: string;
      cargovolume: string;
    };
    additional: {
      Heatedseats: string;
      Bluetooth: string;
      remotestart: string;
      Systemnavigation: string;
      SunroofHatch: string;
      hatch: string;
    };
  
    constructor( visits: number = 0,
        _id:String = "",
        information: {
        nameDealer:string;
        id_dealer: string;
        name: string;
        price: number;
        way: { state: string; city: string };
        urls: string[];
        } = {
        nameDealer: "",
        id_dealer: "",
        name: "",
        price: 0,
        way: { state: "", city: "" },
        urls: [""],
        },
         pspecifications: {
        mileage: string;
        outsideColor: string;
        consumption: string;
        fueltype: string;
        traction: string;
        insidecolour: string;
        engine: string;
        transmission: string;
        } = {
        mileage: "",
        outsideColor: "",
        consumption: "",
        fueltype: "",
        traction: "",
        insidecolour: "",
        engine: "",
        transmission: "",
        },
         consumption: {
        Combinedconsumption: string;
        Consumptioncity: string;
        Consumptionroad: string;
        tanksize: string;
        } = {
        Combinedconsumption: "",
        Consumptioncity: "",
        Consumptionroad: "",
        tanksize: "",
        },
         performace: {
        Transmission: string;
        Traction: string;
        Engine: string;
        Power: string;
        } = {
        Transmission: "",
        Traction: "",
        Engine: "",
        Power: "",
        },
         security: {
        Reversingcamera: string;
        Blindspot: string;
        Adaptivespeed: string;
        } = {
        Reversingcamera: "",
        Blindspot: "",
        Adaptivespeed: "",
        },
         measures: {
        doors: string;
        cargovolume: string;
        } = {
        doors: "",
        cargovolume: "",
        },
         additional: {
        Heatedseats: string;
        Bluetooth: string;
        remotestart: string;
        Systemnavigation: string;
        SunroofHatch: string;
        hatch: string;
        } = {
        Heatedseats: "",
        Bluetooth: "",
        remotestart: "",
        Systemnavigation: "",
        SunroofHatch: "",
        hatch: "",
        }
    ) {
      this._id = _id;
      this.visits = visits;
      this.information = information;
      this.pspecifications = pspecifications;
      this.consumption = consumption;
      this.performace = performace;
      this.security = security;
      this.measures = measures;
      this.additional = additional;
    }
  }
  