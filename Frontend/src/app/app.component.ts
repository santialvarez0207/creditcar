import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  name:String = "";
  user:string = "";

  idUser:string = "";
  idDealer:string = "";

  constructor(){

  }

  ngOnInit(): void {
      this.CheckUser()
      console.log(this.idUser, "hola")
      this.CheckDealer()
      
  }

  CheckUser(){
    let x = localStorage.getItem("User");

    if(x!=null){
      let User = JSON.parse(x);
      this.idUser = User.id;
      if(User){
        this.name = User.name;
        let element = document.getElementById("User");
        element!.style.display = "flex";
        let elementLogin = document.getElementById("Log-in");
        elementLogin!.style.display="none";
      }
    }
  }
  CheckDealer(){
    let x = localStorage.getItem("Dealer");

    if(x!=null){
      let Dealer = JSON.parse(x);
      this.idDealer = Dealer.id;
      if(Dealer){
        this.user = Dealer.name;
        let element = document.getElementById("Dealer");
        element!.style.display = "flex";
        let elementLogin = document.getElementById("Log-in");
        elementLogin!.style.display="none";
      }
    }
  }


  CloseSession(){
    localStorage.removeItem("User");
    localStorage.removeItem("Dealer");
    window.location.replace("http://localhost:4200/home");
  }

}
