import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  stars: any=[];
  gender: string | null;
  gen: string;
  msg: string;
  token: string | null;
  getColor: any;
  color: string;
  selectedIndex_color: string;
  productId: any;
  brand_name: any;
  range: any;
  url: string;
  msgs_data: string;
  getProducts: never[];

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getStars();
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

  getStars()
  {
    $('#cover-spin').show(0)

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "influencer_name":""
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/all_influencers", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.stars=response.data;
          if ( response.data.length > 0) {
           
            this.stars=response.data;
          this.msg =""
          } 
           else 
          {      
          this.msg ="NO DATA Found"
          this.stars=[]
          } 
          $('#cover-spin').hide(0)

        }
      });
  }

  searchStars(event:any="")
  {
    $('#cover-spin').show(0)

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "influencer_name":event
    }
    // console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/all_influencers", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // console.log(response.data);
          // this.stars=response.data;
          if ( response.data.length > 0) {
           
            this.stars=response.data;
          this.msg =""
          } 
           else 
          {      
          this.msg ="NO DATA Found"
          this.stars=[]
          } 
          $('#cover-spin').hide(0)

        }
      });
  }




/********************************COLOR***********************************************/

getColoredata(event: string = '') {
  $('#cover-spin').show(0);

  this.token = localStorage.getItem('token');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': '',
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





  goToProduct(star:any)
  {
    
    let products=star; 
    console.log("sasd",products)
  // let navigationExtras: NavigationExtras = {
  //   state: {
  //     user: products
  //   }
  // };
  localStorage.setItem('influencer_id', products)
  this.router.navigate(['/customer/stars/detail'],{
    queryParams:{products:JSON.stringify(products)}
   });
  }
}
