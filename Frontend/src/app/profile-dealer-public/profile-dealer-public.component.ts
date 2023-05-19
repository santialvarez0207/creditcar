import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { PerfilCar } from '../model/search';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../model/product';

@Component({
  selector: 'app-profile-dealer-public',
  templateUrl: './profile-dealer-public.component.html',
  styleUrls: ['./profile-dealer-public.component.css']
})
export class ProfileDealerPublicComponent implements OnInit {
  
  Cards: Car[] = [];
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var idsession= params['id'];

      this.productService.GetCarUniqueDealer(idsession).subscribe(( res ) => { this.Cards = res as Car[]});
      })
  }

}
