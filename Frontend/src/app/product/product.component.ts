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
  contador:number = 0;
  visibleVar:number = 1;
  Cars:Car = new Car();
  Financing:infoDealer = new infoDealer();
  urls: String[] = ["http://localhost:3000/api/image/default.png", "http://localhost:3000/api/image/default.png", "http://localhost:3000/api/image/default.png"];
  urlapi: string = "http://localhost:3000/api/image";


  FinancingFormUnique = new FormGroup({
    amount: new FormControl(0,[Validators.required]),
    typeofcontract: new FormControl(""),
    typeofresidence: new FormControl(""),
    credit: new FormControl(""),
    income: new FormControl(0,[Validators.required]),
    zip: new FormControl("",[Validators.required]),
    state: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required]),
    age: new FormControl(0,[Validators.required])
  });

  constructor(private formSliderService:FormSliderService,private productService:ProductService, private activatedRoute:ActivatedRoute) {
    this.productService.putVisit("643de912d143be51804973a1", 1).subscribe;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var idsession= params['id'];

      this.productService.GetCar(idsession).subscribe(( res ) => { 
        
        this.Cars = res as Car;
        if (this.Cars.information.urls.length>0) {
          this.urls = this.Cars.information.urls.map((url) => { return this.urlapi+`/${url}`}); 
        }
       
        this.productService.putVisit(idsession,this.Cars.visits + 1).subscribe;
      })
    });

      }
      
  

  Hidden(){
    if(this.contador==0){
        document.querySelector("#MyModal")?.classList.add("visto"),
        this.contador=1}else if(this.contador==1){
          document.querySelector("#MyModal")?.classList.remove("visto")
          document.querySelector("#MyModal2")?.classList.add("visto")
          this.contador=0;
        }
  }

  Close(){
    document.querySelector("#MyModal2")?.classList.remove("visto")
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
    this.Hidden()

    let data = new DataFinance();
    
    data.age = this.FinancingFormUnique.value.age;
    data.amount = this.FinancingFormUnique.value.amount;
    data.amountfinance = this.Cars.information.price - data.amount;
    data.city = this.FinancingFormUnique.value.city;
    data.credit = this.FinancingFormUnique.value.credit;
    data.income = this.FinancingFormUnique.value.income;
    data.price = this.Cars.information.price;
    data.state = this.FinancingFormUnique.value.state;
    data.typeofcontract = this.FinancingFormUnique.value.typeofcontract;
    data.typeofresidence = this.FinancingFormUnique.value.typeofresidence;
    data.zip = this.FinancingFormUnique.value.zip;

    this.formSliderService.getFinanceOneDealer(data,this.Cars.information.id_dealer).subscribe(res => {this.Financing = res as infoDealer
      console.log(res)});
      this.FinancingFormUnique.reset();
  }


}
