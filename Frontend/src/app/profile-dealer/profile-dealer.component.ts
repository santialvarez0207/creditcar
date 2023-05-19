import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormControl,Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Car } from '../model/product';
import { DealersService } from '../service/dealers.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Dealer } from '../model/dealer';
@Component({
  selector: 'app-profile-dealer',
  templateUrl: './profile-dealer.component.html',
  styleUrls: ['./profile-dealer.component.css']
})
export class ProfileDealerComponent implements OnInit {
visibleVar:number=1;


   FormCar = new FormGroup({
    name: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    state: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required]),
    mileage: new FormControl("",[]),
    traction: new FormControl("",[]),
    outsideColor: new FormControl("",[]),
    insidecolour: new FormControl("", []),
    consumption: new FormControl("",[]),
    engine: new FormControl("",[]),
    fueltype: new FormControl("",[]),
    transmission: new FormControl("",[]),
    Combinedconsumption: new FormControl("",[]),
    Transmission: new FormControl("",[]),
    Consumptioncity: new FormControl("",[]),
    Traction: new FormControl("",[]),
    Consumptionroad: new FormControl("",[]),
    Engine: new FormControl("",[]),
    tanksize: new FormControl("",[]),
    Power: new FormControl("",[]),
    Reversingcamera: new FormControl("",[]),
    doors: new FormControl("",[]),
    Blindspot: new FormControl("",[]),
    cargovolume: new FormControl("",[]),
    Heatedseats: new FormControl("",[]),
    Bluetooth: new FormControl("",[]),
    remotestart: new FormControl("",[]),
    Systemnavigation: new FormControl("",[]),
    SunroofHatch: new FormControl("",[]),
    hatch: new FormControl("",[]),
   })


   Dealer:Dealer = new Dealer();
  constructor( private productService:ProductService, private dealerService:DealersService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var idsession = params['id'];

      this.dealerService.getDealer(idsession).subscribe((res) => {this.Dealer = res as Dealer})
    })
    this.FormCar.reset();
  }
hide(visible:number){
this.visibleVar=visible;
let reason=document.getElementsByClassName("Per");
for(let index=0;index<reason.length;index++){
  reason[index].classList.remove('visto');
}
reason[visible-1].classList.add('visto');
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
