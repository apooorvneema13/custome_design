import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
let url = "http://139.59.21.147:8080/api"

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  productData: any;
  productId: any;
  getDetails: any;
  url:"http://139.59.21.147:8080";
  getLikeProducts: any;
  quantity: any;
  brand: any;
  product_name: any;
  gender: string | null;
  gen: string;

  constructor(private router:Router,private http:HttpClient) { 
    const thing: any | null = this.router.getCurrentNavigation();
    if (thing.extras.state) {
      this.productId = thing.extras.state?.user;
    }
    console.log(this.productId);
  }

  ngOnInit(): void {
    this.getProductDesc();
    this.productsLike();
    this.gender=localStorage.getItem('gender');
    if(this.gender == '2')
    {
      this.gen="KING";
    }
    else if(this.gender == '1')
    {
      this.gen="QUEEN";
    }
  }

  getProductDesc()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "id":this.productId
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/products/get_product_by_id", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.getDetails=response.data;
          this.brand=response.data[0].brand;
          this.product_name=response.data[0].name;
          console.log(this.brand);
          console.log(this.product_name);


        }
      });
  }

  productsLike()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "id":this.productId
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/similar_products", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.getLikeProducts=response.data;
        }
      });
  }

  getQuantity(value:any)
  {
    this.quantity=value;
    console.log(this.quantity);
  }

  addToCart(product_id:any)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "user_id":localStorage.getItem('cust_id'),
	    "product_id":product_id,
	    // "quantity":this.quantity?this.quantity:"1"
      "quantity":localStorage.getItem('inc_value')?localStorage.getItem('inc_value'):"1"
    }  
    this.http
      .post("http://139.59.21.147:8080/api/customer/add_to_my_cart", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          alert(response.message);
          this.router.navigate(['/checkout-my-cart']);
        }
      });
  }
  
  addToWishlist(product_id:any)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "customer_id":localStorage.getItem('cust_id'),
	    "product_id":product_id,
	    // "quantity":this.quantity?this.quantity:"1"
      // "quantity":localStorage.getItem('inc_value')?localStorage.getItem('inc_value'):"1"
    }  
    this.http
      .post(url + "/customer/add_wishlist", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          alert(response.message);
          // this.router.navigate(['/checkout-my-cart']);
        }
      });
  }

 
}
