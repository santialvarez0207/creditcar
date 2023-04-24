import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Car } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SelectedCar: Car;
  
  private apiUrl = 'http://localhost:3000/api/car'; 

  constructor(private http: HttpClient) {
    this.SelectedCar = new Car();
  }
  GetCars() {
    return this.http.get<Car[]>(this.apiUrl);
  }
  GetCar(id:string) {
    console.log(id);
    let mensaje = this.http.get<Car>(this.apiUrl + `/${id}`);
    console.log(mensaje);

    return mensaje;
  }
}
