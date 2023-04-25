import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../model/customer'
import {UserService} from '../service/user.service'
import { Temporal } from '../model/temporal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private userService:UserService) {  }

  ngOnInit(): void {
   
    const loginsec=document.querySelector('.login-section')
    const loginlink=document.querySelector('.login-link')
    const register=document.querySelector('.Register-link')
    register?.addEventListener('click',()=>{
    loginsec?.classList.add('active')
   })
    loginlink?.addEventListener('click',()=>{
    loginsec?.classList.remove('active')
   })
   

  }

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,]),
  });

  formRegister = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    cellphone: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required])
  });

  sendR():any{
      var new_user = new User();
        new_user.email= this.formRegister.value.email
        new_user.password= this.formRegister.value.password
        new_user.name= this.formRegister.value.name
        new_user.cellphone= this.formRegister.value.cellphone
      
      this.userService.createUser(new_user).subscribe(res => {
        if (res) {
          window.location.replace("http://localhost:4200/login");
          
        }else{
          console.log("no existe el correo digitado")
        }
      })
      this.formRegister.reset()
  
  }
  sendL():any{
    let email = this.formLogin.value.email
    let password = this.formLogin.value.password

    this.userService.authenticate(email, password).subscribe(res => {
      let usuarioTemporal = res as Temporal
      console.log(usuarioTemporal)
      if (usuarioTemporal) {
        localStorage.setItem('User', JSON.stringify(usuarioTemporal));
        window.location.replace("http://localhost:4200/home");
      
      }else{
        console.log("no existe el correo digitado")
      }
    }) 
    this.formLogin.reset()
  }

}
