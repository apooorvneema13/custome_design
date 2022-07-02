import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  gender: any;
  gen: string;
  getCount: any=0;
  color: string;
  selectedIndex_color: string;
  productId: any;
  brand_name: any;
  range: any;
  url: string;
  getColor: any;
  msgs_data: string;
  getProducts: never[];
  token: string | null;

  constructor(private http:HttpClient) { 
    this.gender=localStorage.getItem('gender');
    if(this.gender == 1)
    {
      this.gen="queen";
    }
    else if(this.gender == 2)
    {
      this.gen="king";
    }

   this.getMyCartCount();
  }

  ngOnInit(): void {
    this.getMyCartCount();
  }

  logedin(){
    return localStorage.getItem('token')
  }
  logOut(){
    localStorage.removeItem('token')==null
  }

  getMyCartCount()
  {
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
  
            // alert(response.message);
          }
          else if (response.statuscode == '200') {
            
            this.getCount=response.data.count;
            localStorage.setItem('cart_count',this.getCount);
          }
         
        });
  } 


  /********************************COLOR***********************************************/

  getColoredata(event: string = '') {
    $('#cover-spin').show(0);

    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      // 'x-access-token': this.token,
    });
    let options = { headers: headers };

    this.http
      .get('http://139.59.21.147:8080/api/customer/colors',options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          this.getColor = response.data;
          $('#cover-spin').hide(0);
        }
      });
  }


// color

selectColor(event: string) {
  console.log(event);
  if (event) {
    this.color = event;
  } else {
    this.color = '';
  }
  //   this.selectedIndex = event;
  //  this.getProductDetails();

  //http://139.59.21.147:8080/api/customer/colors

  this.selectedIndex_color = event;
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  let options = { headers: headers };
  let body = {
    parent_id: this.productId,
    brand: this.brand_name,
    price: this.range,
  };
  this.http
    .post(this.url + '/api/customer/colors', options)
    .subscribe((response: any) => {
      if (response.statuscode == '404') {
        alert(response.message);
      } else if (response.statuscode == '200') {
        if (response.data.length > 0) {
          this.getColor = response.data;
          this.range = '';
          this.brand_name = '';
          this.msgs_data = '';
        } else {
          this.msgs_data = 'NO DATA Found';
          this.getProducts = [];
        }
      }
    });
}

/********************************************************************************/

}
