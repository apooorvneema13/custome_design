import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands: any=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "brand_name":""
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/all_brands", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          this.brands=response.data;
        }
      });
  }

}
