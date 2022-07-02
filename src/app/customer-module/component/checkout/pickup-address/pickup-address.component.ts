import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-address',
  templateUrl: './pickup-address.component.html',
  styleUrls: ['./pickup-address.component.scss']
})
export class PickupAddressComponent implements OnInit {
  addressDetails: any;
  active: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.getAddressDetails();
  }

  // getAddressDetails()
  // {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = { headers: headers };

  //   let body = {
  //     // "customer_id":localStorage.getItem('cust_id')
  //     "customer_id":"1"
  //   }
  //   console.log(body);

  //   this.http
  //     .post("http://139.59.21.147:8080/api/customer/get_address_details", body,options)
  //     .subscribe((response: any) => {
  //       if (response.statuscode == '404') {

  //         alert(response.message);
  //       }
  //       else if (response.statuscode == '200') {
  //         console.log(response.data);
  //         this.addressDetails=response.data;
  //         this.active=this.addressDetails.is_active;
  //       }
  //     });
  // }



}
