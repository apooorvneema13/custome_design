import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";






@Component({
  selector: 'edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {
  shopID_respnse :any
  // editAccountform:FormGroup
  // submitted = false;
  constructor(
    public router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.opentab();
    }, 100);
    this.vendoreGet();
    this.accountdetail();
    this.getPayment();
    this.getShop();
    // this.getshopId();
   
  }

  // get f() { return this.editAccountform.controls; }
  profileimage:any;
  images:any;
  shopId1:any;
  shopid:any
  phone_number:any;
  shop_respons:any
  public url:any
  payment_respons: any
  email_address: any
  full_name: any;
  password: any;
  vendor_id: any;
  username: any;
  user_profile: any;
  public editvendore_respons: any;
  userId: any;
  public shopId: any = '';
  editshop1_respons: any;
  submitted = false;
  product_respons: any;
  token: any;
  Bumiketypechk1: boolean = false;
  Bumiketypechk2: boolean = false;
  SelectAll: boolean = false;
  isConfirmModalShow: boolean = false;
  strtitle: string = "";
  // shopID_respnse:any;


  editShopform = this.formBuilder.group({
    id:'',
    userId:'',
    shop_name: ['', Validators.required],
    phone_number: ['', Validators.required],
    country: ['', Validators.required],
    location: ['', Validators.required],
    // details: ['', Validators.required],
    mon: ['', Validators.required],
    tue: ['', Validators.required],
    wed: ['', Validators.required],
    thu: ['', Validators.required],
    fri: ['', Validators.required],
    sat: ['', Validators.required],
    sun: ['', Validators.required],
  });

  editAccountform = this.formBuilder.group({

    full_name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required],
    email_address: ['', Validators.required],
    name_of_business: ['', Validators.required],
    industry: ['', Validators.required],
    contact_person_name: ['', Validators.required],
    phone_number: ['', Validators.required],
    walletVisible: ['', Validators.required],
    OrderVisible: ['', Validators.required],
    ProductVisible: ['', Validators.required],
    role_id: ['', Validators.required],
    id: "",
  },
  // {
  //   validator: MustMatch('password', 'confirmPassword')
  // }
  
  );
  
  editUserForm = this.formBuilder.group({
    id: [0],
    user_id: [localStorage.getItem('VendorId')],
    username: ['', Validators.required],
    password: [123456],
    email_address: ['', Validators.required],
    phone_number: ['', Validators.required],
    // name_of_business: ['', Validators.required],
    // industry: ['', Validators.required],
    // contact_person_name: ['', Validators.required],
    walletVisible: ['', Validators.required],
    OrderVisible: ['', Validators.required],
    ProductVisible: ['', Validators.required],
    role_id: ['', Validators.required]
  });

  accountCheckoutForm = this.formBuilder.group({
    shopId:localStorage.getItem('shopId'),
    user_id: [localStorage.getItem('VendorId')],
    username: ['', Validators.required],
    password: ['', Validators.required],
    email_address: ['', Validators.required],
    name_of_business: ['', Validators.required],
    industry: ['', Validators.required],
    contact_person_name: ['', Validators.required],
    phone_number: ['', Validators.required],
    kra_pin: ['', Validators.required],
    certificate_incorp: ['', Validators.required],
    directors_pin: ['', Validators.required],
    profile_pic: ['', Validators.required],
    oem: ['', Validators.required],
  });

  paymentForm = this.formBuilder.group({
    shopId:localStorage.getItem('shopId'),
    id: '',
    till_no: ['', Validators.required],
    paybill_no: ['', Validators.required],
    paybill_acc: ['', Validators.required],
    acc_no: ['', Validators.required],
    bank_name: ['', Validators.required],
    branch_name: ['', Validators.required],
    swift_code: ['', Validators.required],
    acc_name:['', Validators.required]

  });
  // onFileChangedDirect(event: any) {
  //   this.profileimage = event.target.files[0];
  //   this.userProfileUpdate(this.profileimage)
  //   console.log("file", this.profileimage);
  // }
  myForm = new FormGroup({    
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  onFileChangedDirect(event:any) {
    this.profileimage = event.target.files[0];
    this.userProfileUpdate(this.profileimage)
    if ( event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result); 
   
                   this.myForm.patchValue({
                      fileSource: this.images
                   });
                }
  
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }


  image_response:any
  
    userProfileUpdate(data: any) {
      
      this.vendor_id = localStorage.getItem('VendorId');
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      });
      let options = { headers: headers };
      const uploadData = new FormData();
      
      uploadData.append('image', this.profileimage, this.profileimage.name);

      this.http.post('http://139.59.21.147:8080/api/users/upload_profile/' + this.vendor_id, uploadData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe((response: any) => {
        // alert('File uploaded successfully');
        // this.UploadmsgForDire = this.profileimage.name + ' uploaded successfully';
        // this.DirectorStatus = true;
        // this.countbaba++;
      }, error => {
        // this.UploadmsgForDire = 'something went wrong!!';
        // this.DirectorStatus = false;
        //alert('something went wrong!!');
        //console.log(error);
      });
  
    }

    getProfileImage(){
      this.vendor_id = localStorage.getItem('VendorId');
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      });
      let options = { headers: headers };
      const uploadData = new FormData();
      
      
      uploadData.append('image', this.profileimage, this.profileimage.name);

      this.http.post('http://139.59.21.147:8080/api/products/product_images', uploadData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe((response: any) => {
        // alert('File uploaded successfully');
        // this.UploadmsgForDire = this.profileimage.name + ' uploaded successfully';
        // this.DirectorStatus = true;
        // this.countbaba++;
      }, error => {
        // this.UploadmsgForDire = 'something went wrong!!';
        // this.DirectorStatus = false;
        //alert('something went wrong!!');
        //console.log(error);
      });
    }

  params: any
  onAccountProductCreate() {
    
    this.token = localStorage.getItem('token',);

    let params = this.accountCheckoutForm.value
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };
    console.log("dada", options)
    this.http
      .post("http://139.59.21.147:8080/api/users/add_edit_user", params, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          alert("Product Uploaded Succussefully");
          this.product_respons = response.data;
          console.log("product_respons", this.product_respons)
          

        }
      });
  }

  userDetail(data: any) {
    
    this.editUserForm.patchValue({
      username: data.username,
      id: 1,
      user_id: localStorage.getItem('VendorId'),
      email_address: data.email_address,
      phone_number: parseInt(data.phone_number),
      walletVisible: data.walletVisible== true ? 1: 0,
      OrderVisible: data.OrderVisible == true ? 1: 0,
      ProductVisible: data.ProductVisible == true ? 1: 0,
      role_id: data.role_id,
      mon: data.mon == true ? 1: 0,
      tue: data.tue == true ? 1: 0,
      wed: data.wed == true ? 1: 0,
      thu: data.thu == true ? 1: 0,
      fri: data.fri == true ? 1: 0,
      sat: data.sat == true ? 1: 0,
      sun: data.sun == true ? 1: 0
    });
    
  }



  accountdetail() {
    
    

    this.vendor_id = localStorage.getItem('VendorId');
    this.username = localStorage.getItem('username');
    this.password = localStorage.getItem('password');
    this.full_name = localStorage.getItem('full_name');
    this.email_address = localStorage.getItem('email');
    this.phone_number = localStorage.getItem('mobile');

    this.editAccountform.patchValue({
      phone_number: localStorage.getItem('mobile'),
      username: localStorage.getItem('username'),
      full_name: localStorage.getItem('full_name'),
      id: localStorage.getItem('VendorId'),
      email_address: localStorage.getItem('email')
    });
    
  }

  getShop() {
    
    this.userId = localStorage.getItem('VendorId')
    this.token = localStorage.getItem('token');
    this.submitted = true;
    // user_id:{type}
    // let param_EditUsers = this.editUserForm.value
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let param = { id:this.userId};
    let options = { headers: headers };   
    
    this.http
      .post("http://139.59.21.147:8080/api/shop/get_shop_user", param, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          this.shop_respons = response.data;
          console.log("respone",response)
          this.shopid = this.shop_respons[0].id;
          
          this.editShopform.patchValue({
            userId :localStorage.getItem('VendorId'),
            id: this.shop_respons[0].id,  
            shop_name: this.shop_respons[0].shop_name,
            phone_number: this.shop_respons[0].phone_number,
            country: this.shop_respons[0].country,
            location: this.shop_respons[0].location,
            mon: this.shop_respons[0].mon == true ? 1: 0 ,
            tue: this.shop_respons[0].tue== true ? 1: 0 ,
            wed: this.shop_respons[0].wed== true ? 1: 0 ,
            thu: this.shop_respons[0].thu== true ? 1: 0 ,
            fri: this.shop_respons[0].fri== true ? 1: 0 ,
            sat: this.shop_respons[0].sat== true ? 1: 0 ,
            sun: this.shop_respons[0].sun== true ? 1: 0 ,   
            
          });
            
        }
      });
      
  }


  editShopeFunctipn() {
    
    this.token = localStorage.getItem('token',);
    this.submitted = true;    
    let param_EditShop1 = this.editShopform.value
 


    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
     let options = { headers: headers };
     let url = this.shop_respons== '' ? 'http://139.59.21.147:8080/api/shop' : 'http://139.59.21.147:8080/api/shop/update_shop';

     this.http
      .post(url, param_EditShop1, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {

          alert(response.message);
          // this.editshop1_respons1 = response.data;
          // this.shopId1 = this.editshop1_respons[0].id;
          // console.log("this.editshop1_respons", this.editshop1_respons[0].id)

        }
      });
    

  }

  editAccount_respons: any
  editAccountFunctipn() {

    this.submitted = true;
  // //   if (this.editAccountform.invalid) {
  // //     return
  // // }
    this.token = localStorage.getItem('token',);
    let param = this.editAccountform.value
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };
    console.log("13546523", this.editAccountform.value)
    this.http
      .post("http://139.59.21.147:8080/api/users/update", param, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {

          alert(response.message);
          this.editAccount_respons = response.data;
        }
      });

  }




  vendoreGet() {
    
    this.userId = localStorage.getItem('VendorId')
    this.token = localStorage.getItem('token');
    this.submitted = true;
    // user_id:{type}
    // let param_EditUsers = this.editUserForm.value
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    // let param = { 'user_id': 3 };
    let param = { 'user_id': this.userId };
    let options = { headers: headers };
    console.log("this.token1", this.userId)
    
    this.http
      .post("http://139.59.21.147:8080/api/users/get_vendor_user", param, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          
          this.editvendore_respons = response.data[0];
          //this.user_id_by = 1;

        }
      });

  }



  getPayment() {
    
    this.userId = localStorage.getItem('VendorId')
    this.token = localStorage.getItem('token');
    this.submitted = true;
    // user_id:{type}
    // let param_EditUsers = this.editUserForm.value
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let param = { 'id': this.userId };
    let options = { headers: headers };
    console.log("this.token", this.userId)
    
    this.http
      .post("http://139.59.21.147:8080/api/payment/get_payment_user",param, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          this.payment_respons = response.data;        
          this.paymentForm.patchValue({
            id:this.payment_respons[0].id ,
            shopId:localStorage.getItem('shopId'),
            till_no: this.payment_respons[0].till_no,
            paybill_acc: this.payment_respons[0].paybill_acc,
            acc_name:this.payment_respons[0].acc_name,
            acc_no: this.payment_respons[0].acc_no,
            bank_name: this.payment_respons[0].bank_name,
            branch_name: this.payment_respons[0].till_no,
            swift_code: this.payment_respons[0].swift_code,
            paybill_no: this.payment_respons[0].paybill_no,
          });
        }
        
      });
      
  }


  editUser_respons: any
  editUserFunction() {


    this.token = localStorage.getItem('token');
    this.submitted = true;
    let param_EditUsers = this.editUserForm.value
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };
    if(this.editUserForm.value.id == 0) {
      this.editUserForm.patchValue({
        id: this.editUserForm.value.id,
        OrderVisible:this.editUserForm.value.OrderVisible== true ? 1: 0,
        ProductVisible:this.editUserForm.value.ProductVisible==  true ? 1: 0,
        email_address:this.editUserForm.value.email_address,
        password:this.editUserForm.value.password.toString(),
        phone_number:this.editUserForm.value.phone_number.toString(),
        role_id:this.editUserForm.value.role_id,
        user_id:localStorage.getItem('VendorId'),
        username:this.editUserForm.value.username,
        walletVisible:this.editUserForm.value.walletVisible== true ? 1: 0
      });
    }
    else {
      
      this.editUserForm.patchValue({
        password:this.editUserForm.value.password.toString(),
        phone_number:this.editUserForm.value.phone_number.toString(),
        OrderVisible:this.editUserForm.value.OrderVisible== true ? 1: 0,
        ProductVisible:this.editUserForm.value.ProductVisible==  true ? 1: 0,
        walletVisible:this.editUserForm.value.walletVisible== true ? 1: 0
      });


    }
   



    
    this.http
      .post("http://139.59.21.147:8080/api/users/add_edit_user", this.editUserForm.value, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          
          alert(response.message);
          //this.editUser_respons ='';
          this.editvendore_respons = response.data;
          //editvendore_respons
          //this.editvendore_respons
        }
      });
    
  }
  
  editpayment_respons: any
  paymentfunction() { 
    
    
    this.token = localStorage.getItem('token');
    this.submitted = true;
    let param = this.paymentForm.value;
    
    param.shopId = localStorage.getItem('shopId');
    
    console.log("shopId", param)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };   

    let url = this.payment_respons[0] == '' ? 'http://139.59.21.147:8080/api/payment' : 'http://139.59.21.147:8080/api/payment/update_payment';
    // if (this.payment_respons ='') {
      this.http
      .post(url, param, options)
      .subscribe((response: any) => {

        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          
          alert(response.message);
          this.editpayment_respons = response.data;
        }
        
      })
  

    
    
    // this.http
    //   .post("http://139.59.21.147:8080/api/payment", param, options)
    //   .subscribe((response: any) => {

    //     if (response.statuscode == '404') {
    //       alert(response.message);
    //     }
    //     else if (response.statuscode == '200') {
    //       
    //       alert("Product Uploaded Succussefully");
    //       this.editpayment_respons = response.data;
    //     }
    //   }):
    //   this.http
    //   .post("http://139.59.21.147:8080/api/payment/update_payment", param, options)
    //   .subscribe((response: any) => {

    //     if (response.statuscode == '404') {
    //       alert(response.message);
    //     }
    //     else if (response.statuscode == '200') {
    //       
    //       alert("Product Uploaded Succussefully");
    //       this.editpayment_respons = response.data;
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
