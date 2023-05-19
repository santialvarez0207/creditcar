import { Component, OnInit } from '@angular/core';
import { User } from '../model/customer';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlContainer,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {

  visibleVar:number = 1;


  User:User = new User();

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.CheckUser();

    this.activatedRoute.params.subscribe(params => {
      var idsession = params['id'];

      this.userService.getUser(idsession).subscribe(( res ) => { this.User = res as User });
    })
  }

  SendFirst(){

    const age = document.getElementById("age") as HTMLInputElement;
    this.User.age = parseInt(age.value);

    const cellphone = document.getElementById("cellphone") as HTMLInputElement;
    this.User.cellphone = cellphone.value;

    const state = document.getElementById("state") as HTMLInputElement;
    this.User.state = state.value;

    const city = document.getElementById("city") as HTMLInputElement;
    this.User.city = city.value;

    const email = document.getElementById("email") as HTMLInputElement;
    this.User.email = email.value;

    const zip = document.getElementById("zip") as HTMLInputElement;
    this.User.zip = zip.value;
   
    this.userService.putUser(this.User).subscribe(res => {
      if(res){
        window.alert("Datos modificados")
      }else{
        window.alert("No se pudo enviar")
      }
    })
  }

  CheckUser(){
    let x = localStorage.getItem("User");

    if(localStorage.length==0){
      window.location.replace("http://localhost:4200/home");
    }
  }

  Hide(visible:number){
    this.visibleVar = visible;

    let reason = document.getElementsByClassName("Per");
    
    for (let index = 0; index < reason.length; index++) {
      reason[index].classList.remove('visto');
      
    }
    reason[visible-1].classList.add('visto');
  }

}
