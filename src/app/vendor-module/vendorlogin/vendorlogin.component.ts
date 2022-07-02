import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Abstract } from 'src/shared/helper/abstract';
import { vendorlogin, Vendormodel } from 'src/shared/model/fake/fakeDataModel';
import { UserService } from 'src/shared/services/user/user.service';
import { VendorService } from 'src/shared/services/vendor/vendor.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
//let alertifyjs:any;
//import { alertifyjs } from 'alertifyjs';
//import 'alertify/build/css/alertify.css';

//import { MessageService } from 'primeng/api';
//import { NotificationService } from './notification.service'
//import { Constants } from '../helper';
var api_Url = 'http://139.59.21.147:8080';

import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.scss']
})
export class VendorloginComponent implements OnInit {
  shopID_respnse:any;
  full_name: any
  password: any
  user_profile: any
  objVendormodel: Vendormodel = new Vendormodel();
  objvendorlogin: vendorlogin = new vendorlogin();
  isVendorLoginShown: boolean = true;
  isVendorRegisterShown: boolean = false;
  isVendorRegisterStep1: boolean = true;
  isVendorRegisterStep2: boolean = false;
  isVendorRegisterStep3: boolean = false;
  issubmitreg: boolean = false;
  issubmittab1: boolean = false;
  isActiveDownloadbtn: boolean = false;
  isDownloadTOC: boolean = false;
  isUploadTOC: boolean = false;
  issubmitlogin: boolean = false;
  displayStyle = "none";
  Uploadmsg: any;
  UploadmsgForDire: any;
  UploadmsgForcerticate: any;
  UploadmsgForOrm: any;  
  phone_number:any
  vendor_id: any;
  username: any;
  stringJson = '';
  kraFile: any;
  inCorpdoc: any;
  diretor: any;
  Oem: any;
  loginForm: any;
  token: any;
  KraStatus: boolean = false;
  CountDocLimit: any;
  IncorpStatus: boolean = false;
  DirectorStatus: boolean = false;
  OrmStatus: boolean = false;
  isChecked: boolean = false;
  isDisabled: any;
  LoginMSg: any;
  countbaba: any;
  shopId:any;


  //@ViewChild('content') content: any;
  constructor(
    private vendorservice: VendorService,
    //private messageService: MessageService,
    //   kraFile: File,
    //private modalService: NgbModal
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.Uploadmsg = '';
    this.isDisabled = true;
    this.countbaba = 0;

  }

  onFileChanged(event: any) {
    this.kraFile = event.target.files[0];
    this.UploadDocument(this.kraFile);
    console.log("file", this.kraFile);
  }

  onFileChangedIncop(event: any) {
    this.inCorpdoc = event.target.files[0];
    this.UploadIncorpo(this.inCorpdoc)
    console.log("file", this.inCorpdoc);
  }

  onFileChangedDirect(event: any) {
    this.diretor = event.target.files[0];
    this.UploadDirectors(this.diretor)
    console.log("file", this.diretor);
  }

  onFileChangedocm(event: any) {
    this.Oem = event.target.files[0];
    this.UploadOEM(this.Oem)
    console.log("file", this.Oem);
  }



  /*showToast(severity: any, title: any, toastMessagae: any) {
   this.messageService.add({ severity: severity, summary: title, detail: toastMessagae});
 }

 clearToast() {
   this.messageService.clear();
 }*/
  /*******************************Login***********************************************************/
  onSubmit(data: any) {

    //this.showToast('Error', 'Title', 'Something went wrong');
    //alert(data);
    console.log("data", data);
    var username = data.email.value;
    var password = data.password.value;
    this.http
      .post(api_Url + '/api/users/login', { username: username, password: password })
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          //alert(response.message);
          this.LoginMSg = response.message;
        }
        else if (response.statuscode == '200') {
          ;
          this.router.navigate(['/vendor/dashboard']);
          this.getshopId();
          // console.log("response",this.getshopId());
          localStorage.setItem('VendorSession', 'VendorSessionLogged');
          localStorage.setItem('VendorId', response.data[0].id);
          localStorage.setItem('username', response.data[0].username);
          localStorage.setItem('email', response.data[0].email_address);
          localStorage.setItem('mobile', response.data[0].phone_number);
          localStorage.setItem('token', response.token);
          localStorage.setItem('role_id', response.data[0].role_id);
          localStorage.setItem('userProfile', response);
          localStorage.setItem('password', response.data[0].password);
          localStorage.setItem('full_name', response.data[0].full_name);
          localStorage.setItem('shopId', response.data[0].shopId);

          this.shopId = localStorage.getItem('shopId');
          this.phone_number = localStorage.getItem('mobile');
          this.user_profile = localStorage.getItem('userProfile');
          this.vendor_id = localStorage.getItem('VendorId');
          this.username = localStorage.getItem('username');
          this.token = localStorage.getItem('token');
          this.password = localStorage.getItem('password');
          this.full_name = localStorage.getItem('full_name');
          console.log("vendor_id", this.vendor_id);
          console.log("username", this.username);
          console.log("full_name", this.full_name);
          console.log("password", this.password);
          console.log("user_profile", this.user_profile);
          // console.log("username",this.token);

        }

      });


  }
  /*******************************Login***********************************************************/

  /*******************************Registration***********************************************************/


  onRegistrationSubmit(registration: any) {
    var name_of_business = this.objVendormodel.VendorName;
    var industry = this.objVendormodel.IndustryID;
    var email_address = this.objVendormodel.VendorEmail;
    var contact_person_name = this.objVendormodel.FullName;
    var phone_number = this.objVendormodel.PhoneNumber;
    var username = this.objVendormodel.UserName;
    var password = this.objVendormodel.Password;
    //console.log("data",registration)
    //console.log("data",{username:username,password:password,email_address:email_address,name_of_business:name_of_business,industry:industry,contact_person_name:contact_person_name,phone_number:phone_number});



    this.http
      .post(api_Url + '/api/users/signup', { username: username, password: password, email_address: email_address, name_of_business: name_of_business, industry: industry, contact_person_name: contact_person_name, phone_number: phone_number })
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          //alert('404');
          // this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")

          alert(response.message);
          //  console.log("resp",response);
        }
        else if (response.statuscode == '200') {
          
          // alert(response.data[0].id);
          this.isVendorRegisterStep1 = false;
          this.isVendorRegisterStep2 = false;
          this.isVendorRegisterStep3 = true;
          localStorage.setItem('VendorId',response.data[0].id);
          // alert(response.message);
          console.log("resp", response.data[0].id);
          // this.router.navigate(['/vendor/dashboard']);
        }
      });

  }
  getshopId(){
    
    this.token = localStorage.getItem('token');   
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };
    this.http
      .get("http://139.59.21.147:8080/api/shop/", options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          this.shopID_respnse = response.data;
          console.log("response.data",response)
          localStorage.setItem('ShopId', response.data[0].id)
        }
        });
        
  }



  uploaddocmentSubmit(uploaddocment: any) {

    //alert();

  }




  goToRegister() {
    this.isVendorLoginShown = false;
    this.isVendorRegisterShown = true;
    this.isVendorRegisterStep1 = true;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;

  }

  onClickStep1() {
    //alert(this.objVendormodel.VendorName);
    this.issubmitreg = true
    if (
      Abstract.handelnullundefind(this.objVendormodel.VendorName, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.IndustryID, 'number') == 0
      || Abstract.handelnullundefind(this.objVendormodel.VendorEmail, 'string') == ""
    ) {
      return;
    }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = true;
    this.isVendorRegisterStep3 = false;
  }

  onClickStep2() {
    this.issubmittab1 = true;
    if (Abstract.handelnullundefind(this.objVendormodel.FullName, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.UserName, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.Password, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.PhoneNumber, 'string') == ""
    ) {
      return
    }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = true;
  }


  /*****************************FILE_UPLOADING DOC**********************************/
  UploadDocument(data: any) {
    ;
    this.vendor_id = localStorage.getItem('VendorId');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    let options = { headers: headers };
    const uploadData = new FormData();
    console.log("uploadData", this.kraFile);
    uploadData.append('image', this.kraFile, this.kraFile.name);
    this.http.post(api_Url + '/api/users/krapin/' + this.vendor_id, uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((response: any) => {
      // alert('File uploaded successfully');
      /* if(this.CountDocLimit==0)
      { */
      this.CountDocLimit = 1;
      //}
      this.Uploadmsg = this.kraFile.name + ' uploaded successfully';
      this.KraStatus = true;
      //alert(this.CountDocLimit);
      console.log("CountDocLimit", this.countbaba++);
    }, error => {
      this.Uploadmsg = 'something went wrong!!';
      this.KraStatus = false;


      //alert('something went wrong!!');
      //console.log(error);
    });


  }





  /*****************************FILE_UPLOADING_INCORP**********************************/

  UploadIncorpo(data: any) {

    this.vendor_id = localStorage.getItem('VendorId');
    //alert(this.vendor_id);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    let options = { headers: headers };
    //const headers = {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3NDM5NjIzLCJleHAiOjE2NDc1MjYwMjN9.HXs-emhjLitGqpgUScc1FplVnoLJisn505cVIFMEg3k' };
    const uploadData = new FormData();
    console.log("uploadData", this.inCorpdoc);
    uploadData.append('image', this.inCorpdoc, this.inCorpdoc.name);
    this.http.post(api_Url + '/api/users/krapin/' + this.vendor_id, uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((response: any) => {
      //alert('File uploaded successfully');

      this.UploadmsgForcerticate = this.inCorpdoc.name + ' uploaded successfully';
      this.IncorpStatus = true;

      console.log("inCorpdoc", this.countbaba++);
    }, error => {
      //alert('something went wrong!!');
      this.UploadmsgForcerticate = 'something went wrong!!';
      this.IncorpStatus = false;
      //console.log(error);
    });


  }

  /*****************************FILE_UPLOADING_DIRECTOR**********************************/
  UploadDirectors(data: any) {
    this.vendor_id = localStorage.getItem('VendorId');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    let options = { headers: headers };
    const uploadData = new FormData();
    console.log("uploadData", this.diretor);
    uploadData.append('image', this.diretor, this.diretor.name);
    this.http.post(api_Url + '/api/users/directors_pin/' + this.vendor_id, uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((response: any) => {
      // alert('File uploaded successfully');
      this.UploadmsgForDire = this.diretor.name + ' uploaded successfully';
      this.DirectorStatus = true;
      this.countbaba++;
    }, error => {
      this.UploadmsgForDire = 'something went wrong!!';
      this.DirectorStatus = false;
      //alert('something went wrong!!');
      //console.log(error);
    });

  }

  /*****************************FILE_UPLOADING_ORM**********************************/

  UploadOEM(data: any) {
    this.vendor_id = localStorage.getItem('VendorId');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    let options = { headers: headers };
    const uploadData = new FormData();
    console.log("uploadData", this.Oem);
    uploadData.append('image', this.Oem, this.Oem.name);
    this.http.post(api_Url + '/api/users/oem/' + this.vendor_id, uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((response: any) => {
      // alert('File uploaded successfully');
      this.UploadmsgForOrm = this.Oem.name + ' uploaded successfully';
      this.OrmStatus = true;
      this.countbaba++;
    }, error => {
      this.UploadmsgForOrm = 'something went wrong!!';
      this.OrmStatus = false;
      //alert('something went wrong!!');
      //console.log(error);
    });

  }

  /*****************************FINISH**********************************/
  /*if(this.KraStatus==true && this.IncorpStatus==true && this.DirectorStatus==true && this.OrmStatus==true)
  {
   this.isUploadTOC = false;
  
  }*/


  DownloadTOC() {
    this.isDownloadTOC = true;
  }

  UploadTOC() {
    this.isUploadTOC = true;
  }

  AddVendor() {
    // && this.DirectorStatus==true && this.OrmStatus==true
    if (this.countbaba >= 10) {
      alert('Thankyou !!!!!!! Your registration successfully done.');
      this.isVendorLoginShown = true;

    } else {
      alert('Any Two file mandatory');

    }

    /* this.vendorservice.AddVendor(this.objVendormodel).toPromise().then((response) => {
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
       });*/
  }

  Closepopup() {
    this.displayStyle = "none";
    this.isVendorLoginShown = true;
    this.isVendorRegisterShown = false;
  }

  Finishchange() {

    //alert(this.isChecked);
    if (this.isChecked == false) {

      this.isDisabled = false;
    }
    if (this.isChecked == true) {

      this.isDisabled = true;
    }

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
      this.router.navigateByUrl('/vendor/dashboard');
      //this.displayStyle='block';
      // this.objvendorlogin.DeviceType="Web";

      // this.vendorservice.ValidateUser(this.objvendorlogin).toPromise().then((response) => 
      // {
      //   if (response.statuscode == 200) 
      //   {
      //     this.displayStyle='block';
      //     // this.IsOpenSuccessfully = true;
      //     // let userid = 0;
      //     if (response.data.length > 0) 
      //     {
      //     }

      //   }
      //   else {
      //     // this.showToast(Severity.ERROR, Title.ERROR, response.message);
      //     // this.btnActiveloading = false;
      //   }
      // },
      //   (error) => {
      //     //this.btnActiveloading = false;
      //     console.log("Add Vendor" + JSON.stringify(error));
      //   });
    }
  }
}
