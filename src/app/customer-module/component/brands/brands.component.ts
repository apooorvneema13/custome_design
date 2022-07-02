import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands: any=[];
  gender: string | null;
  gen: string;

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getBrands();
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

  getBrands()
  {
    $('#cover-spin').show(0)
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
          $('#cover-spin').hide(0)
        }
      });
  }

  searchBrands(event:any="")
  {
    $('#cover-spin').show(0)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = {
      "brand_name":event
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
          $('#cover-spin').hide(0)
        }
      });
  }

  goToProduct(influ:any)
  {
   // $('#cover-spin').show(0)
    let products=influ;
    console.log("hii",products);
    let navigationExtras: NavigationExtras = {
    state: 
    {
      user: products
    }
    };
    localStorage.setItem('brand_name', products)
    this.router.navigate(['/customer/products-by-brands'], {
      queryParams:{products:JSON.stringify(products)}
      
    });
  }

}
