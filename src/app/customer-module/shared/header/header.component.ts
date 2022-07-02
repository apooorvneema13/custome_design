import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router, RouterEvent } from '@angular/router';
import { vendorlogin } from 'src/shared/model/fake/fakeDataModel';
import { Abstract } from 'src/shared/helper/abstract';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  LoginMsg: any;
  objvendorlogin: vendorlogin = new vendorlogin();
  issubmitlogin: boolean = false;
  openLogin:boolean=false;
  token: any;
  getCat1: any;
  getCat2:any;
  cat1id: any;
  cat2id: any;
  getCat3: any;
  cat3id: any;
  getCatt:any;
  cat1Name: any;
  cat2Name: any;
  cat3Name: any;
  selectedIndex: any;
  gender:any;
  arr: any=[];
  fashionId: number;
  lifestyle: number;
  brands: any;
  stars:any;
  url: any;

  constructor(public router: Router,
    private http: HttpClient, 
    private fb: FormBuilder) {
      this.gender=localStorage.getItem('gender');
      if(this.gender == '2')
      {
        this.fashionId=7;
        this.lifestyle=3;
      }
      else if(this.gender == '1')
      {
        this.fashionId=4;
        this.lifestyle=6;
      }
     }
    
  userlogin = this.fb.group({
    email_address: ['', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    password: ['', Validators.required]
  });

  registerCustomerForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    language: ['', Validators.required],
    password: ['', Validators.required],
    category_type:['1']
  });

  ngOnInit(): void {
   
    this.getBrands();
    this.getStars();  
  }

  ValidateUser() {
      this.issubmitlogin = true;
      if (Abstract.handelnullundefind(this.objvendorlogin.Password, 'string') == ""
      ) {
        return
      }
      else {
        localStorage.removeItem("verifyAdd");
        $('.modal-backdrop').remove();
     
      }
    }

  onSubmit() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body={
      email_address:this.userlogin.value.email_address,
      password:this.userlogin.value.password,
    }
    console.log(body);

    this.http
      .post("http://139.59.21.147:8080/api/customer/login", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
          this.LoginMsg = response.message;
        }
        else if (response.statuscode == '200') {

          
          console.log("response",response.data);
          alert(response.message);
          location.reload();
          $('.modal-backdrop').remove();


          // this.router.navigate(['']);
          localStorage.setItem('token',response.token);
          localStorage.setItem('cust_id', response.data[0].id);
         

        }

      });


  }

  createCustomer()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    let body = this.registerCustomerForm.value;
   

    this.http
      .post("http://139.59.21.147:8080/api/customer", body,options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);
        }
        else if (response.statuscode == '200') {
          console.log(response.data);
          alert(response.message);
          location.reload();
        }
      });
    }  

    getCategory1(event:any="")
    {
      if(event == '5')
      {
        // this.headerName="Beauty";
        localStorage.setItem('type',"Beauty");
      }
      else if(event == '7' || event == '4')
      {
        localStorage.setItem('type',"Fashions");
      }
      else if(event == '3' || event == '6')
      {
        localStorage.setItem('type',"Lifestyle");
      }
      else
      {

      }
      
        this.token = localStorage.getItem('token');
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.token
        });
        let options = { headers: headers };
  
        let body = {
          "parent_id":event
        }
      
    
        this.http
          .post("http://139.59.21.147:8080/api/category/get_category", body,options)
          .subscribe((response: any) => {
            if (response.statuscode == '404') {
              alert(response.message);
            }
            else if (response.statuscode == '200') {        
              this.getCat1=response.data;  
              for(var i=0;i<this.getCat1.length;i++)
              {
                this.getCategory2(this.getCat1[i].id);
              }
            }
          });     
    }  


      getCategory2(event:any)
      {
        this.arr.length = 0;
        this.token = localStorage.getItem('token');
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.token
        });
        let options = { headers: headers };
  
          let body = {
            "parent_id":event
          }
          this.http
            .post("http://139.59.21.147:8080/api/category/get_category", body,options)
            .subscribe((response: any) => {
              if (response.statuscode == '404') {
      
                alert(response.message);
              }
              else if (response.statuscode == '200') {
                this.getCat2 = response.data;      

                for(var j=0;j<this.getCat2.length;j++)
                {
                    this.arr.push(this.getCat2[j]);
                }                
                }               
              }
            );
      
      }

      goToBeauty(event:any)
      {
      
          this.cat2id=event.id;
          this.cat2Name=event.name;
          this.selectedIndex = event;   
          
          let products={
            id:this.cat2id,        
            cat2:this.cat2Name          
        }
       
        // let navigationExtras: NavigationExtras = {
        //   state: {
        //     user: customer
        //   }
        // };
        localStorage.setItem('category_id', this.cat2id)
        this.router.navigate(['/products'], {
          queryParams:{products:JSON.stringify(products)}
         
         });
       
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
              this.brands=response.data;
            }
          });
      }
    
      searchBrands(event:any="")
      {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = { headers: headers };
    
        let body = {
          "brand_name":event
        } 
    
        this.http
          .post("http://139.59.21.147:8080/api/customer/all_brands", body,options)
          .subscribe((response: any) => {
            if (response.statuscode == '404') {    
              alert(response.message);
            }
            else if (response.statuscode == '200') {              
              this.brands=response.data;
            }
          });
      }

      getStars()
      {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = { headers: headers };
    
        let body = {
          "influencer_name":""
        }   
        this.http
          .post("http://139.59.21.147:8080/api/customer/all_influencers", body,options)
          .subscribe((response: any) => {
            if (response.statuscode == '404') {
    
              alert(response.message);
            }
            else if (response.statuscode == '200') {
              console.log(response.data);
              this.stars=response.data;
            }
          });
      }
    
      searchStars(event:any="")
      {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        let options = { headers: headers };
    
        let body = {
          "influencer_name":event
        }    
        this.http
          .post("http://139.59.21.147:8080/api/customer/all_influencers", body,options)
          .subscribe((response: any) => {
            if (response.statuscode == '404') {    
              alert(response.message);
            }
            else if (response.statuscode == '200') {
              console.log(response.data);
              this.stars=response.data;              
            }
          });
      }

      goToProduct(brand:any)
      {
      
        this.selectedIndex= brand
        let products=brand;
      localStorage.setItem('brand_name', products)
      // let navigationExtras: NavigationExtras = {
      //   state: {
      //     user: products
      //   }
      // }
       this.router.navigate(['/customer/products-by-brands'],
       {
        queryParams:{products:JSON.stringify(products)}
       })
      }

      goToStarDetail(starId:any){
        
        this.selectedIndex= starId
        let products=starId; 
      //   let navigationExtras: NavigationExtras = {
      //   state: {
      //     user: products
      //   }
      // };
      //   console.log("jasjdnsaj",navigationExtras);
        localStorage.setItem('influencer_id', products)
         this.router.navigate(['/customer/stars/detail'],
         {
          queryParams:{products:JSON.stringify(products)}
         });
        
      }
}


