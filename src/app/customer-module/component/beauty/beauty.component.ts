import {
  HttpClient,
  HttpHeaders,
  JsonpClientBackend,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { NavigationExtras, RouterEvent } from '@angular/router';
import { ComponentsServicesService } from '../../services/components-services.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss'],
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
  url = 'http://139.59.21.147:8080';
  product_id: any;
  selectedIndex: any;
  selectedIndex1: any;
  selectedIndex2: any;
  type: string | null;
  gender: string | null;
  gen: string;
  category_id: string | null;
  category_param: Params;
  selectedIndex_rang: string;
  categort_name: any;
  msg: string;
  msgs: string;
  msgs_data: string;
  color: string;
  selectedIndex_color: string;
  getColor: any;
  selectedIndex_discount: string;
  discount: string;
  products: any;
  getdiscount: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private getColorsService:ComponentsServicesService
  ) {
    const thing: any | null = this.router.getCurrentNavigation();
    if (thing.extras.state) {
      // this.productId = (thing.extras.state?.user.id)?(thing.extras.state?.user.id):"623";
      this.productId = thing.extras.state?.user.id;
      console.log(this.productId);
      // this.cat1 = thing.extras.state?.user.cat1;
      this.cat2 = thing.extras.state?.user.cat2;
      console.log(this.cat2);

      // this.cat3 = thing.extras.state?.user.cat3;
    }

    this.type = localStorage.getItem('type');
    console.log(this.productId);
  }

  ngOnInit(): void {
    // amit
    this.route.queryParams.subscribe((param: any) => {
      const r = JSON.parse(param.products);

      this.categort_name = r.cat2;
      let categort_id = r.id;
      this.category_id = localStorage.getItem('category_id');
      this.productId = categort_id;

      if (this.productId != undefined) {
        this.getCategoryDetails();
        this.getBrandDetails();
        this.getPriceDetails();
        this.getColoredata();
        this.getDiscountdata();
        this.getProductDetails();
      }

      console.log('dataada', this.categort_name);
    });
    this.gender = localStorage.getItem('gender');
    if (this.gender == '2') {
      this.gen = 'KING';
    } else if (this.gender == '1') {
      this.gen = 'QUEEN';
    }
  }

  getCategoryDetails() {
    $('#cover-spin').show(0);
    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    });
    let options = { headers: headers };

    let body = {
      parent_id: this.productId,
      category_name: '',
    };
    console.log(body);

    this.http
      .post(
        'http://139.59.21.147:8080/api/customer/filter_category',
        body,
        options
      )
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          // this.getCategory=response.data;

          if (response.data.length > 0) {
            this.getCategory = response.data;
            this.msg = '';
          } else {
            this.msg = 'NO DATA Found';
            this.getCategory = [];
          }
          $('#cover-spin').hide(0);
        }
      });
  }

  gotToProductDetail(event: any, data: any) {
    let id = event;
    console.log('45', event);
    console.log('45', data);
    let navigationExtras: NavigationExtras = {
      state: {
        user: id,
      },
    };

    this.router.navigate(['/customer/product-description'], navigationExtras);

    //  this.router.navigate(['/customer/product-description'],
    //  {
    //   queryParams:{products:JSON.stringify(id)}
    //  });
  }
  searchCategory(event: string = '') {
    $('#cover-spin').show(0);

    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    });
    let options = { headers: headers };

    let body = {
      parent_id: this.productId,
      category_name: event,
    };
    this.http
      .post(
        'http://139.59.21.147:8080/api/customer/filter_category',
        body,
        options
      )
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          // this.getCategory=response.data;
          $('#cover-spin').hide(0);

          if (response.data.length > 0) {
            this.getCategory = response.data;
            this.msg = '';
          } else {
            alert(2);
            this.msg = 'NO DATA Found';
            this.getCategory = [];
          }
        }
      });
  }

  searchBrand(event: string = '') {
    $('#cover-spin').show(0);

    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    });
    let options = { headers: headers };

    let body = {
      parent_id: this.productId,
      brand_name: event,
    };
    console.log(body);

    this.http
      .post(
        'http://139.59.21.147:8080/api/customer/filter_brands',
        body,
        options
      )
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          // this.getBrands=response.data;
          if (response.data.length > 0) {
            this.getBrands = response.data;
            this.msgs = '';
          } else {
            // alert(2)
            this.msgs = 'NO DATA Found';
            this.getBrands = [];
          }
          $('#cover-spin').hide(0);
        }
      });
  }

  getBrandDetails() {
    $('#cover-spin').show(0);

    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    });
    let options = { headers: headers };

    let body = {
      parent_id: this.productId,
      brand_name: '',
    };
    console.log(body);

    this.http
      .post(
        'http://139.59.21.147:8080/api/customer/filter_brands',
        body,
        options
      )
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          // this.getBrands=response.data;
          // console.log(this.getBrands);
          if (response.data.length > 0) {
            this.getBrands = response.data;
            this.msgs = '';
          } else {
            // alert(2)
            this.msgs = 'NO DATA Found';
            this.getBrands = [];
          }
          $('#cover-spin').hide(0);
        }
      });
  }
/********************************COLOR***********************************************/

  getColoredata(event: string = '') {
    $('#cover-spin').show(0);

    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
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

  getPriceDetails(event: string = '') {
    $('#cover-spin').show(0);

    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    });
    let options = { headers: headers };

    let body = {
      parent_id: this.productId,
    };
    console.log(body);

    this.http
      .post(
        'http://139.59.21.147:8080/api/customer/filter_price',
        body,
        options
      )
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          this.getPrice = response.data;

          $('#cover-spin').hide(0);
        }
      });
  }

  selectCategory(event: any) {
    console.log(event);

    if (event) {
      this.product_id = event;
    } else {
      this.product_id = '';
    }
    this.selectedIndex1 = event;
    this.getProductDetails();
  }

  // price filter

  selectRange(event: string) {
    console.log(event);
    if (event) {
      this.range = event;
    } else {
      this.range = '';
    }
    //   this.selectedIndex = event;
    //  this.getProductDetails();

    this.selectedIndex_rang = event;
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
      .post(this.url + '/api/customer/data', body, options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          if (response.data.length > 0) {
            this.getProducts = response.data;
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

  // color


  /// select brand
  selectBrand(event: string) {
    console.log(event);

    if (event) {
      this.brand_name = event;
    } else {
      this.brand_name = '';
    }
    console.log(this.brand_name);
    this.selectedIndex2 = event;
    this.getProductDetails();
  }

  getProductDetails() {
    $('#cover-spin').show(0);

    this.token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    });
    let options = { headers: headers };

    let body = {
      parent_id: this.product_id ? this.product_id : this.productId,
      price: this.range,
      brand: this.brand_name,
    };
    console.log(body);

    this.http
      .post('http://139.59.21.147:8080/api/customer/data', body, options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          if (response.data.length > 0) {
            // alert(1)

            this.getProducts = response.data;
            this.range = '';
            this.brand_name = '';
            this.msgs_data = '';
          } else {
            // alert(2)
            this.msgs_data = 'NO DATA Found';
            this.getProducts = [];
          }
          $('#cover-spin').hide(0);
        }
      });
  }

  addToCart(product_id: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    let body = {
      user_id: localStorage.getItem('cust_id'),
      product_id: product_id,
      quantity: '1',
    };
    console.log(body);

    this.http
      .post(
        'http://139.59.21.147:8080/api/customer/add_to_my_cart',
        body,
        options
      )
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        } else if (response.statuscode == '200') {
          alert(response.message);
          this.router.navigate(['/checkout-my-cart']);
        }
      });
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




  
}
