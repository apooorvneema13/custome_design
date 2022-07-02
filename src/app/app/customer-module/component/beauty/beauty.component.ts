import { style } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit {
  productId: any;
  token: any;
  getCategory: any;
  cat1: any;
  cat2: any;
  cat3: any;
  getBrands: any;
  getPrice: any;
  brand_name: string;
  range: string;
  getProducts: any;
  url= "http://139.59.21.147:8080";
  product_id: any;
  changeColor= [false, false, false];
  selectedIndex: any;

  constructor(private router:Router,
    private http: HttpClient)
     { 
    const thing: any | null = this.router.getCurrentNavigation();
    if (thing.extras.state) {
      this.productId = thing.extras.state?.user.id?thing.extras.state?.user.id:"623";
      this.cat1 = thing.extras.state?.user.cat1;
      this.cat2 = thing.extras.state?.user.cat2;
      // this.cat3 = thing.extras.state?.user.cat3;
    }
    console.log(this.productId);
  }

  ngOnInit(): void {
    if(this.productId != undefined)
    {
      this.getCategoryDetails();
      this.getBrandDetails();
      this.getPriceDetails();
      this.getProductDetails();
    }
    
  }

  getCategoryDetails()
  {
        this.token = localStorage.getItem('token');
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.token
        });
        let options = { headers: headers };
  
        let body = {
          "parent_id":this.productId,
	        "category_name":""
        }
        console.log(body);
    
        this.http
          .post("http://139.59.21.147:8080/api/customer/filter_category", body,options)
          .subscribe((response: any) => {
            if (response.statuscode == '404') {
    
              alert(response.message);
            }
            else if (response.statuscode == '200') {
              this.getCategory=response.data;
              console.log(this.getCategory);
            }
          });
  }

  searchCategory(event: string="")
  {
    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };

    let body = {
      "parent_id":this.productId,
      "category_name":event
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/filter_category", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404')
        {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          this.getCategory=response.data;
          console.log(this.getCategory);
        }
      });
  }

  getBrandDetails()
  {
    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };

    let body = {
      "parent_id":this.productId,
      "brand_name":""
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/filter_brands", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          this.getBrands=response.data;
          console.log(this.getBrands);
        }
      });
  }

  searchBrand(event:string="")
  {
    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };

    let body = {
      "parent_id":this.productId,
      "brand_name":event
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/filter_brands", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          this.getBrands=response.data;
          console.log(this.getBrands);
        }
      });
  }

  getPriceDetails(event:string="")
  {
    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };

    let body = {
      "parent_id":this.productId
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/filter_price", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          this.getPrice=response.data;
        }
      });
  }

  selectCategory(event:any)
  {
    console.log(event);
    
    if(event)
    {
      this.product_id=event;
    }
    else
    {
      this.product_id="";
    }
    this.selectedIndex = event;   
    this.getProductDetails();
  }

  selectBrand(event:any)
  {
    console.log(event);
    
    if(event)
    {
      this.brand_name=event;
    }
    else
    {
      this.brand_name="";
    }
    this.selectedIndex = event;   
    this.getProductDetails();
  }

  selectRange(event:string="")
  {
    console.log(event);
    if(event)
    {
      this.range=event;
    }
    else
    {
      this.range="";
    }
    this.selectedIndex = event;       
    this.getProductDetails();
  }

  getProductDetails()
  {
    
    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };

    let body = {
      "parent_id":this.product_id?this.product_id:this.productId,
      "price": this.range,
      "brand": this.brand_name
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/data", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.getProducts=response.data;
          this.range="";
          this.brand_name="";
        }
      });
  }


}
