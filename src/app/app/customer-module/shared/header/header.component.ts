import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { vendorlogin } from 'src/shared/model/fake/fakeDataModel';
import { Abstract } from 'src/shared/helper/abstract';

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
  cat1Name: any;
  cat2Name: any;
  cat3Name: any;
  selectedIndex: any;
  gender: string | null;
  id: number;
  arr: any=[];

  constructor(public router: Router,
    private http: HttpClient, 
    private fb: FormBuilder) {
      this.gender=localStorage.getItem('gender');
      if(this.gender == '2')
      {
        this.id=7;
      }
      else if(this.gender == '1')
      {
        this.id=4;
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
    // this.getCategory1(id);
    
  }

  ValidateUser() {
      this.issubmitlogin = true;
      if (Abstract.handelnullundefind(this.objvendorlogin.Password, 'string') == ""
      ) {
        return
      }
      else {
        localStorage.removeItem("verifyAdd");
        this.router.navigateByUrl('/star/dashboard');
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
          // this.router.navigate(['']);
          localStorage.setItem('token',response.token);
          // localStorage.setItem('VendorId', response.data[0].id);
          // localStorage.setItem('username', response.data[0].username);
          // localStorage.setItem('email', response.data[0].email_address);
          // localStorage.setItem('mobile', response.data[0].phone_number);
        
          // this.full_name = localStorage.getItem('full_name');
          // console.log("vendor_id", this.vendor_id);
          // console.log("username", this.username);
          // console.log("full_name", this.full_name);
          // console.log("password", this.password);
          // console.log("user_profile", this.user_profile);
          // console.log("username",this.token);

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
    console.log(body);

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

    getCategory1(event:any)
    {
      this.token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      });
      let options = { headers: headers };

      let body = {
        "parent_id":event
      }
      console.log(body);
  
      this.http
        .post("http://139.59.21.147:8080/api/category/get_category", body,options)
        .subscribe((response: any) => {
          if (response.statuscode == '404') {
  
            alert(response.message);
          }
          else if (response.statuscode == '200') {
            console.log(response.data);
            this.getCat1=response.data;

          }
        });
      }  

      // changeCat1(event:any)
      // {
      //   console.log(event);
      //   this.cat1id=event.id;
      //   this.cat1Name=event.name;   
      //   this.selectedIndex = event;     
      //   this.getCategory2();
      // }

      getCategory2(event:any)
      {
        this.token = localStorage.getItem('token');
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.token
        });
        let options = { headers: headers };
  
        let body = {
          "parent_id":event
        }
        console.log(body);
    
        this.http
          .post("http://139.59.21.147:8080/api/category/get_category", body,options)
          .subscribe((response: any) => {
            if (response.statuscode == '404') {
    
              alert(response.message);
            }
            else if (response.statuscode == '200') {
              console.log(response.data);
              this.getCat2=response.data;

              }
            }
          );
      }

      changeCat2(event:any)
      {
          console.log(event);
          this.cat2id=event.id;
          this.cat2Name=event.name;
          this.selectedIndex = event;   
          // this.getCategory3();
          let customer={
            id:this.cat2id,
            cat1:this.cat1Name,
            cat2:this.cat2Name
            // cat3:this.cat3Name
        }
        console.log(customer);
        let navigationExtras: NavigationExtras = {
          state: {
            user: customer
          }
        };
        this.router.navigate(['/customer/beauty'], navigationExtras);
      }

    
}


