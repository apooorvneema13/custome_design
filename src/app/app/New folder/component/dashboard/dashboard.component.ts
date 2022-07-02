import { Component, OnInit } from '@angular/core';
import {OwlCarousel} from 'ng2-owl-carousel';
import { ViewChild } from '@angular/core'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel 
  fun() {
    this.owlElement.next([200])
    //duration 200ms
  }
  object = {          
    link: "http://lorempixel.com/100/100"
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  slides = [
    {img: "../../../../assets/images/p1.png"},
    {img: "../../../../assets/images/p2.png"},
    {img: "../../../../assets/images/p3.png"},
    {img: "../../../../assets/images/p4.png"},
    {img: "../../../../assets/images/p5.png"},
    {img: "../../../../assets/images/p2.png"}
  ];
  slides_thim = [
    {img: "../../../../assets/images/7.png"},
    {img: "../../../../assets/images/6.png"},
    {img: "../../../../assets/images/8.png"},
    {img: "../../../../assets/images/9.png"},
    {img: "../../../../assets/images/4.png"},
    {img: "../../../../assets/images/5.png"},
    {img: "../../../../assets/images/8.png"},
    {img: "../../../../assets/images/p2.png"}
 
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 5};

}
