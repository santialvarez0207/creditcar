import { Component, OnInit } from '@angular/core';
import { PerfilCar } from '../model/search';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Cards:PerfilCar[] = [];

  constructor(private homeService:HomeService) { 
   homeService.GetRecommendedCars().subscribe(( res ) => { this.Cards = res});

  }

  ngOnInit(): void {
    
  }

}
