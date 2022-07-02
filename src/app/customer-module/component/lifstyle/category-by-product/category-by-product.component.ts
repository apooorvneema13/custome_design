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
  Images = ['../../../../assets/images/1.png', 
  '../../../../assets/images/2.png', 
  '../../../../assets/images/3.png',
  '../../../../assets/images/5.png',
  '../../../../assets/images/6.png']; 
  SlideOptions = { items: 4, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor() { }

  ngOnInit(): void {
    
  }

}
