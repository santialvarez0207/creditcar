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
  Dropdown(){
    if(this.contador==0){
        document.querySelector("#Dropdown")?.classList.add("visto1"),
        this.contador=1}

    else{
        document.querySelector("#Dropdown")?.classList.remove("visto1"),
        this.contador=0
    }
  }

}
