import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Hide(){
    let reason = document.querySelector("#Modal");
    if(reason?.classList.contains("visto")){
      reason.classList.remove("visto");

    }else{
      reason?.classList.add("visto")
    }
  }
}
