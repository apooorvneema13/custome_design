import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-by-product',
  templateUrl: './category-by-product.component.html',
  styleUrls: ['./category-by-product.component.scss']
})
export class CategoryByProductComponent implements OnInit {
  title = 'owlcarouselinAngular';
  url= "http://139.59.21.147:8080";
  Images = ['../../../../../assets/images/lifestyle/img11.png', 
  '../../../../../assets/images/lifestyle/img11.png', 
  '../../../../../assets/images/lifestyle/img11.png',
  '../../../../../assets/images/lifestyle/img11.png',
  '../../../../../assets/images/lifestyle/img11.png']; 
  SlideOptions = { items: 4, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor() { }

  ngOnInit(): void {
    
  }

}
