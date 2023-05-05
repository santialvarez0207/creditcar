import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Dealer } from '../model/dealer';
import { Temporal } from '../model/temporal';


@Injectable({
  providedIn: 'root'
})
export class DealersService {

  private apiUrl = 'http://localhost:3000/api/dealer'; 

  constructor( private http:HttpClient) { }

  authenticate(email: string, password: string){
    const params = new HttpParams()
      .set('email',email)
      .set('password', password);
    console.log(params);
    return this.http.get<Temporal>(this.apiUrl + "/check", {params});
  }

  createDealer(dealer:Dealer){
    return this.http.post(this.apiUrl, dealer);
  }
}
