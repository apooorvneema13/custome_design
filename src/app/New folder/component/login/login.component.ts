import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { vendorlogin } from 'src/shared/model/fake/fakeDataModel';
import { Abstract } from 'src/shared/helper/abstract';
import { EmailValidator, FormBuilder,FormGroup,FormControl,Validators,FormControlName } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any= FormGroup;
  issubmitlogin: boolean = false;
  objvendorlogin: vendorlogin = new vendorlogin();
  LoginMsg: any;

  constructor(
    public router: Router,
    private http: HttpClient, 
    private fb: FormBuilder,
  ) { }

  userlogin = this.fb.group({
    email_address: ['', [Validators.required,
    Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
    // this.initForm();
  }

  initForm(): void {
   
  }
  isValidInput(email:any): boolean {
    
    return this.loginForm.controls[email].invalid &&
      (this.loginForm.controls[email].dirty || this.loginForm.controls[email].touched);
      
  }

  onLoginSubmit(){
alert()
  }

  // ValidateUser() {
  //   this.issubmitlogin = true;
  //   if (Abstract.handelnullundefind(this.objvendorlogin.Password, 'string') == ""
  //     || Abstract.handelnullundefind(this.objvendorlogin.UserName, 'string') == ""
  //   ) {
  //     return
  //   }
  //   else {
  //     localStorage.removeItem("verifyAdd");
  //     this.router.navigateByUrl('/star/dashboard');
  //   }
  // }

  onSubmit() {

   
    // console.log("data", data);
    // var username = data.email.value;
    // var password = data.password.value;

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

          //alert(response.message);
          this.LoginMsg = response.message;
        }
        else if (response.statuscode == '200') {

          
          console.log("response",response.data);
          alert("Login successful");
          // this.router.navigate(['/customer']);
          // localStorage.setItem('VendorSession', 'VendorSessionLogged');
          // localStorage.setItem('VendorId', response.data[0].id);
          // localStorage.setItem('username', response.data[0].username);
          // localStorage.setItem('email', response.data[0].email_address);
          // localStorage.setItem('mobile', response.data[0].phone_number);
          // localStorage.setItem('token', response.token);
          // localStorage.setItem('role_id', response.data[0].role_id);
          // localStorage.setItem('userProfile', response);
          // localStorage.setItem('password', response.data[0].password);
          // localStorage.setItem('full_name', response.data[0].full_name);
          // localStorage.setItem('profile_pic', response.data[0].profile_pic);


          // this.user_profile = localStorage.getItem('userProfile');
          // this.vendor_id = localStorage.getItem('VendorId');
          // this.username = localStorage.getItem('username');
          // this.token = localStorage.getItem('token');
          // this.password = localStorage.getItem('password');
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
}
