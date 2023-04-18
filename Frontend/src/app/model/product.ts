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

    constructor(mileage:string = "",
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
export interface Specifications4{
    Reversingcamera:string,
    Blindspot:string,
    Adaptivespeed:string,
}
export interface Specifications5{
    doors:string;
    cargovolume:string;
}
export interface Specifications6{
    Heatedseats:string,
    Bluetooth:string,
    remotestart:string,
    Systemnavigation:string,
    SunroofHatch:string,
    hatch:string,
}

export interface Car{
    _id: string,
    information:PerfilCar,
    pspecifications: Specifications1,
    consumption:Specifications2,
    performace:Specifications3,
    security:Specifications4,
    measures:Specifications5,
    additional:Specifications6,
}