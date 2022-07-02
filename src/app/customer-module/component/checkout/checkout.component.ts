import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
let url = " http://139.59.21.147:8080/api"

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  getCartList: any;
  total: any;
  url:"http://139.59.21.147:8080";
  gender: string | null;
  gen: string;
  getCartCount: string | null;
  getLikeProducts: any;
  cart_id: any;
//../../../../assets/images/loading-loading-forever.gif
  img_loader=true;

  constructor(private http:HttpClient,
    private router:Router
    )
  
  { }

  ngOnInit(): void {
    
    this.getMyCartList();
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
    this.getCartCount=localStorage.getItem('cart_count');
  }


  decreaseValue(products:any){
    for (let i = 0; i < this.getCartList.length; i++) {      
      if(this.getCartList[i].id === products.id ){
        if(products.quantitys !=1){
          this.getCartList[i].quantitys = parseInt( products.quantitys ) - 1;
        }
       
      }      
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "cart_id":products.cart_id,
      "quantity":products.quantitys

    }
   

    this.http
      .post(url + "/customer/update_quantity", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.getMyCartList();
        
        }
      });
  
  }




  increaseValue(products:any){
    console.log("456",products)
    
    for (let i = 0; i < this.getCartList.length; i++) {      
      if(this.getCartList[i].id === products.id ){
        this.getCartList[i].quantitys = parseInt( products.quantitys ) + 1;        
      }      
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "cart_id":products.cart_id,
      "quantity":products.quantitys

    }
    console.log(body);

    this.http
      .post(url + "/customer/update_quantity", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.getMyCartList();
          
        }
      });


  }
  getMyCartList()
  {
      $('#cover-spin').show(0)
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      let body = {
        "user_id":localStorage.getItem('cust_id')        
      }
      console.log(body);
    
      this.http
        .post("http://139.59.21.147:8080/api/customer/my_cart", body,options)
        .subscribe((response: any) => {
          if (response.statuscode == '404') {
         
             // this.router.navigate(['/',]);
        //    $("#login").modal('show');
         //   document.getElementById("login").showModal();

           
          }
          else if (response.statuscode == '200') {
            console.log(response.data);
            this.getCartList=response.data.carts;
            this.total=response.data.total;   
            this.cart_id =this.getCartList.cart_id    
            this.getCartCount=response.data.count;
            $('#cover-spin').hide(0)
            // console.log("this.cart_id",this.cart_id);
          }
        });
  } 
  removeItem(products:any)
  {

   

    console.log("in",products.cart_id);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = 
      {
        cart_id:products.cart_id
      }   

    this.http
      .post("http://139.59.21.147:8080/api/customer/remove_cart", body,options)
      .subscribe((response: any) => {
        alert(response.message);
        this.getMyCartList();
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log("innnnn");
          alert(response.message);
         this.getMyCartList();
         // this.getCartCount=localStorage.getItem('cart_count');
          // this.getMyCartList();
        }
       
      });
  }


  
// add to  wishlist
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
        this.getMyCartList();
        alert(response.message);
        // this.router.navigate(['/checkout-my-cart']);
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
      "id":""
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/similar_products", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
        
          this.getLikeProducts=response.data;
        }
      });
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
	    "quantity":"1"
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/add_to_my_cart", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          alert(response.message);
          location.reload();
        }
      });
  }

}
