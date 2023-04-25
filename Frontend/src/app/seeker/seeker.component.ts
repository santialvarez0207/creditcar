import { Component, OnInit } from '@angular/core';
import { Car } from '../model/product';
import { HomeService } from '../service/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilCar } from '../model/search';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {

  Cards:PerfilCar[] = [];

  constructor(private homeService:HomeService, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.homeService.GetRecommendedCars().subscribe(( res ) => { this.Cards = res as PerfilCar[]
      console.log(res)
      });
  }

}
