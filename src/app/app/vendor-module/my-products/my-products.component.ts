import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from './../../../shared/services/Export/excel.service';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder,FormGroup,FormControl,Validators,FormControlName } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";
import { some } from 'lodash';
var api_Url = 'http://139.59.21.147:8080';

@Component({
  selector: 'my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})


export class MyProductsComponent implements OnInit {
bulactionvalur:any
  valid:any=true;
  image_response:any;
  productDisabled:any=false  
  filter_respons:any
  check:boolean=false;
  submitted:any=true
  successMassage:any;
  errorMassge:any;
  imageDeleteFrom:any= FormGroup;
  base64String: any;
  name: any;
  imagePath: any;
  influencer_response:any
  categoryData2: any[] = [];
  images: any= [];
  categoryMost: any[] = [];
  categoryMost1: any[] = [];
  categoryMost2: any[] = [];
  categoryMost3: any[] = [];
  public product_respons:any;
  public objVendormodel: any;
  param: any;
  kraFile: any;
  user_id:any;
  public searchBy: any;
  isRecommendModalShow: boolean = false;
  isAddNewProductShow: boolean = false;
  isMoreProductInformationModalShow: boolean = false;
  imageShowComponent:any=true
  isAddProductShow: boolean = false;
  isMyProductsShow: boolean = true;
  isCategoryShow1: boolean = false;
  categoryData1: any;
  categoryData3: any;
  // class1:any =false
  isCategoryShow2: boolean = false;
  isCategoryShow3: boolean = false;
  username: any
  token: any;
  data: any;
  chartOptions: any;
  btnExport: string = "";
  TabSelection: string = "All";
  JsonData: any[] = [];
  categoryData: any[] = []
  SelectAll: boolean = false;
  ActionSelection: string = "";
  required_Form:any= FormGroup;
  disabled:any=true;
  form:any
  searchItem:any
  discountCal:any;
  discount:any;
  myForm = new FormGroup({    
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  public selectedTAb1:any = [{
    active:false
  },{
    active:false
  }];
  
  constructor(private router: Router,
    private http: HttpClient,
    private excelService: ExcelService,
    public productService: ProductService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log("validdata",this.valid)
    
    this.getImage();
    // this.onClickForGender('0', '0');
         console.log('secondCheckoutForm',this.secondCheckoutForm.value)
    
     this.chartOptions = this.getLightTheme();

       //################################################ Get influencer start #######################
    this.token = localStorage.getItem('token',);
    console.log("fgh123", this.token)

    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });    
    let option = { headers: header };
    console.log("optine", option)
   

    this.http.get(api_Url + '/api/influencer', option)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {          
          this.influencer_response = (response.data);
          console.log("influencer_response",this.influencer_response)
        }
      });    

    

       //################################################ Get influencer End #######################



    this.token = localStorage.getItem('token');
    console.log("fgh123", this.token)
    this.user_id = localStorage.getItem('VendorId');
    let param = { 
      
      user_id:this.user_id
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });    
    let options = { headers: headers };
    console.log("optine", options)

    this.http.post(api_Url +'/api/products/product_by_user', param, options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {          
          this.JsonData = response.data; 
        }
      });
    // this.chartOptions = this.getLightTheme();
  }
 
  checkoutForm = this.formBuilder.group({
    submitted : false,
    // name: '',
    id:'',
    name: ['', Validators.required ],
    sale_price: ['', Validators.required ],
    short_description: ['', Validators.required ],
    discount: '',
    details:['', Validators.required ],
    brand: ['', Validators.required ],
    price: ['', Validators.required ],
    influencer:['', Validators.required ],
 
  });

  secondCheckoutForm = this.formBuilder.group({    
    user_id : localStorage.getItem('VendorId'),
    tax: ['', Validators.required ],
    product_info:['', Validators.required ],
    product_line: ['', Validators.required ],
    product_warranty: ['', Validators.required ],
    gender: ['', Validators.required ],
    pr_kit: ['', Validators.required ],
    pick_up_time: ['', Validators.required ],
    submitted : false,
  });


  


  searchForm=  this.formBuilder.group({
    searchItem:""
  });

  productsearchform=this.formBuilder.group({
    searchItemProduct:""
  });
  





  // http://139.59.21.147:8080/api/products/product_by_user
  onClickSearchProduct(){      
    this.token = localStorage.getItem('token',);  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    }); let options = { headers: headers };
    console.log("optine", this.searchForm.value.searchItem)  
   this.http.get(api_Url + `/api/products/search-product/${this.searchForm.value.searchItem}`, options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {          
          this.JsonData = (response.data);
          // this.JsonData.push(response.data);
          // console.log("jsondata",this.JsonData)   
        }      
      });
      }  


  onClickSearchProductlist(){
    this.token = localStorage.getItem('token',);  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    }); let options = { headers: headers };
    console.log("optine", this.productsearchform.value.searchItemProduct)  
   this.http.get(`http://139.59.21.147:8080/api/products/search-product/${this.productsearchform.value.searchItemProduct}`, options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {          
          this.JsonData = (response.data);
          // this.JsonData.push(response.data);
          // console.log("jsondata",this.JsonData)   
        }      
      });
  }
  


  valuesType:any
  calculatePrice()
  {
    // if(this.checkoutForm.value.sale_price < this.checkoutForm.value.price ){
    this.discountCal = ((this.checkoutForm.value.price - this.checkoutForm.value.sale_price)*100) / this.checkoutForm.value.price;
    
    console.log("this.discountCal",this.checkoutForm.value.price);
    this.discount=this.discountCal;
    this.checkoutForm.patchValue({discount:this.discountCal<0 ? 0: this.discountCal   });
  }


  
 getValue(box :number){
  
  let valuesType = this.checkoutForm.value.discount
  console.log("let value of valuesType",this.checkoutForm.value.price)
  console.log("let value of valuesType",box)
 };

  onTabSelection(TabSelection:any) {
    
    //alert(TabSelection)
    this.user_id = localStorage.getItem('VendorId');
    let param = { 
      filter_type:TabSelection,
      user_id:this.user_id
    }
    

    this.http
      .post("http://139.59.21.147:8080/api/products/product_filter", param)
      .subscribe((response: any) => {
       
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // alert(response.message);
          this.JsonData = (response.data);  
          console.log("length",response)
        }
      });
  }

  onActive(TabSelection:any) {
 
    this.user_id = localStorage.getItem('VendorId');
    let param = { filter_type:TabSelection.target.value,
      user_id:this.user_id    
    }
    this.http
      .post("http://139.59.21.147:8080/api/products/product_filter", param)
      .subscribe((response: any) => {
       
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // alert(response.message);
          this.JsonData = response.data;
          console.log("length",response.data)
          // this.disabled=false;       
              
        }
      });
  }
 

  JsonDatadata:any
  sliderActive(JsonData:any){
 
    
    this.token = localStorage.getItem('token',);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });    
    let options = { headers: headers };
    
    // let param = { product_id: this.JsonData}
    let param = { product_id: JsonData[0].id}
    this.http
      .post("http://139.59.21.147:8080/api/products/changeactive", param,options)
      .subscribe((response: any) => {
       
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // alert(response.message);     
     
        }
        
      });
  }
  // public selectedTab8: any =false;
  public selectedTab7: any =false;
  public selectedTab6: any =false;
  public selectedTab5: any =false;
  public selectedTab4: any =false;
  public selectedTab3: any =false;
  public selectedTab2: any =false;
  public selectedTab1: any =false;
  public selectedTab: any =false;


  
  activateClass(data:any){
  if(data == "selectedTab"){
      this.selectedTab = !this.selectedTab; 
      this.selectedTab1 =false;
      this.selectedTab2 =false;
      this.selectedTab3 =false;
      this.selectedTab4 =false;
      this.selectedTab5 =false;
      this.selectedTab6 =false;
      this.selectedTab7 =false;
      // this.selectedTab8 =false;
     
    }
    else if (data == "selectedTab1"){
      this.selectedTab1 = !this.selectedTab1;
       this.selectedTab =false;
       this.selectedTab2 =false;
       this.selectedTab3 =false;
       this.selectedTab4 =false;
       this.selectedTab5 =false;
       this.selectedTab6 =false;
       this.selectedTab7 =false;
      //  this.selectedTab8 =false;
    }
    else if (data == "selectedTab2"){
      this.selectedTab2 = !this.selectedTab2;
      this.selectedTab =false;
      this.selectedTab1 =false;
      this.selectedTab3 =false;
      this.selectedTab4 =false;
      this.selectedTab5 =false;
      this.selectedTab6 =false;
      this.selectedTab7 =false;
      // this.selectedTab8 =false;
    }
    else if (data == "selectedTab3"){
      this.selectedTab3 = !this.selectedTab3;
      this.selectedTab =false;
      this.selectedTab1 =false;
      this.selectedTab2 =false;      
      this.selectedTab4 =false;
      this.selectedTab5 =false;
      this.selectedTab6 =false;
      this.selectedTab7 =false;
      // this.selectedTab8 =false;
    }
    else if (data == "selectedTab4"){
      this.selectedTab4 = !this.selectedTab4;
      this.selectedTab =false;
      this.selectedTab1 =false;
      this.selectedTab2 =false;
      this.selectedTab3 =false;
      this.selectedTab5 =false;
      this.selectedTab6 =false;
      this.selectedTab7 =false;
      // this.selectedTab8 =false;
    }
    else if (data == "selectedTab5"){
      this.selectedTab5 = !this.selectedTab5;
      this.selectedTab =false;
      this.selectedTab1 =false;
      this.selectedTab2 =false;
      this.selectedTab3 =false;
      this.selectedTab4 =false;     
      this.selectedTab6 =false;
      this.selectedTab7 =false;
      // this.selectedTab8 =false;
    }
    else if (data == "selectedTab6"){
      this.selectedTab6 = !this.selectedTab6;
      this.selectedTab =false;
      this.selectedTab1 =false;
      this.selectedTab2 =false;
      this.selectedTab3 =false;
      this.selectedTab4 =false;
      this.selectedTab5 =false;     
      this.selectedTab7 =false;
      // this.selectedTab8 =false;
    }
    else if (data.target.value == "inactive"){
      this.selectedTab7 = !this.selectedTab7;
      this.selectedTab =false;
      this.selectedTab1 =false;
      this.selectedTab2 =false;
      this.selectedTab3 =false;
      this.selectedTab4 =false;
      this.selectedTab4 =false;
      this.selectedTab5 =false;  
      // this.selectedTab8 =false;
    }
    else if (data.target.value == "active"){
      this.selectedTab7 = !this.selectedTab7;
      this.selectedTab =false;
      this.selectedTab1 =false;
      this.selectedTab2 =false;
      this.selectedTab3 =false;
      this.selectedTab4 =false;
      this.selectedTab4 =false;
      this.selectedTab5 =false;  
    }       
  }
  imgData:any;
  onFileChange(event:any) {
    this.imgData = event.target.files[0];
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
getImage(){
  
this.token = localStorage.getItem('token',);
let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'x-access-token': this.token
});    
let options = { headers: headers };
  let param = { product_id:16}
  this.http
    .post("http://139.59.21.147:8080/api/products/product_images", param,options)
    .subscribe((response: any) => {
     
      if (response.statuscode == '404') {
        alert(response.message);
      }
      else if (response.statuscode == '200') {
        // alert(response.message);      
        this.image_response = response.data;

        this.myForm.patchValue({
          fileSource: this.image_response[0].images,
          url: this.image_response[0].images
       });


      }
     
    });
    
}
  imageSubmit(){
  
  this.product_respons;
    const uploadData = new FormData();
    uploadData.append('image', this.imgData,this.imgData.name );   
    this.http.post(`http://139.59.21.147:8080/api/users/upload_image/${this.product_respons[0].id}`,uploadData,{      
      reportProgress: true,
      observe: 'events'
    })  
      .subscribe(res => {
       
          document.getElementById("isMyProductsShow")?.click(); 
          window.location.reload();
        console.log(res);
        this.successMassage="Uploaded File Successfully";
        // alert('Uploaded Successfully.');
       
      })
            
  }

  
  allfiles:any
  removeImage(image:any) {
    
   const index = this.images.indexOf(image);
   this.images.splice(index, 1)
   this.filesAmount.splice(index, 1)
   this.imgData.splice(index, 1)
  //  this.myForm.splice(index, 1)
   
  }
  files:any
  filesAmount:any


//  ######################################  second type End  ############################################

pricemessage:any
  onProductCreate(productTypeFirst: any) {
    
    this.submitted = true;
    let param: any;   
    if(this.checkoutForm.value.price == 0){
      this.pricemessage="Price More Than 0 Rupay"
      this.isMoreProductInformationModalShow=false
    }else
    {
      this.pricemessage="";
    }    
    this.productService.basicFormOne = this.checkoutForm.value;    


  }

 
  
  // disabled:any=false;
  onSecondProductCreate() {
  
    let param = Object.assign(this.productService.basicFormOne, this.secondCheckoutForm.value, this.productService.cate_id);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };
console.log("param.id ",param.id )
    let url = param.id != ""  ? 'http://139.59.21.147:8080/api/products/update' : 'http://139.59.21.147:8080/api/products';

    this.http
      .post(url, param, options)
      .subscribe((response: any) => {
       
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {          
          
          // alert("Product Uploaded Succussefully");
          this.successMassage="Uploaded Product Successfully";
          this.product_respons = response.data;
         
          this.disabled=false;
          // this.param.value.reset();
            
          // this.secondCheckoutForm.reset();   
         // this.imageShowComponent=false  
          this.isMoreProductInformationModalShow= false    
          
          
          setTimeout(() => {
            document.getElementById("ProductImage-tab")?.click(); 
          }, 20);
          this.checkoutForm.reset();
        }
      });

  }


// ############################# Add PRoduct End ########################################

  getLightTheme() {
    return {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  }
  onClickMostCategory() {
    
    this.token = localStorage.getItem('token');
    this.user_id = localStorage.getItem('VendorId');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });

    let options = { headers: headers };
    let param = {"user_id":this.user_id}
    this.http.post("http://139.59.21.147:8080/api/category/most_used_category", param, options)

      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);

        }
        else if (response.statuscode == '200') {
          this.categoryMost = response.data;
    
        }
      });
  }

  changestatus(){
    alert()
  }
  
  selectedItem3:any
  selectedItem2:any
  selectedItem1:any
  selectedItem :any;

  public selectedcate1 = false;

  seletedCat(datalist:any, catelistAll:any ){
    
    for(let i = 0; i < catelistAll.length; i++){
      catelistAll[i].active = false;
    }
    datalist.active = !datalist.active;
  }
  seletedhigh(catelist:any ){
    
   alert()
    catelist.active = !catelist.active;
  }
  onClickForGender(genderType: any, type: any,item:any=null) {
    
    //this.selectedItem = item; 
    if(genderType != '0' && type != '0') {
      this.check=true;
    }
    if(type == '4') {
      this.productService.cate_id = { cat_id: genderType };
      return;
    }
   
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };
    let param = { parent_id: genderType }
    // console.log("12",param)  
    this.http
      .post("http://139.59.21.147:8080/api/category/get_category", param, options)
      .subscribe((response: any) => {
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          if (type == '0') {
            this.isCategoryShow1 = true;
            this.categoryData = response.data;
            for(let i = 0; i < this.categoryData.length; i++){
              this.categoryData[i].active = false;
            }
            
          }

          // this.categoryData.push(response.data); 
          else if (type == '1') {
            // this.class1.active = !this.class1.active;
           
            this.isCategoryShow2 = true;
            this.categoryData1 = response.data;
            for(let i = 0; i < this.categoryData1.length; i++){
              this.categoryData1[i].active = false;
            }
          }
          else if (type == '2') {
            this.isCategoryShow3 = true;
            this.categoryData2 = response.data;
            for(let i = 0; i < this.categoryData2.length; i++){
              this.categoryData2[i].active = false;
            }
          }
          else if (type == '3') {
           
            this.isCategoryShow3 = true;
            this.categoryData3 = response.data;
            this.productDisabled=false
            for(let i = 0; i < this.categoryData3.length; i++){
              this.categoryData3[i].active = false;
            }
          }

          console.log("data", this.categoryData)
        }
      });


    //this.productService.gender = genderType;
    //this.isCategoryShow1 = true;
  }

  onClickCategory2() {
    this.isCategoryShow3 = true;
  }

  bulkaction(event:any){
    this.bulactionvalur = event.target.value


  }

  onClickRecommend() {
        this.isRecommendModalShow = !this.isRecommendModalShow;
        
    this.token = localStorage.getItem('token');
    this.user_id = localStorage.getItem('VendorId');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    
   
    let options = { headers: headers };
    let param = {
      "user_id":this.user_id,
      "action":this.bulactionvalur
  }

    this.http.post("http://139.59.21.147:8080/api/products/bulk_action", param, options)

      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);

        }
        else if (response.statuscode == '200') {
          this.categoryMost = response.data;
    
        }
      });
      }
      
    
  onClickAdd() {
    this.onClickForGender('0', '0');
    this.isMyProductsShow = false;
    this.isAddProductShow = true;
   
  }

  

  makeActive(i:any) {
    this.selectedTAb1[0].active = false;
    this.selectedTAb1[1].active = false;
      this.selectedTAb1[i].active = !this.selectedTAb1[i].active;
 }


  onClickMoreProductInformation() {

    this.isMoreProductInformationModalShow = !this.isMoreProductInformationModalShow;

    
  }

  onClickCreateNewProduct() {
    this.isAddProductShow = false;
    this.isAddNewProductShow = true;
    this.productDisabled=true
  }
  gotoProductinfo() {
    document.getElementById("ProductInformation-tab")?.click();
    this.checkoutForm.patchValue({discount:this.discountCal});
  }
  Downloadfile() {
    let temp = this.JsonData;
    for (let index = 0; index < temp.length; index++) {
      delete temp[index].Selected;
      delete temp[index].Action;
    }
    if (this.btnExport == "Excel") {
      this.excelService.exportAsExcelFile(temp, 'Products');
    }
    else if (this.btnExport == "CSV") {
      this.excelService.exportAsCSVFile(temp, 'Products')
    }

  }

  // onTabSelection(TabSelection: string) {
  //   this.TabSelection = TabSelection;
  // }
  onSelectAll() {
    this.JsonData.forEach(element => {
      element.Selected = this.SelectAll;
    });
  }
  element:any;
  
  Oneditproduct(Item: any) {
    

    
    if (Item.status == 'Edit') {
      this.isAddProductShow = false;
      this.isAddNewProductShow = true;
      this.isMyProductsShow = false;
           this.checkoutForm.valid == !this.checkoutForm.valid;
            setTimeout(() => {
       
        window.document.getElementById('ProductInformation-tab')?.click();
       
      },50);
 
      // this.valid=true
      this.checkoutForm.patchValue({
            
        submitted : false,
        id:Item.id,
        name: Item.name,
        sale_price:Item.sale_price,
        short_description:Item.short_description,
        discount: Item.discount,
        details:Item.details,
        brand: Item.brand,
        price:Item.price, 
        influencer:Item.influencer,       
        
      });
      
      this.secondCheckoutForm.patchValue({            
        submitted : false,  
        id:Item.id,     
        tax: Item.tax,
        product_info:Item.product_info,
        product_line:Item.product_line,
        gender: Item.gender,
        product_warranty:Item.product_warranty,
        pick_up_time: Item.pick_up_time,
        pr_kit:Item.pr_kit
        
      });
      
    }

    
    if (Item.status == 'sold') {
    let param = { 
      status: Item.status,
      id:Item.id
    }
    this.http
      .post("http://139.59.21.147:8080/api/products/changestatus", param)
      .subscribe((response: any) => {
       
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          // alert(response.message);
          // this.Item = response.data;
         }
        
      });
  }



  }
}
