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

  FormEdit1 = new FormGroup({
    cellphone: new FormControl(""),
    state: new FormControl(""),
    city: new FormControl(""),
    email: new FormControl(""),
    zip: new FormControl(""),
    age: new FormControl(""),
  })
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
    let data = new User();
    data.age = this.FormEdit1.value.age;
    data.cellphone = this.FormEdit1.value.cellphone;
    data.city = this.FormEdit1.value.city;
    data.email = this.FormEdit1.value.email;
    data.state = this.FormEdit1.value.state;
    data.zip = this.FormEdit1.value.zip;

    this.userService.putUser(data).subscribe(res => {
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
