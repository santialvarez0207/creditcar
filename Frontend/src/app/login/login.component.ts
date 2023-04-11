import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../service/auth-service.service'
import { Temporal } from '../model/temporal';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string =  ""
  temporal: Temporal= new Temporal()
  
  constructor(private authService: AuthServiceService, temporal: Temporal) {  }

  ngOnInit(): void {
  }
  onLoginClick() {
    this.email = (<HTMLInputElement>document.getElementById("email")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    let respuesta: any = this.authService.authenticate(this.email, this.password);
    if(respuesta.error = ""){
      this.temporal = respuesta.body as Temporal
    }
  }
}
