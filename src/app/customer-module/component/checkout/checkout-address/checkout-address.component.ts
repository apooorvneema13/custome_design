import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  gender: string | null;
  gen: string;
  addressDetails: any;
  cust_id: any;
  cust_info: any;
  param: { salutation: any; first_name: any; last_name: any; address: any; postcode: any; phone_number: any; is_active: number; customer_id: any; };
  getCartList: any;
  total: any;
  url:"http://139.59.21.147:8080";
  addressObj: any;

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  addressForm = this.formBuilder.group({
    salutation: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    address: ['', Validators.required],
    postcode: ['', Validators.required],
    phone_number: ['', Validators.required],
    is_active: 1,
    customer_id: localStorage.getItem('cust_id')
  })

  ngOnInit(): void {
    this.getAddressDetails();
    this.getMyCartList();
  }


  removeItem(products:any)
  {



    // let text = "Press a button!\nEither OK or Cancel.";
    // if (confirm(text) == true) {
    //    text = true;
    // } else {
    //     text = false;
    // }


    var result = confirm("Want to delete?");
    if(result){


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
          // this.getMyCartList();
        }
       
      });
    }
  }

  
  getAddressDetails()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "customer_id":localStorage.getItem('cust_id')
      // "customer_id":"1"
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/get_address_details", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.addressDetails=response.data;
        }
      });
  }

  selectCus(event:any)
  {
    if(event.is_active == '1')
    {
      this.cust_info=event;
      console.log(this.cust_info);
    }
   
  }


  addAddress()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    // let body = this.addressForm.value;
    if(!this.cust_info)
    {
      this.param = this.addressForm.value;
      console.log("inif",this.param);
    }
    else
    {
      this.param =
      {
        salutation: this.addressForm.value.salutation,
        first_name: this.cust_info.first_name,
        last_name: this.cust_info.last_name,
        address: this.cust_info.address,
        postcode: this.cust_info.postcode,
        phone_number: this.cust_info.phone_number,
        is_active: 1,
        customer_id: this.cust_info.id
      }  
      console.log("inelse",this.param);
    }
   
    console.log(this.param);

    this.http
      .post("http://139.59.21.147:8080/api/customer/add_address_details", this.param,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          alert(response.message);
          localStorage.setItem('address_id',response.data[0].id);
          this.router.navigate(['/payment']);
        }
      });
  }

  getMyCartList()
  {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      let body = {
        "user_id":localStorage.getItem('cust_id')
        // "user_id":"1"
      }
      console.log(body);
  
      this.http
        .post("http://139.59.21.147:8080/api/customer/my_cart", body,options)
        .subscribe((response: any) => {
          if (response.statuscode == '404') {
  
            alert(response.message);
          }
          else if (response.statuscode == '200') {
            console.log(response.data);
            this.getCartList=response.data.carts;
            this.total=response.data.total;
            console.log(this.getCartList);
            console.log(this.total);
          }
        });
  }

}
