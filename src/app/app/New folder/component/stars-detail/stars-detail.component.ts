import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {OwlCarousel} from 'ng2-owl-carousel';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-stars-detail',
  templateUrl: './stars-detail.component.html',
  styleUrls: ['./stars-detail.component.scss']
})
export class StarsDetailComponent implements OnInit {
  title = 'ngSlick';


  slides = [342, 453, 846, 855, 234];

  slideConfig = {

    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false


  };









  @ViewChild('owlElement') owlElement: OwlCarousel 
 
 

  constructor() { }


  ngOnInit(): void {

  }
 
 


}
