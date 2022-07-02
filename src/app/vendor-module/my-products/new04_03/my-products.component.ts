import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from './../../../shared/services/Export/excel.service';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder,FormGroup,FormControl,Validators,FormControlName } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";
var api_Url = 'http://139.59.21.147:8080';


@Component({
  selector: 'my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})


export class MyProductsComponent implements OnInit {

  check:boolean=false;
// createFormValidation = new FormGroup({
//   name:new FormControl('',[Validators.required])
// })

// get create_Validation(){
//   return this.createFormValidation.get('create_Validation')
// }




  myForm = new FormGroup({    
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  

  // uploadForm: FormGroup;

  submitted:any

  checkoutForm = this.formBuilder.group({
    submitted : false,
    // name: '',
    name: ['', Validators.required ],
    sale_price: ['', Validators.required ],
    short_description: ['', Validators.required ],
    discount: ['', Validators.required ],
    details:['', Validators.required ],
    brand: ['', Validators.required ],
    price: ['', Validators.required ],
    influencer:['', Validators.required ],
  });

  secondCheckoutForm = this.formBuilder.group({
    submitted : false,
    tax: ['', Validators.required ],
    product_info:['', Validators.required ],
    product_line: ['', Validators.required ],
    product_warranty: ['', Validators.required ],
    add_product_info: ['', Validators.required ],
    pr_kit: ['', Validators.required ],
    pick_up_time: ['', Validators.required ]
  });
  searchForm=  this.formBuilder.group({
    searchItem:""
  })
  
  
  categoryData2: any[] = [];
  images:any[] = [];
  categoryMost: any[] = [];
  categoryMost1: any[] = [];
  categoryMost2: any[] = [];
  categoryMost3: any[] = [];
  public product_respons:any;
  public objVendormodel: any;
  param: any;
  kraFile: any;
  public searchBy: any;
  isRecommendModalShow: boolean = false;
  isAddNewProductShow: boolean = false;
  isMoreProductInformationModalShow: boolean = false;
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
  constructor(private router: Router,
    private http: HttpClient,
    private excelService: ExcelService,
    public productService: ProductService,
    private formBuilder: FormBuilder,
  ) { }

  searchItem:any
  onClickSearchProduct(){  
    
    this.token = localStorage.getItem('token',);
   
//console.log("serch21",data)
  

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token

    });
    
    let options = { headers: headers };
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

 





  ngOnInit(): void {
    
      this.required_Form = this.formBuilder.group({
      name: ['', Validators.required ],
      sale_price: ['',Validators.required ]
      });
  
    ;
    // this.uploadForm = this.formBuilder.group({
    //   profile: ['']
    // });

    // mostCAtegory:pro[]=[]
    //this.onClickForGender('0','0');
    this.token = localStorage.getItem('token',);
    console.log("fgh123", this.token)

  

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token

    });
    
    let options = { headers: headers };
    console.log("optine", options)
  

    this.http.get(api_Url + '/api/products', options)
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



    this.chartOptions = this.getLightTheme();
  }
  onTabSelection(TabSelection:any,value:any,key:any) {
    
  }

  onActive(selectedValue:any) {
    var data_filter = this.JsonData.filter( element => element.active ==selectedValue.target.value);
    this.JsonData = data_filter;
    console.log(this.JsonData);
    ;
  }
  // onSearchDateByKye(searchBy:any) {
  //   ;
  //   var data_filter = this.JsonData.filter( element => element.name == searchBy || element.sku == searchBy || element.available == searchBy);
  //   this.JsonData = data_filter;
  //   console.log(this.JsonData);
  // }
  

  

// ######################################   image upload  #################################################

  // onFileChanged(event: any) {
  //   alert()
  //   this.kraFile = event.target.files[0];
  //   console.log("file", this.kraFile);
  // }
  // UploadDocument(data: any) {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-access-token': this.token
  //   });
  //   let options = { headers: headers };
  
  //   const uploadData = new FormData();
  //   console.log("uploadData", this.kraFile);
  //   uploadData.append('multi-files', this.kraFile, this.kraFile.name);
  //   // this.http.post<any>(`http://139.59.21.147:8080/api/products/multiple-upload/` , uploadData, {
  //   //   reportProgress: true,
  //   //   observe: 'events'
  //   // })
  //   // .subscribe((response:any) => {
  //   //   console.log("response",response)
  //   //   // alert('File uploaded successfully');
  //   //   // this.Uploadmsg = 'File uploaded successfully';
  //   //   // this.KraStatus = true;
  //   // }
  //   // (error) => {
  //   //   console.log("response12", Response)
  //     // this.Uploadmsg = 'something went wrong!!';
  //     // this.KraStatus = false;
  //     //alert('something went wrong!!');
  //     //console.log(error);
  //   // }
  //   // );


  // }

  // ################################    second type    ############################################



  // filterByCountry(event) {
  //   let country = event;
  //   let filteredCountry = this.customerArray
  //     .filter(customer => customer.countryCode === country);
  //   this.customerArray = filteredCountry;
  // }



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

imageSubmit(){
  
  this.product_respons;

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'x-access-token': this.token
    // });
    //let options = { headers: headers };
    const uploadData = new FormData();
    uploadData.append('image', this.imgData,this.imgData.name );
    console.log("12345",this.product_respons);
    this.http.post(`http://139.59.21.147:8080/api/users/upload_images/${this.product_respons[0].id}`,uploadData,{   //
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(res => {
        location.reload();
        setTimeout(() => {
          alert('Uploaded Successfully.');
        }, 30);
        
      })
  }
  

//  ######################################  second type End  ############################################

  // ###################################################image upload  ENd#################################################

  
  // onFileSelect(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.uploadForm.get('profile').setValue(file);
  //   }
  // }
  // onSubmitImage() {
  //   const formData = new FormData();
  //   formData.append('file', this.uploadForm.get('profile').value);

  //   this.httpClient.post<any>("http://139.59.21.147:8080/api/products/multiple-upload/1", formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }
// ############################# Add PRoduct Start ########################################


  onProductCreate(productTypeFirst: any) {
    this.submitted = true;
    let param: any;   
    this.productService.basicFormOne = this.checkoutForm.value;
    console.log("datatata", this.productService.basicFormOne)
  }
  disabled:any=true;
  onSecondProductCreate(productTypeSecond: any) {
    let param = Object.assign(this.productService.basicFormOne, this.secondCheckoutForm.value, this.productService.cate_id);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });
    let options = { headers: headers };

    this.http
      .post("http://139.59.21.147:8080/api/products", param, options)
      .subscribe((response: any) => {
       
        if (response.statuscode == '404') {
          alert(response.message);
        }
        else if (response.statuscode == '200') {
          ;
          alert("Product Uploaded Succussefully");
          this.product_respons = response.data;
          this.disabled=false;
          this.isMoreProductInformationModalShow = false;
          setTimeout(() => {
            document.getElementById("ProductImage-tab")?.click();
          }, 30);
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

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });

    let options = { headers: headers };
    this.http.get("http://139.59.21.147:8080/api/category/most_used_category", options)

      .subscribe((response: any) => {
        if (response.statuscode == '404') {

          alert(response.message);

        }
        else if (response.statuscode == '200') {
          this.categoryMost = (response.data)
          // if (type == 'most_cat') {
          //   this.categoryMost = (response.data)
          // }
          // else if (response.data.cat_id_1) {
          //   this.categoryMost1 = (response.data)
          // }
          // else if (response.data.cat_id_2) {
          //   this.categoryMost2 = (response.data)
          // }
          // else if (response.data.cat_id_3) {
          //   this.categoryMost3 = (response.data)
          // }



        }
      });

    // this.mostCAtegory = Response

  }
  selectedItem3:any
  selectedItem2:any
  selectedItem1:any
  selectedItem :any;
  onClickForGender(genderType: any, type: any,item:any=null) {
    ;
    this.selectedItem = item; 
    this.selectedItem1 = item; 
    this.selectedItem2 = item; 
    this.selectedItem3 = item; 
    

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
          }

          // this.categoryData.push(response.data); 
          else if (type == '1') {
            // this.class1.active = !this.class1.active;
           
            this.isCategoryShow2 = true;
            this.categoryData1 = response.data;
          }
          else if (type == '2') {
            this.isCategoryShow3 = true;
            this.categoryData2 = response.data;
          }
          else if (type == '3') {
           
            this.isCategoryShow3 = true;
            this.categoryData3 = response.data;
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

  onClickRecommend() {
    this.isRecommendModalShow = !this.isRecommendModalShow;
  }

  onClickAdd() {
    this.isMyProductsShow = false;
    this.isAddProductShow = true;
    this.onClickForGender('0', '0');
  }


  onClickMoreProductInformation() {

    this.isMoreProductInformationModalShow = !this.isMoreProductInformationModalShow;
  }

  onClickCreateNewProduct() {
    this.isAddProductShow = false;
    this.isAddNewProductShow = true;
  }
  gotoProductinfo() {
    document.getElementById("ProductInformation-tab")?.click();
    //this.router.navigateByUrl('/vendor/my-products');
    //this.router.navigate(["'/vendor/my-products'"], { relativeTo: this.route });
    //this.redirectTo('/vendor/my-products');
    ;
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
  Oneditproduct(Item: any) {
    if (Item.Action == "Edit") {
      this.isMyProductsShow = false;
      this.isAddNewProductShow = true;
      setTimeout(() => {
        document.getElementById("ProductInformation-tab")?.click();
      }, 30);

    }

  }
}
