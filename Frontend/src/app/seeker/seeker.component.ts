import { Component, OnInit } from '@angular/core';
import { Car } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {

  Cards:Car[] = [];

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.productService.GetCars().subscribe(( res ) => { this.Cards = res as Car[]
      console.log(res)
      });
  }

}
