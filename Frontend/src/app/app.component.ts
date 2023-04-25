import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  name:String = "";
  ngOnInit(): void {
      this.CheckUser()
  }

  CheckUser(){
    let x = localStorage.getItem("User");

    if(x!=null){
      let User = JSON.parse(x);
      if(User){
        this.name = User.name;
        let element = document.getElementById("User");
        element!.style.display = "flex";
        let elementLogin = document.getElementById("Log-in");
        elementLogin!.style.display="none";
      }
    }
  }


  CloseSession(){
    localStorage.removeItem("User");
    window.location.replace("http://localhost:4200/home");
  }
}
