import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abstract } from 'src/shared/helper/abstract';
import { vendorlogin, Vendormodel } from 'src/shared/model/fake/fakeDataModel';
import { VendorService } from 'src/shared/services/vendor/vendor.service';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { EmailValidator, FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from "@angular/common/http";

var api_Url='http://139.59.21.147:8080';

@Component({
  selector: 'app-starlogin',
  templateUrl: './starlogin.component.html',
  styleUrls: ['./starlogin.component.scss']
})
export class StarloginComponent implements OnInit {
  full_name:any
  password:any
  token:any
  vendor_id:any
  username:any
  user_profile:any
  LoginMSg:any
  objvendorlogin: vendorlogin = new vendorlogin();
  objVendormodel: Vendormodel = new Vendormodel();
  isVendorLoginShown: boolean = true;
  isVendorRegisterShown: boolean = false;
  isVendorRegisterStep1: boolean = true;
  isVendorRegisterStep2: boolean = false;
  isVendorRegisterStep3: boolean = false;
  isVendorRegisterStep4: boolean = false;
  isVendorRegisterStep5: boolean = false;
  isActiveDownloadbtn: boolean = false;
  issubmitreg: boolean = false;
  issubmittab1: boolean = false;
  issubmitlogin: boolean = false;
  isDownloadTOC: boolean = false;
  isUploadTOC: boolean = false;
  displayStyle = "none";

  constructor(public router: Router,
     private vendorservice: VendorService,
     private http: HttpClient,
     public formBuilder: FormBuilder,
     ) { }

  ngOnInit(): void 
  {
    // 
    // setTimeout(() => {
    //   this.router.navigateByUrl('/star');  
    // }, 20);
    
  }

  // editShopform = this.formBuilder.group({
    
  //   username: [''],

  // });


  onSubmit(data:any)
  {
    alert()

     //this.showToast('Error', 'Title', 'Something went wrong');
//alert(data);
   console.log("data",data);
   var username=data.email.value;
   var password=data.password.value;
   this.http
      .post(api_Url+'/api/influencer/login', {username:username,password:password})
    .subscribe((response:any) => { 
      if(response.statuscode=='404') 

      {
    
       //alert(response.message);
       this.LoginMSg=response.message;
      }
      else if(response.statuscode=='200')
      {  

        this.router.navigate(['/vendor/dashboard']);
          //console.log("response",response.data[0].id);
           localStorage.setItem('VendorSession','VendorSessionLogged');
         localStorage.setItem('VendorId',response.data[0].id);
         localStorage.setItem('username',response.data[0].username);
         localStorage.setItem('email',response.data[0].email_address);
         localStorage.setItem('mobile',response.data[0].phone_number);
         localStorage.setItem('token',response.token);
         localStorage.setItem('role_id',response.data[0].role_id);
         localStorage.setItem('userProfile',response);
         localStorage.setItem('password',response.data[0].password);
         localStorage.setItem('full_name',response.data[0].full_name);
         

         this.user_profile = localStorage.getItem('userProfile');
          this.vendor_id=localStorage.getItem('VendorId');
          this.username=localStorage.getItem('username');
          this.token=localStorage.getItem('token');
          this.password=localStorage.getItem('password');
          this.full_name=localStorage.getItem('full_name');
          console.log("vendor_id",this.vendor_id);
          console.log("username",this.username);
          console.log("full_name",this.full_name);
          console.log("password",this.password);
          console.log("user_profile",this.user_profile);
          // console.log("username",this.token);

      }
    
      });


  }






  UploadDocument() {
    this.isActiveDownloadbtn = true;
  }

  DownloadTOC() {
    this.isDownloadTOC = true;
  }

  UploadTOC() {
    this.isUploadTOC = true;
  }

  Closepopup() {
    this.displayStyle = "none";
    this.isVendorLoginShown = true;
    this.isVendorRegisterShown = false;
  }

  AddVendor() {

    this.vendorservice.AddVendor(this.objVendormodel).toPromise().then((response) => {
      if (response.statuscode == 200) {
        // this.IsOpenSuccessfully = true;
        // let userid = 0;
        if (response.data.length > 0) {
        }

      }
      else {
        // this.showToast(Severity.ERROR, Title.ERROR, response.message);
        // this.btnActiveloading = false;
      }
    },
      (error) => {
        //this.btnActiveloading = false;
        console.log("Add Vendor" + JSON.stringify(error));
      });
  }

  goToRegister() {
    this.isVendorLoginShown = false;
    this.isVendorRegisterShown = true;
    this.isVendorRegisterStep1 = true;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;

  }

  onClickStep1() {
    this.issubmitreg = true
    // if (
    //   Abstract.handelnullundefind(this.objVendormodel.VendorName, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.IndustryID, 'number') == 0
    //   || Abstract.handelnullundefind(this.objVendormodel.VendorEmail, 'string') == ""
    // ) {
    //   return;
    // }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = true;
    this.isVendorRegisterStep3 = false;
  }

  onClickStep2() {
    this.issubmittab1 = true;
    // if (Abstract.handelnullundefind(this.objVendormodel.FullName, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.UserName, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.Password, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.PhoneNumber, 'string') == ""
    // ) {
    //   return
    // }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = true;
  }

  onClickStep3() {
    this.issubmittab1 = true;
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;
    this.isVendorRegisterStep4 = true;
  }
  onClickStep4() {
    this.issubmittab1 = true;
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;
    this.isVendorRegisterStep4 = false;
    this.isVendorRegisterStep5 = true;
  }

  ValidateUser() {
    this.issubmitlogin = true;
    if (Abstract.handelnullundefind(this.objvendorlogin.Password, 'string') == ""
      || Abstract.handelnullundefind(this.objvendorlogin.UserName, 'string') == ""
    ) {
      return
    }
    else {
      localStorage.removeItem("verifyAdd");
      this.router.navigateByUrl('/star/dashboard');
    }
  }
}
