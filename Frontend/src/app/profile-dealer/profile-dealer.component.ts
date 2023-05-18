import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormControl,Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Car } from '../model/product';
@Component({
  selector: 'app-profile-dealer',
  templateUrl: './profile-dealer.component.html',
  styleUrls: ['./profile-dealer.component.css']
})
export class ProfileDealerComponent implements OnInit {

   FormCar = new FormGroup({
    name: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    state: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required]),
    mileage: new FormControl("",[Validators.required]),
    traction: new FormControl("",[Validators.required]),
    outsideColor: new FormControl("",[Validators.required]),
    insidecolour: new FormControl("", [Validators.required]),
    consumption: new FormControl("",[Validators.required]),
    engine: new FormControl("",[Validators.required]),
    fueltype: new FormControl("",[Validators.required]),
    transmission: new FormControl("",[Validators.required]),
    Combinedconsumption: new FormControl("",[Validators.required]),
    Transmission: new FormControl("",[Validators.required]),
    Consumptioncity: new FormControl("",[Validators.required]),
    Traction: new FormControl("",[Validators.required]),
    Consumptionroad: new FormControl("",[Validators.required]),
    Engine: new FormControl("",[Validators.required]),
    tanksize: new FormControl("",[Validators.required]),
    Power: new FormControl("",[Validators.required]),
    Reversingcamera: new FormControl("",[Validators.required]),
    doors: new FormControl("",[Validators.required]),
    Blindspot: new FormControl("",[Validators.required]),
    cargovolume: new FormControl("",[Validators.required]),
    Heatedseats: new FormControl("",[Validators.required]),
    Bluetooth: new FormControl("",[Validators.required]),
    remotestart: new FormControl("",[Validators.required]),
    Systemnavigation: new FormControl("",[Validators.required]),
    SunroofHatch: new FormControl("",[Validators.required]),
    hatch: new FormControl("",[Validators.required]),
   })



  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.FormCar.reset();
  }

  Send(){
    let Dealer = localStorage.getItem("Dealer")!;

    let data = new Car();
    data.information.id_dealer = JSON.parse(Dealer).id;
    data.information.nameDealer = JSON.parse(Dealer).name;
    data.information.name = this.FormCar.value.name;
    data.information.price = this.FormCar.value.price;
    data.information.way.city = this.FormCar.value.city;
    data.information.way.state = this.FormCar.value.state;
    data.pspecifications.mileage = this.FormCar.value.mileage;
    data.pspecifications.consumption = this.FormCar.value.consumption;
    data.pspecifications.engine = this.FormCar.value.engine;
    data.pspecifications.fueltype = this.FormCar.value.fueltype;
    data.pspecifications.insidecolour = this.FormCar.value.insidecolour;
    data.pspecifications.outsideColor = this.FormCar.value.outsideColor;
    data.pspecifications.traction = this.FormCar.value.traction;
    data.pspecifications.transmission = this.FormCar.value.transmission;
    data.consumption.Combinedconsumption = this.FormCar.value.Combinedconsumption;
    data.consumption.Consumptioncity = this.FormCar.value.Consumptioncity;
    data.consumption.Consumptionroad = this.FormCar.value.Consumptionroad;
    data.consumption.tanksize = this.FormCar.value.tanksize;
    data.performace.Engine = this.FormCar.value.Engine;
    data.performace.Power = this.FormCar.value.Power;
    data.performace.Traction = this.FormCar.value.Traction;
    data.performace.Transmission = this.FormCar.value.Transmission;
    data.security.Blindspot = this.FormCar.value.Blindspot;
    data.security.Reversingcamera = this.FormCar.value.Reversingcamera;
    data.measures.cargovolume = this.FormCar.value.cargovolume;
    data.measures.doors = this.FormCar.value.doors;
    data.additional.Bluetooth = this.FormCar.value.Bluetooth;
    data.additional.Heatedseats = this.FormCar.value.Heatedseats;
    data.additional.SunroofHatch = this.FormCar.value.SunroofHatch;
    data.additional.Systemnavigation = this.FormCar.value.Systemnavigation;
    data.additional.hatch = this.FormCar.value.hatch;
    data.additional.remotestart = this.FormCar.value.remotestart;

    this.productService.CreateCar(data).subscribe(res => {
      if(res){
        window.location.replace("http://localhost:4200/home");
      }else{
        console.log("No fue registrado")
      }
    })
    this.FormCar.reset();
  }
}
