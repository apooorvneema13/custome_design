import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  gender: any;
  gen: string;

  constructor() { 
    this.gender=localStorage.getItem('gender');
    if(this.gender == 1)
    {
      this.gen="queen";
    }
    else if(this.gender == 2)
    {
      this.gen="king";
    }
  }

  ngOnInit(): void {
  }

}
