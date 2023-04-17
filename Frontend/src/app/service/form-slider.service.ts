import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataFinance } from '../model/financeAccount';


@Injectable({
  providedIn: 'root'
})
export class FormSliderService {

  private apiUrl = 'http://localhost:3000/api/dealer/check';

  constructor(private http: HttpClient) { }
  
  configureSlider() {
    const output = document.getElementById("RangeValue") as HTMLElement;
    const slider1 = document.querySelector("#RangeSlide") as HTMLInputElement;

    slider1.oninput = function() {
      const value = ((slider1.valueAsNumber - Number(slider1.min)) / (Number(slider1.max) - Number(slider1.min))) * 100;
      slider1.style.background = `linear-gradient(to right, #6b8dff 0%, #ff2a5f ${value}%, #fff ${value}%, #fff 100%)`;
      output.innerHTML = slider1.value;
    };
  }

  SendAccountFinance(dataFinance:DataFinance){
    return this.http.post(this.apiUrl, dataFinance);
  }
}
