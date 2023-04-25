import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor() {  }

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


}
