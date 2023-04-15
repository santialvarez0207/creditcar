import { Component, OnInit } from '@angular/core';
import {card} from '../model/card-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  Cards:card[] = [{name:'Audi r8 rojo y negro', price:'28.000.000',way:{state:'Califonia',city:'Minesota'},url:'./product'},
  {name:'Audi r9 rojo y negro', price:'29.000.000',way:{state:'NuevaYork',city:'Newjersey'},url:'./product'},
  {name:'Audi r9 rojo y negro', price:'29.000.000',way:{state:'NuevaYork',city:'Newjersey'},url:'./product'},
  {name:'Audi r9 rojo y negro', price:'29.000.000',way:{state:'NuevaYork',city:'Newjersey'},url:'./product'}];

  constructor() { }

  ngOnInit(): void {
  }

  SecondRouterLink(){
    window.location.replace('http://localhost:4200/product');
  }

}
