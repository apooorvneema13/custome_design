import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var self = this;
    $('.wrapper').scroll(function() {    
      var scroll = $('.wrapper').scrollTop();
  
       //>=, not <=
      if (scroll >= 50) {
          $(".header").addClass("scrolled");
      } else {
          $(".header").removeClass("scrolled");
      }
  }); //missing );

  }

}
