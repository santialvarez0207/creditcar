import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-administrador',
  templateUrl: './perfil-administrador.component.html',
  styleUrls: ['./perfil-administrador.component.css']
})
export class PerfilAdministradorComponent implements OnInit {
  visibleVar:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  press(visible:number){
    this.visibleVar=visible;
    let reason=document.getElementsByClassName("Per");
    for(let index=0;index<reason.length;index++){
      reason[index].classList.remove('visto');
    }
    reason[visible-1].classList.add('visto');
    }

}
