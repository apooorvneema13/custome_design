import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';
import { event } from 'jquery';
import { values } from 'lodash';
import { HeaderComponent } from 'src/app/customer-module/shared/header/header.component';

@Component({
  selector: 'app-products-by-brands',
  templateUrl: './products-by-brands.component.html',
  styleUrls: ['./products-by-brands.component.scss']
})
export class ProductsByBrandsComponent implements OnInit {
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
  Prices:any;
  filterPrice: any;
  filtercat_id: any;
  brand_name: string | null;
  influeId: any;
  selectedIndex_rand: any;
  selectedIndex_rang: any;
  cat_id: any;
  catData:any[] = [];
  msg: string;
  msg_brand: string;
  token: string | null;
  getColor: any;
  color: string;
  selectedIndex_color: string;
  productId: any;
  range: any;
  msgs_data: string;
  getProducts: never[];
  getdiscount: any;
  discount: string;
  selectedIndex_discount: string;
  

  constructor(
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute,
    // private header :HeaderComponent
    ) {
      
    const thing: any | null = this.router.getCurrentNavigation();
    if(thing.extras.state) 
    {
      this.BrandData = thing.extras.state?.user;    
    }
    console.log("test",this.BrandData);
    
    this.route.queryParams.subscribe((param)=>{   
    
      this.BrandData = localStorage.getItem("brand_name");
      this.getProductsByBrands();
      this.getCategory();
      this.getColoredata();
      this.getDiscountdata();

      this.selectBrand(event)
      // this.selectCategory(event)
      
      this.influeId = param  
      this.BrandData = JSON.parse( this.influeId.products)
      
      
      
    })
   }

  ngOnInit(): void {
    // this.router.navigate(['/dashboard'])
    // this.selectCategory(event)
   
    
    this.getProductsByBrands();
    this.getCategory();
    this.selectBrand(event)
    this.selectCategory(event)
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
        this.getdiscount = response.data;
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

  getProductsByBrands()
  {
    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "brand_name":this.BrandData
    }
    // console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/product_by_brand", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          // alert(response.message);
        }
        else if (response.statuscode == '200') {      
          this.getDetails=response.data;
          this.products=this.getDetails.products;        
          this.filtercat_id=this.products[0].cat_id
          this.brandImage=this.getDetails?.img;
          $('#cover-spin').hide(0)
        }
      });
  }

  getCategory()
  {

    $('#cover-spin').show(0)

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

      let body = {
        "brand_name":this.BrandData
      }
 

    this.http
      .post("http://139.59.21.147:8080/api/customer/product_brand_category", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          // alert(response.message);
        }
        else if (response.statuscode == '200') {
          
          // this.category=response.data;
          if ( response.data.length > 0) {
                
            this.category=response.data;
            this.msg =""
            } 
             else 
            {      
            this.msg ="NO DATA Found"
            this.category =[]
            } 
            $('#cover-spin').hide(0)
        }
      });
   
  }
  searchCategory(event: string="")
  {
    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
      let body = {
        "brand_name":this.BrandData
      }
    this.http
      .post("http://139.59.21.147:8080/api/customer/product_brand_category", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          // alert(response.message);
        }
        else if (response.statuscode == '200') {
          
          // this.category=response.data;

          if ( response.data.length > 0) {
                
            this.category=response.data;
            this.msg =""
            } 
             else 
            {      
            this.msg ="NO DATA Found"
            this.category =[]
            } 
            $('#cover-spin').hide(0)
        }
      });
  }



  searchBrand(event:string="")
  {
    $('#cover-spin').show(0)
    this.selectedIndex = event;  
    this.cat_id = event
    // this.catData = event

    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: headers };
    let body = {
      "brand_name":this.BrandData,
      "cat_id":event
    }
    this.http
      .post("http://139.59.21.147:8080/api/customer/product_by_brand", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          // alert(response.message);
        }
        else if (response.statuscode == '200') {       
          // this.getDetails=response.data;
          // this.products=this.getDetails.products;
                  
          // this.selectedIndex_rang = false



          if ( response.data.length > 0) {
                
            this.getDetails=response.data;
            this.products=this.getDetails.products;        
            this.brandImage = this.getDetails?.img;   
            this.msg_brand =""
            this.selectedIndex_rang = false
            } 
             else 
            {      
            this.msg_brand ="NO DATA Found" 
            this.selectedIndex_rang = false;          
            // this.getDetails=[];
            // this.products=[];        
            // this.brandImage = []
            } 
            $('#cover-spin').hide(0)
        }
      });
  }

  selectCategory(event:any){  
    $('#cover-spin').show(0)
    this.selectedIndex = event;  
    this.cat_id = event
    this.catData = event

    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: headers };
    let body = {
      "brand_name":this.BrandData,
      "cat_id":event
    }
    this.http
      .post("http://139.59.21.147:8080/api/customer/product_by_brand", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          // alert(response.message);
        }
        else if (response.statuscode == '200') {       
          // this.getDetails=response.data;
          // this.products=this.getDetails.products;


          if ( response.data.length > 0) {
                
            this.getDetails=response.data;
            this.products=this.getDetails.products;        
            this.brandImage = this.getDetails?.img;   
            this.msg_brand =""
            this.selectedIndex_rang = false
            } 
             else 
            {      
            this.msg_brand ="NO DATA Found" 
            this.selectedIndex_rang = false;          
            // this.getDetails=[];
            // this.products=[];        
            // this.brandImage = []
            } 





          // console.log("parents_id2",this.getDetails)          
          $('#cover-spin').hide(0)
        }
      });
  }
  priceBrand(){
    // location.reload();
    this.getProductsByBrands();
    this.getCategory();
    this.selectBrand(event)
    this.selectCategory(event)
    this.selectedIndex_rang = false
  }

  // price filter work api
  filterBrand(event:any){
    $('#cover-spin').show(0)
    console.log("niks", typeof this.catData);
    this.filterPrice = event.range
    this.selectedIndex_rang = event.range
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let body = {
      "brand_name":this.BrandData,
      "price":this.filterPrice ,      
      "cat_id":typeof this.catData ==="number"?this.cat_id:""
    } 
    this.http
      .post(this.url + "/api/customer/product_by_brand", body,options)
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
            this.products=this.getDetails.products;        
            this.brandImage = this.getDetails?.img;   
            this.msg_brand =""
            } 
             else 
            {      
            this.msg_brand ="NO DATA Found"           
            // this.getDetails=[];
            // this.products=[];        
            // this.brandImage = []
            } 

            $('#cover-spin').hide(0)



        
        }
      });


  }

  selectBrand(event:any)  
  {
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
          
          console.log("78",this.Prices)
          // this.products=this.getDetails.products;
          $('#cover-spin').hide(0)
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
          this.router.navigate(['/checkout-my-cart']);
        }
      });
  }


  


/********************************COLOR***********************************************/

getColoredata(event: string = '') {
  $('#cover-spin').show(0);

  this.token = localStorage.getItem('token');
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token':'',
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






  gotToProductDetail(event:any,data:any)
  {
    let id=event;
    console.log("45",event);
    console.log("45",data);
    let navigationExtras: NavigationExtras = {
      state: {
        user: id
      }
    };
    this.router.navigate(['/customer/product-description'],navigationExtras);
  }

}
