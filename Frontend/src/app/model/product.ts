import { PerfilCar } from "./search";

export interface Specifications1{
    mileage:string,
    outsideColor:string,
    consumption:string,
    fueltype:string,
    traction:string,
    insidecolour:string,
    engine:string,
    transmission:string,
}
export interface Specifications2{
    Combinedconsumption:string,
    Consumptioncity:string,
    Consumptionroad:string,
    tanksize:string,      
}
export interface Specifications3{
    Transmission:string,
    Traction:string,
    Engine:string,
    Power:string,
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