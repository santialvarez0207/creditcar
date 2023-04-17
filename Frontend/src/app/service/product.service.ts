import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Car } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SelectedCar!: Car;
  Cars: Car[] = [];

  private apiUrl = 'http://localhost:3000/api/dealer/check'; 

  constructor(private http: HttpClient) { 

  }
  GetCars() {
    return this.http.get(this.apiUrl) as unknown as Car[];
  }
}
