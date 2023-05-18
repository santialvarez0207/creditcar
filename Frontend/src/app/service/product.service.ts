import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Car } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  
  private apiUrl = 'http://localhost:3000/api/car'; 

  constructor(private http: HttpClient) {
    
  }

  CreateCar(car:Car){
    return this.http.post(this.apiUrl, car);
  }
  GetCars() {
    let message = this.http.get<Car[]>(this.apiUrl);
    console.log(message)
    return message;
  }
  GetCar(id:string) {
    return this.http.get<Car>(this.apiUrl + `/${id}`);

  }
}
