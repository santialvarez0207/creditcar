import { Component, OnInit } from '@angular/core';
import { FormSliderService } from '../service/form-slider.service';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataFinance, infoDealer } from '../model/financeAccount';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  dealers:infoDealer[] = [];

  FinancingForm = new FormGroup({
    amount: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    typeofcontract: new FormControl("",[Validators.required]),
    amountfinance: new FormControl("",[Validators.required]),
    typeofresidence: new FormControl("",[Validators.required]),
    credit: new FormControl("",[Validators.required]),
    typeofcredit: new FormControl("",[Validators.required]),
    income: new FormControl("",[Validators.required]),
    zip: new FormControl("",[Validators.required]),
    state: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required])

  });

  constructor(private FormSliderService:FormSliderService ) { }

  ngOnInit(): void {
    this.FormSliderService.configureSlider();
  }

  Moveit(reason:string, vistos:string){
    let reason2 = document.querySelector(`#${reason}`);
    
    if(reason2?.classList.contains(`${vistos}`)){
      reason2.classList.remove(`${vistos}`);
    }
    else{
      reason2?.classList.add(`${vistos}`)}

  }

  Send(){ 
    let reason3 = document.querySelector('#CardsSlides');
    let reason4 = document.querySelector('#results1');
    
    if(reason3?.classList.contains("visto8")){
      reason3.classList.add("visto8");
      reason4?.classList.add("visto9");
      
    }else{
      reason3?.classList.add("visto8");
      reason4?.classList.add("visto9");

    }

    let data = new DataFinance();

    data.age = this.FinancingForm.value.age;
    data.amount = this.FinancingForm.value.amount;
    data.amountfinance = this.FinancingForm.value.amountfinance;
    data.city = this.FinancingForm.value.city;
    data.credit = this.FinancingForm.value.credit;
    data.income = this.FinancingForm.value.income;
    data.price = this.FinancingForm.value.price;
    data.state = this.FinancingForm.value.state;
    data.typeofcontract = this.FinancingForm.value.typeofcontract;
    data.typeofresidence = this.FinancingForm.value.typeofresidence;
    data.zip = this.FinancingForm.value.zip;
    
    this.FormSliderService.dealersRecommended(data).subscribe(res => {this.dealers = res as infoDealer[]
    console.log(this.dealers)
    });
  }

}