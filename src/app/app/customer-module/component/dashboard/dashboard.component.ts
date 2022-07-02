import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  title = 'owlcarouselinAngular';
  url= "http://139.59.21.147:8080";
  Images = ['../../../../assets/images/1.png', 
  '../../../../assets/images/2.png', 
  '../../../../assets/images/3.png',
  '../../../../assets/images/5.png',
  '../../../../assets/images/6.png']; 
  SlideOptions = { items: 4, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 
  
  Images_product = ['../../../../assets/images/1.png', 
  '../../../../assets/images/p1.png', 
  '../../../../assets/images/p2.png',
  '../../../../assets/images/p3.png',
  '../../../../assets/images/p4.png',
  '../../../../assets/images/p5.png',
  '../../../../assets/images/p2.png'
]; 
  SlideOptions_product = { items: 4, dots: true, nav: true };  
  CarouselOptions_product = { items: 3, dots: true, nav: true }; 
  favProducts: any;
  bumiStars: any;
  fragranceList: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }


  // @ViewChild('owlElement') owlElement: OwlCarousel 
  // fun() {
  //   this.owlElement.next([200])
  //   //duration 200ms
  // }
  // object = {          
  //   link: "http://lorempixel.com/100/100"
  // }
  constructor( private http: HttpClient) { 
    this.getFavouriteProducts();
  }

  ngOnInit(): void {
    this.getFavouriteProducts();
    this.getBumiStar();
    this.getFrangranceList();
  }

  getFavouriteProducts()
  {  
    // $('#cover-spin').show(0)
    this.http.get("http://139.59.21.147:8080/api/customer/customer_fav").subscribe((response: any) => {
      if (response.statuscode == '404') {

        // alert(response.message);

      }
      else if (response.statuscode == '200') {
        this.favProducts = response.data;
        console.log(this.favProducts);
        // $('#cover-spin').hide(0)

      }
    });
  }

  getBumiStar()
  {

    // $('#cover-spin').show(0)
    this.http.get("http://139.59.21.147:8080/api/customer/bumi_star").subscribe((response: any) => {
      if (response.statuscode == '404') {
        // alert(response.message);
      }
      else if (response.statuscode == '200') {
        this.bumiStars = response.data[0]
        console.log(this.bumiStars);
        // $('#cover-spin').hide(0)
      }
    });
  }

  getFrangranceList()
 {
  // $('#cover-spin').show(0)
  this.http.get("http://139.59.21.147:8080/api/customer/fragnance_list").subscribe((response: any) => {
    if (response.statuscode == '404') {
      // alert(response.message);
    }
    else if (response.statuscode == '200') {
      this.fragranceList = response.data
      console.log(this.fragranceList);
      // $('#cover-spin').hide(0)
    }
  });
}

}

