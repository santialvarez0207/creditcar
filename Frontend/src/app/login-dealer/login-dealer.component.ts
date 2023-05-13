import { Component, OnInit } from '@angular/core';
import { ControlContainer,FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { DealersService } from '../service/dealers.service';
import { Dealer } from '../model/dealer';


@Component({
  selector: 'app-login-dealer',
  templateUrl: './login-dealer.component.html',
  styleUrls: ['./login-dealer.component.css']
})
export class LoginDealerComponent implements OnInit {

  formLoginDealer = new FormGroup({
    password: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required])
  })

  constructor(private dealerService:DealersService) { }

  ngOnInit(): void {
  }

  SendD():any{
    let email = this.formLoginDealer.value.email;
    let password = this.formLoginDealer.value.password;

    this.dealerService.authenticate(email,password).subscribe(res => {
      let usuarioTemporal = res as Dealer
      console.log(usuarioTemporal)
      if(usuarioTemporal){
        localStorage.setItem('Dealer', JSON.stringify(usuarioTemporal));
        window.location.replace("http://localhost:4200/home")
      }else{
        console.log("no existe el correo digitado")
      }
    })
    this.formLoginDealer.reset()
  }
}
