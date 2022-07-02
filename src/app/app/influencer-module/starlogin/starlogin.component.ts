import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abstract } from 'src/shared/helper/abstract';
import { vendorlogin, Vendormodel } from 'src/shared/model/fake/fakeDataModel';
import { VendorService } from 'src/shared/services/vendor/vendor.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";


var api_Url = 'http://139.59.21.147:8080';
@Component({
  selector: 'app-starlogin',
  templateUrl: './starlogin.component.html',
  styleUrls: ['./starlogin.component.scss']
})
export class StarloginComponent implements OnInit {
  isDisabled:any
  isChecked:any
  diretor:any
  countbaba:any
  UploadmsgForDire:any
  regis_response:any
  insta_link: any
  snap_link: any
  tiktok_link: any
  youtube_link: any
  high_fashion: any
  lifestyle: any
  lingerie_swim: any
  fashion: any
  DirectorStatus:any
  plus_size: any
  travel: any
  pride: any
  streetwear: any
  tech_acc: any
  footwear: any
  jewellery: any
  health: any
  hair_beauty: any
  kra_pin: any
  profile_pic: any
  mod_payment: any
  other: any
  fb_link: any
  snap: any
  youtube: any
  twitter: any
  twitch: any
  tiktok: any
  fb: any
  IncorpStatus: any
  UploadmsgForcerticate: any
  inCorpdoc: any
  insta: any
  full_name: any
  password: any
  token: any
  facebook: any;
  username: any
  vendor_id: any
  user_profile: any
  LoginMSg: any;
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

    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.countbaba = 0;
    // setTimeout(() => {
    //   this.router.navigateByUrl('/star');  
    // }, 20);
console.log("this.countbaba ",this.countbaba )
  }



  onFileChangedIncop(event: any) {
    this.inCorpdoc = event.target.files[0];
    console.log("file", this.inCorpdoc);
  }


  onFileChangedDirect(event: any) {
    this.diretor = event.target.files[0];
    console.log("file1", this.diretor);
  }
  /*******************************Login Start***********************************************************/

  onSubmit(data: any) {

    //this.showToast('Error', 'Title', 'Something went wrong');
    //alert(data);
    console.log("data", data);
    var username = data.email.value;
    var password = data.password.value;
    this.http
      .post(api_Url + '/api/influencer/login', { username: username, password: password })
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          //alert(response.message);
          this.LoginMSg = response.message;
        }
        else if (response.statuscode == '200') {

          this.router.navigate(['/star']);
          //console.log("response",response.data[0].id);
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


  /*******************************Login End***********************************************************/

  /*******************************Registration Start***********************************************************/

  onRegistrationSubmit(registration: any) {

    
    var username = this.objVendormodel.UserName;
    var password = this.objVendormodel.Password;
    var email_address = this.objVendormodel.VendorEmail;
    var phone_number = this.objVendormodel.PhoneNumber;
    var mod_payment = this.objVendormodel.IndustryID
    var kra_pin = this.kra_pin;
    var profile_pic = this.profile_pic;
    // var mod_payment = this.mod_payment;
    var fb = this.fb;
    var insta = this.insta;
    var snap = this.snap;
    var tiktok = this.tiktok;
    var twitch = this.twitch;
    var youtube = this.youtube;
    var twitter = this.twitter;
    var fb_link = this.fb_link;
    var insta_link = this.insta_link;
    var snap_link = this.snap_link;
    var tiktok_link = this.tiktok_link;
    var youtube_link = this.youtube_link;
    var high_fashion = this.high_fashion;
    var lifestyle = this.lifestyle;
    var lingerie_swim = this.lingerie_swim;
    var fashion = this.fashion;
    var hair_beauty = this.hair_beauty;
    var plus_size = this.plus_size;
    var travel = this.travel;
    var pride = this.pride;
    var streetwear = this.streetwear;
    var tech_acc = this.tech_acc;
    var footwear = this.footwear;
    var jewellery = this.jewellery;
    var health = this.health;
    var other = this.other;



    this.http
      .post(api_Url + '/api/influencer/signup', {
        username: username,
        password: password,
        email_address: email_address,
        phone_number: phone_number,
        
        fb: fb,
        snap: snap,
        insta: insta,
        tiktok: tiktok,
        twitch: twitch,
        youtube: youtube,
        twitter: twitter,
        fb_link: fb_link,
        insta_link: insta_link,
        snap_link: snap_link,
        tiktok_link: tiktok_link,
        youtube_link: youtube_link,
        high_fashion: high_fashion,
        lifestyle: lifestyle,
        lingerie_swim: lingerie_swim,
        fashion: fashion,
        hair_beauty: hair_beauty,
        plus_size: plus_size,
        travel: travel,
        pride: pride,
        streetwear: streetwear,
        tech_acc: tech_acc,
        footwear: footwear,
        jewellery: jewellery,
        health: health,
        other: other,
        kra_pin:kra_pin,
        profile_pic:profile_pic,
        mod_payment:mod_payment
      })
      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          //alert('404');
          // this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")

          alert(response.message);
          //  console.log("resp",response);
        }
        else if (response.statuscode == '200') {
          // alert(response.data[0].id);
          this.regis_response= response.data[0].id
          this.isVendorRegisterStep1 = false;
          this.isVendorRegisterStep2 = false;
          this.isVendorRegisterStep3 = false;
          this.isVendorRegisterStep4=false
          this.isVendorRegisterStep5=true
          localStorage.setItem('VendorId', response.data[0].id);
          // alert(response.message);
         
          
          // this.router.navigate(['/vendor/dashboard']);

        }
      });
    
  }

  /*******************************Registration End***********************************************************/

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
    console.log("regis_response",this.regis_response)
    console.log("uploadData", this.inCorpdoc);
    uploadData.append('image', this.inCorpdoc, this.inCorpdoc.name);
    this.http.post(api_Url + '/api/influencer/influencer_krapin/' + this.regis_response, uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((response: any) => {
      //alert('File uploaded successfully');

      // this.UploadmsgForcerticate = this.inCorpdoc.name + ' uploaded successfully';
      this.UploadmsgForcerticate=this.inCorpdoc.name + ' uploaded successfully';
      this.IncorpStatus = true;
      this.countbaba++;
      // console.log("inCorpdoc", this.countbaba++);
    }, error => {
      //alert('something went wrong!!');
      this.UploadmsgForcerticate = 'something went wrong!!';
      this.IncorpStatus = false;
      //console.log(error);
    });


  }

  UploadDirectors(data: any) {
alert("Image Uploade Succesfully")
    this.vendor_id = localStorage.getItem('VendorId');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    let options = { headers: headers };
    const uploadData = new FormData();
    console.log("uploadData", this.diretor);
    uploadData.append('image', this.diretor, this.diretor.name);
    this.http.post(api_Url + '/api/influencer/influencer_images/' + this.regis_response, uploadData, {
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
 
  Finishchange() {

    //alert(this.isChecked);
    if (this.isChecked == false) {

      this.isDisabled = false;
    }
    if (this.isChecked == true) {

      this.isDisabled = true;
    }

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

  AddVendor12() {
    if (this.countbaba <= 10) {
      alert('Thankyou !!!!!!! Your registration successfully done.');
      this.isVendorRegisterStep5=false
      this.isVendorLoginShown = true;

    }
  }

  goToRegister() {
    this.isVendorLoginShown = false;
    this.isVendorRegisterShown = true;
    this.isVendorRegisterStep1 = true;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;
    this.isVendorRegisterStep4 = false;
    this.isVendorRegisterStep5=false

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
    this.isVendorRegisterStep4 = false;
    this.isVendorRegisterStep5 = false;
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
    this.isVendorRegisterStep4 = false;
    this.isVendorRegisterStep5 = false;
  }

  onClickStep3() {
    this.issubmittab1 = true;
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;
    this.isVendorRegisterStep4 = true;
    this.isVendorRegisterStep5 = false;
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
