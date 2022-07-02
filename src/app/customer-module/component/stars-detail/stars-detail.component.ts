import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { event, param } from 'jquery';
import { ActivatedRoute,Params  } from '@angular/router'

// let  baseUrl = (window.location).href;
// var stuff = baseUrl.split('/');
// var id = stuff[stuff.length-1];
@Component({
  selector: 'app-stars-detail',
  templateUrl: './stars-detail.component.html',
  styleUrls: ['./stars-detail.component.scss']
})
export class StarsDetailComponent implements OnInit {

  BrandData: any;
  products: any;
  getDetails: any;
  brandImage: any;
  url="http://139.59.21.147:8080";
  category: any;
  selectedIndex: any;
  gender: any;
  gen: string;
  productData:any;
  starProducts:any;
  brands:any;
  getCat: any;
  cat: any;
  selectedIndex1: any;
  brand: any;
  influeId: any;
  influencerId: any |null [] = [];
  Prices: any;
  selectedIndex_rang: any;
  filterPrice: any;
  catData: any;
  token: any ;
  msg: string;
  msg_brand: string;
  msg_product: string;
  getColor: any;
  color: string;
  selectedIndex_color: string;
  brand_name: any;
  range: any;
  msgs_data: string;
  getProducts: never[];
  getdiscount: any;
  discount: string;
  selectedIndex_discount: string;
  


  constructor(
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute
    ) {
    //  console.log("12145",parseInt(this.router.getCurrentNavigation()))
    // const thing: any | null = this.router.getCurrentNavigation();    
    // console.log("12145",thing)
    // if(thing.extras.state) 
    // {
    //   this.BrandData = thing.extras.state?.user;
    //   console.log("1546",this.BrandData)
    // }   

    
    
   }

  ngOnInit(): void {

    this.route.queryParams.subscribe((param)=>{
      console.log("param",param);
      
     
      this.influencerId = localStorage.getItem('influencer_id');
      this.selectPriceFilter(event)
      this.getProductsByBrands();
      this.getBrands();
      this.getCategory();
      this.getColoredata();
      this.getDiscountdata();
      this.influeId = param 
      this.influencerId = this.influeId.products 
      // console.log(",.,.",this.influeId.products)
      

      console.log("dataada",this.influencerId);
      
    })


    // this.getCategory();
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
  searchCategory(event: string="")
  {

    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "influencer_id":this.influencerId,
      "category_name":event
    }
    // console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/influencer_recommend_category", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // console.log("allche",response.data);
          // this.getCat = response.data;
          if ( response.data.length > 0) {
       
           
            this.getCat=response.data;
          this.msg =""
          } 
           else 
          {      
        
          this.msg = "NO DATA Found"
          this.getCat = []
          } 

          $('#cover-spin').hide(0)
        }
      });
  }


  searchBrand(event:string="")
  {

    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "influencer_id":this.influencerId,
      "brand_name":event
    }
  

    this.http
      .post("http://139.59.21.147:8080/api/customer/influencer_recommend_brands", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // console.log(response.data);
          // this.brands = response.data;
         
          if ( response.data.length > 0) {
           
            this.brands=response.data;
          this.msg_brand =""
          } 
           else 
          {      
          this.msg_brand = "NO DATA Found"
          this.brands = []
          } 
          $('#cover-spin').hide(0)
        }
      });
  }

  selectPriceFilter(event:any){
    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: headers };
    let body = {
      // "brand_name":this.BrandData,
      "parent_id": this.selectedIndex
    }
 
    this.http
      .post("http://139.59.21.147:8080/api/customer/filter_price", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {       
          this.Prices=response.data;          
          $('#cover-spin').hide(0)
          // this.products=this.getDetails.products;
        }
      });
  }

  filterBrand(event:any){
    //  this.selectedIndex_rang= event
    $('#cover-spin').show(0)
    this.filterPrice = event.range
    this.selectedIndex_rang = event.range
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: headers };
    let body = {
      "influencer_id":this.influencerId ,
      "brand_name":this.brand === "undefined"?"":this.brand,
      "price":this.filterPrice ,      
      "cat_id":typeof this.catData ==="number"?this.cat:""
    } 
    this.http
      .post(this.url + "/api/customer/influencer_recommend_products", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {       
          // this.getDetails=response.data;
          // this.products=this.getDetails.products;        
          // this.brandImage = this.getDetails?.img;               
          if ( response.data.length > 0) {
           
            this.getDetails=response.data;
            this.msg_product =""
          } 
           else 
          {      
          this.msg_product = "NO DATA Found"
          this.getDetails = []
          } 
        // this.selectedIndex_rang=false
        $('#cover-spin').hide(0)
        }
      });
  }

  selectCategory(event:any)
  {
    this.selectedIndex = event;   
    this.cat=event;
    this.catData = event
    // console.log(this.cat);
    this.getProductsByBrands();
    this.selectedIndex_rang=false
    this.selectedIndex1=false
  }

  selectBrand(event:any)
  {
    this.selectedIndex1 = event;   
    this.brand=event;
    // console.log(this.brand);
    this.getProductsByBrands();
  } 




  getProductsByBrands()
  {
    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
     
      "influencer_id":this.influencerId,
      "cat_id":this.cat?this.cat:"",
      "brand_name":this.brand?this.brand:""
    }
    // console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/influencer_recommend_products", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
     
          if ( response.data.length > 0) {           
            this.getDetails=response.data;
            this.msg_product =""
          } 
           else 
          {      
          this.msg_product = "NO DATA FOUND"
          this.getDetails = []
          } 
          $('#cover-spin').hide(0)
        }
      });
  }

 
  gotToProductDetail(event:any)
  {
    let id=event;
    // console.log(id);
    let navigationExtras: NavigationExtras = {
      state: {
        user: id
      }
    };
   
    this.router.navigate(['/customer/product-description'],navigationExtras);
  }
 
  getCategory()
  {

    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "influencer_id":this.influencerId
    }
    // console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/influencer_recommend_category", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // console.log("allche",response.data);
          // this.getCat=response.data;
          // this.getCat = response.data;
          if ( response.data.length > 0) {
            
            this.getCat=response.data;
          this.msg =""
          } 
           else 
          {      
           
          this.msg = "NO DATA Found"
          this.getCat = []
          } 
          $('#cover-spin').hide(0)
        }
      });
  }

  getBrands()
  {

    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "influencer_id":this.influencerId

    }
   
     this.http
      .post("http://139.59.21.147:8080/api/customer/influencer_recommend_brands", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // console.log(response.data);
          // this.brands = response.data;
          // this.getCat = response.data;
          if ( response.data.length > 0) {
          
            this.brands=response.data;
          this.msg_brand =""
          } 
           else 
          {      
      
          this.msg_brand = "NO DATA Found"
          this.brands = []
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
  parent_id: this.products,
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










/********************************Discount***********************************************/

getDiscountdata(event: string = '') {
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
        this.getdiscount= response.data;
        $('#cover-spin').hide(0);
      }
    });
}


// color

selectDiscount(event: string) {
console.log(event);
if (event) {
  this.discount = event;
} else {
  this.discount = '';
}
//   this.selectedIndex = event;
//  this.getProductDetails();

//http://139.59.21.147:8080/api/customer/colors

this.selectedIndex_discount = event;
let headers = new HttpHeaders({
  'Content-Type': 'application/json',
});
let options = { headers: headers };
let body = {
  parent_id: this.products,
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
          this.router.navigate(['/checkout-my-cart']);
        }
      });
  }

  


}
