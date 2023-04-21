import { Component, OnInit } from '@angular/core';
import { FormSliderService } from '../service/form-slider.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 

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

  Dissapear(){
    let reason3 = document.querySelector('#CardsSlides');
    let reason4 = document.querySelector('#results1');
    
    if(reason3?.classList.contains("visto8")){
      reason3.classList.remove("visto8");
      reason4?.classList.remove("visto9");
      
    }else{
      reason3?.classList.add("visto8");
      reason4?.classList.add("visto9");
      
    }
  }

}