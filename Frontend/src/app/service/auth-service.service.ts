import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private apiUrl = 'http://localhost:3000/api/dealer/check'; 

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get(this.apiUrl, {params}); 
  }
}
