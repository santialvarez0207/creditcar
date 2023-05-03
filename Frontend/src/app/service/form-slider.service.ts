import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataFinance, infoDealer } from '../model/financeAccount';
import { FinancingComponent } from '../financing/financing.component';

@Injectable({
  providedIn: 'root'
})
export class FormSliderService {

  SelectedDataFinance: DataFinance;

  private apiUrl = 'http://localhost:3000/api/dealer';

  constructor(private http: HttpClient) { 

    this.SelectedDataFinance = new DataFinance();

  }
  
  PostAccountFinance(dataFinance:DataFinance){
    return this.http.post(this.apiUrl, dataFinance);
  }

  PuttAccountFinance(dataFinance:DataFinance , id : string){
    return this.http.put(this.apiUrl + `/${id}`, dataFinance);
  }

  deleteAccountFinance(_id:String){
    return this.http.delete(this.apiUrl + `/${_id}`);
  }
  
  configureSlider() {
    const output = document.getElementById("RangeValue") as HTMLElement;
    const slider1 = document.querySelector("#RangeSlide") as HTMLInputElement;

    slider1.oninput = function() {
      const value = ((slider1.valueAsNumber - Number(slider1.min)) / (Number(slider1.max) - Number(slider1.min))) * 100;
      slider1.style.background = `linear-gradient(to right, #6b8dff 0%, #ff2a5f ${value}%, #fff ${value}%, #fff 100%)`;
      output.innerHTML = slider1.value;
    };
  }

  dealersRecommended(form: DataFinance){
    const params = new HttpParams()
      .set('age', form.age)
      .set('amount', form.amount)
      .set('price', form.price)
      .set('amountfinance', form.amountfinance)
      .set('typeofresidence', form.typeofresidence)
      .set('credit', form.credit)
      .set('typeofcontract', form.typeofcontract)
      .set('income', form.income)
      .set('zip', form.zip)
      .set('country', form.state)
      .set('city', form.city)

      return this.http.get<infoDealer[]>(this.apiUrl + "/dealerProbability" , {params}); 
  }
 
}
