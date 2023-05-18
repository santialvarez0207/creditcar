import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { DealersService } from '../service/dealers.service';
import { Dealer } from '../model/dealer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formDealer = new FormGroup({
    user: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    nit: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    phone_number: new FormControl("",[Validators.required]),
    state: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required])
  });

  constructor(private dealersService:DealersService) { }

  ngOnInit(): void {
    this.formDealer.reset()
  }

  Send(){
    let data = new Dealer();

    data.user = this.formDealer.value.user;
    data.email = this.formDealer.value.email;
    data.nit = this.formDealer.value.nit;
    data.password = this.formDealer.value.password;
    data.location.state = this.formDealer.value.state;
    data.location.city = this.formDealer.value.city;
    data.phone_number = this.formDealer.value.phone_number;

    this.dealersService.createDealer(data).subscribe(res => {
      if (res) {
        window.alert("registrado")
        this.formDealer.reset()
      }else{
        window.alert("ya existe un usuario con el mismo correo o nit")
      }
    });
    
  }

}
