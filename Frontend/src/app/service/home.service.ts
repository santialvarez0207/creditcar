import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { PerfilCar } from '../model/search';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  SelectedPerfilCar!: PerfilCar;
  Cars: PerfilCar[] = [];

  private apiUrl = 'http://localhost:3000/api/dealer/check'; 

  constructor(private http: HttpClient) { 
  
  }

  GetRecommendedCars() {

    return this.http.get(this.apiUrl) as unknown as PerfilCar[];
  }

}
