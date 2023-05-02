import { Component, OnInit } from '@angular/core';
import { User } from '../model/customer';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.activatedRoute.params.subscribe(params => {
      var idsession = params['id'];

      this.userService.getUser(idsession).subscribe(( res ) => { this.User = res as User });
    })
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
