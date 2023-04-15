import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { card } from '../model/card-home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = "";

  constructor(private http: HttpClient) { }

  GetRecommendedCars(){
    
    return;
  }

}
