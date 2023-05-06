import { Component, OnInit } from '@angular/core';
import { Car } from '../model/product'
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  contador:number = 1;
  visibleVar:number = 1;
  Cars:Car = new Car();

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var idsession= params['id'];

      this.productService.GetCar(idsession).subscribe(( res ) => { this.Cars = res as Car});
      })
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
  
  Hide(visible:number){
    this.visibleVar = visible;

    let reason = document.getElementsByClassName("Per");
    
    for (let index = 0; index < reason.length; index++) {
      reason[index].classList.remove('visto3');
      
    }
    reason[visible-1].classList.add('visto3');
  }


}
