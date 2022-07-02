import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {

  editShopform = this.formBuilder.group({

    // shop_name: ['', Validators.required],
    // phone_number: ['', Validators.required],
    // country: ['', Validators.required],
    // location: ['', Validators.required],
    // details: ['', Validators.required],
    // mon: ['', Validators.required],
    // tue: ['', Validators.required],
    // wed: ['', Validators.required],
    // thu: ['', Validators.required],
    // fri: ['', Validators.required],
    // sat: ['', Validators.required],
    // sun: ['', Validators.required],
  });



  editAccountform = this.formBuilder.group({
    // submitted: false,
    // // name: '',
    // name: ['', Validators.required],
    // sale_price: ['', Validators.required],
    // short_description: ['', Validators.required],
    // discount: ['', Validators.required],
    // details: ['', Validators.required],
    // brand: ['', Validators.required],
    // price: ['', Validators.required],
    // influencer: ['', Validators.required],
  });



  editUserForm = this.formBuilder.group({
   
    // username: ['', Validators.required],
    // password: ['', Validators.required],
    // email_address: ['', Validators.required],
    // phone_number: ['', Validators.required],
    // name_of_business: ['', Validators.required],
    // industry: ['', Validators.required],
    // contact_person_name: ['', Validators.required],
    // walletVisible: ['', Validators.required],
    // OrderVisible: ['', Validators.required],
    // ProductVisible: ['', Validators.required],
    // role_id: ['', Validators.required] 
  });



  paymentForm = this.formBuilder.group({   
    
    // till_no: ['', Validators.required],
    // paybill_no: ['', Validators.required],
    // paybill_acc: ['', Validators.required],
    // acc_no: ['', Validators.required],
    // bank_name: ['', Validators.required],
    // branch_name: ['', Validators.required],
    // swift_code: ['', Validators.required],
    
  });


  editUser_respons: any;
  editAccount_respons: any;
  editshop1_respons: any;
  token: any;
  Bumiketypechk1: boolean = false;
  Bumiketypechk2: boolean = false;
  SelectAll: boolean = false;
  isConfirmModalShow: boolean = false;
  strtitle: string = "";

  constructor(
    
    public router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.opentab();
    }, 100);
  }

  // editshop_type: any
  editShopeFunctipn() {
    alert()
    let param_EditShop1 = this.editShopform.value
    console.log("param_EditShop",param_EditShop1)


    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };

    this.http
      .post("http://139.59.21.147:8080/api/shop", param_EditShop1, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          ;
          alert("Product Uploaded Succussefully");
          this.editshop1_respons = response.data;
        }
      });

  }

  // editAccount_type: any
  editAccountFunctipn() {
    alert()
    // let param = this.editAccountform.value
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'x-access-token': this.token
    // });
    // let options = { headers: headers };

    // this.http
    //   .post("http://139.59.21.147:8080/api/products", param, options)
    //   .subscribe((response: any) => {

    //     if (response.statuscode == '404') {
    //       alert(response.message);
    //     }
    //     else if (response.statuscode == '200') {
    //       ;
    //       alert("Product Uploaded Succussefully");
    //       this.editAccount_respons = response.data;
    //     }
    //   });

  }

  // editUser_type: any
  editUserFunction() {
    // let param_EditUsers = this.editUserForm.value
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'x-access-token': this.token
    // });
    // let options = { headers: headers };

    // this.http
    //   .post("http://139.59.21.147:8080/api/users/add_edit_user", param_EditUsers, options)
    //   .subscribe((response: any) => {

    //     if (response.statuscode == '404') {
    //       alert(response.message);
    //     }
    //     else if (response.statuscode == '200') {
    //       ;
    //       alert("Product Uploaded Succussefully");
    //       this.editUser_respons = response.data;
    //     }
    //   });

  }
  // editPayment_type: any
  paymentfunction() {
    // let param = this.paymentForm.value
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'x-access-token': this.token
    // });
    // let options = { headers: headers };

    // this.http
    //   .post("http://139.59.21.147:8080/api/payment", param, options)
    //   .subscribe((response: any) => {

    //     if (response.statuscode == '404') {
    //       alert(response.message);
    //     }
    //     else if (response.statuscode == '200') {
    //       ;
    //       alert("Product Uploaded Succussefully");
    //       this.editUser_respons = response.data;
    //     }
    //   });

  }



  onClickConfirmDeleteUser() {
    this.isConfirmModalShow = !this.isConfirmModalShow;
  }

  onselectbumitype(strtype: string) {
    if (strtype == "Yes") {
      this.Bumiketypechk2 = false;
    }
    else if (strtype == "No") {
      this.Bumiketypechk1 = false;
    }
  }
  gotoMyaccount() {
    this.onClickSidemenuRefresh('/vendor/my-account');
  }
  onClickSidemenuRefresh(URL: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([URL]));
  }
  opentab() {
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'shop') {
      document.getElementById("v-pills-home-tab")?.click();
    }
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'profile') {
      document.getElementById("v-pills-profile-tab")?.click();
    }
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'user') {
      document.getElementById("v-pills-messages-tab")?.click();
    }
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'payments') {
      document.getElementById("v-pills-settings-tab")?.click();
    }
  }
  editshop(strtitle: string = "Edit Shop") {
    this.strtitle = strtitle;
  }

}
