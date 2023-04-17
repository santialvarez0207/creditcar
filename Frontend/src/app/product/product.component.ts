import { Component, OnInit } from '@angular/core';
import { perfilCar } from '../model/search';
import { Especifications1 } from '../model/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  contador:number = 1;


  constructor() { }

  ngOnInit(): void {
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
  Dropdown(reason:string){
    let reason2 = document.querySelector(`#${reason}`);
    
    if(reason2?.classList.contains("visto1")){
      reason2.classList.remove("visto1");
    }
    else{
      reason2?.classList.add("visto1")}
  }

}
