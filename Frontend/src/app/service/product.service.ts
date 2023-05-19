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

  postimg(imagenes: any) {
    console.log(imagenes)
    const fd = new FormData();
    for (var i = 0; i <= imagenes.length-1; i++) {
      fd.append('image', imagenes[i]);
    }
    return this.http.post<Array<string>>("http://localhost:3000/api/image", fd);
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
