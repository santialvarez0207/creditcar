import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSliderService {

  constructor() { }
  
  configureSlider() {
    const output = document.getElementById("RangeValue") as HTMLElement;
    const slider1 = document.querySelector("#RangeSlide") as HTMLInputElement;

    slider1.oninput = function() {
      const value = ((slider1.valueAsNumber - Number(slider1.min)) / (Number(slider1.max) - Number(slider1.min))) * 100;
      slider1.style.background = `linear-gradient(to right, #6b8dff 0%, #ff2a5f ${value}%, #fff ${value}%, #fff 100%)`;
      output.innerHTML = slider1.value;
    };
  }
}
