import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dealer',
  templateUrl: './profile-dealer.component.html',
  styleUrls: ['./profile-dealer.component.css']
})
export class ProfileDealerComponent implements OnInit {
visibleVar:number=1;
  constructor() { }

  ngOnInit(): void {
  }
hide(visible:number){
this.visibleVar=visible;
let reason=document.getElementsByClassName("Per");
for(let index=0;index<reason.length;index++){
  reason[index].classList.remove('visto');
}
reason[visible-1].classList.add('visto');
}
}
