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
  SendSecond(){

    const amount = document.getElementById("amount") as HTMLInputElement;
    this.User.amount = amount.value;

    const price = document.getElementById("price") as HTMLInputElement;
    this.User.price = price.value;

    const typeofcontract = document.getElementById("typeofcontract") as HTMLInputElement;
    this.User.typeofcontract = typeofcontract.value;

    const typeofresidence = document.getElementById("typeofresidence") as HTMLInputElement;
    this.User.typeofresidence = typeofresidence.value;

    const credit = document.getElementById("credit") as HTMLInputElement;
    this.User.credit = credit.value;

    const income = document.getElementById("income") as HTMLInputElement;
    this.User.income = income.value;
   
    this.userService.putUser(this.User).subscribe(res => {
      if(res){
        window.alert("Datos modificados")
      }else{
        window.alert("No se pudo enviar")
      }
    })
  }

  Sendthirt(){

    const password = document.getElementById("password") as HTMLInputElement;
    const passwordCon = document.getElementById("passwordCon") as HTMLInputElement;
    const formpassword = document.getElementById("formpassword") as HTMLFormElement;
    if(password.value == passwordCon.value){
      this.User.password = password.value;
      this.userService.putUser(this.User).subscribe(res => {})
    }else{
      window.alert("Erroneo")
      console.log("Erroneo")
    }
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
