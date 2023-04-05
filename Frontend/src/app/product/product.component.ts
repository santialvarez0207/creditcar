import { Component, OnInit } from '@angular/core';

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
  Dropdown(Pene:string){
    let Pene2 = document.querySelector(`#${Pene}`);
    
    if(Pene2?.classList.contains("visto1")){
      Pene2.classList.remove("visto1");
    }
    else{
      Pene2?.classList.add("visto1")}
  }

}
