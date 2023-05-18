import { Component, OnInit } from '@angular/core';
import { Car } from '../model/product'
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlContainer,FormControl,FormGroup,Validators } from '@angular/forms';
import { FormSliderService } from '../service/form-slider.service';
import { DataFinance, infoDealer } from '../model/financeAccount';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  contador:number = 1;
  visibleVar:number = 1;
  Cars:Car = new Car();
  Financing: infoDealer[] = [];

  FinancingFormUnique = new FormGroup({
    amount: new FormControl("",[Validators.required]),
    typeofcontract: new FormControl("",[Validators.required]),
    typeofresidence: new FormControl("",[Validators.required]),
    credit: new FormControl("",[Validators.required]),
    typeofcredit: new FormControl("",[Validators.required]),
    income: new FormControl("",[Validators.required]),
    zip: new FormControl("",[Validators.required]),
    state: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required])

  });

  constructor(private formSliderService:FormSliderService,private productService:ProductService, private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var idsession= params['id'];

      this.productService.GetCar(idsession).subscribe(( res ) => { this.Cars = res as Car});
      })
  }

  Hidden(){
    if(this.contador==0){
        document.querySelector("#MyModal")?.classList.add("visto"),
        this.contador=1}

    else{
        document.querySelector("#MyModal")?.classList.remove("visto"),
        this.contador=0
    }
  }

  Hide(visible:number){
    this.visibleVar = visible;

    let reason = document.getElementsByClassName("Per");
    
    for (let index = 0; index < reason.length; index++) {
      reason[index].classList.remove('visto3');
      
    }
    reason[visible-1].classList.add('visto3');
  }

  Send(){
    if(this.contador==0){
      document.querySelector("#MyModal")?.classList.add("visto"),
      this.contador=1}

  else{
      document.querySelector("#MyModal")?.classList.remove("visto"),
      this.contador=0
  }
    let data = new DataFinance();

    data.age = this.FinancingFormUnique.value.age;
    data.amount = this.FinancingFormUnique.value.amount;
    data.amountfinance = 1;
    data.city = this.FinancingFormUnique.value.city;
    data.credit = this.FinancingFormUnique.value.credit;
    data.income = this.FinancingFormUnique.value.income;
    data.price = 1;
    data.state = this.FinancingFormUnique.value.state;
    data.typeofcontract = this.FinancingFormUnique.value.typeofcontract;
    data.typeofresidence = this.FinancingFormUnique.value.typeofresidence;
    data.zip = this.FinancingFormUnique.value.zip;

    this.formSliderService.dealersRecommended(data).subscribe(res => {this.Financing = res as infoDealer[]
    console.log(this.Financing)
  });
  }


}
