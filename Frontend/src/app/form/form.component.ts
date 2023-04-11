import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  Moveit(reason:string, vistos:string){
    let reason2 = document.querySelector(`#${reason}`);
    
    if(reason2?.classList.contains(`${vistos}`)){
      reason2.classList.remove(`${vistos}`);
    }
    else{
      reason2?.classList.add(`${vistos}`)}
  }
}
