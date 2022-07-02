import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from './../../../shared/services/Export/excel.service';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";
var api_Url = 'http://139.59.21.147:8080';

interface product_respons_id{
id:any
}

@Component({
  selector: 'my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})

//  interface Foo {
//     one: number;
//     two: string;
// }



export class MyProductsComponent implements OnInit {
  file:any[] = [];
  images:any[] = [];
 


product_respons_id:any


myForm = new FormGroup({    
  
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  // uploadForm: FormGroup;

  categoryData2: any[] = [];

  checkoutForm = this.formBuilder.group({
    name: '',
    sale_price: '',
    short_description: '',
    discount: '',
    details: '',
    brand: '',
    price: '',
    influencer: '',
  });

  secondCheckoutForm = this.formBuilder.group({
    tax: '',
    product_info: '',
    product_line: '',
    product_warranty: '',
    add_product_info: '',
    pr_kit: '',
    pick_up_time: ''
  });


  categoryMost: any[] = [];
  categoryMost1: any[] = [];
  categoryMost2: any[] = [];
  categoryMost3: any[] = [];
  product_respons:any[]=[]
  public objVendormodel: any;
  param: any;
  kraFile: any;
  isRecommendModalShow: boolean = false;
  isAddNewProductShow: boolean = false;
  isMoreProductInformationModalShow: boolean = false;
  isAddProductShow: boolean = false;
  isMyProductsShow: boolean = true;
  isCategoryShow1: boolean = false;
  categoryData1: any;
  categoryData3: any;
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
  constructor(private router: Router,
    private http: HttpClient,
    private excelService: ExcelService,
    public productService: ProductService,
    private formBuilder: FormBuilder,
  ) {}

  get dataf(){
    return this.myForm.controls;
  } 
  // onFileChange(event:any) {
  //   if (event.target.files && event.target.files[0]) {
  //       var filesAmount = event.target.files.length;
  //       for (let i = 0; i < filesAmount; i++) {
  //               var reader = new FileReader();
   
  //               reader.onload = (event:any) => {
  //                 console.log(event.target.result);
  //                  this.images.push(event.target.result); 
   
  //                  this.myForm.patchValue({
  //                     fileSource: this.images
  //                  });
  //               }
  
  //               reader.readAsDataURL(event.target.files[i]);
  //       }
  //   }
  // }
  ngOnInit(): void {
    ;
    // this.uploadForm = this.formBuilder.group({
    //   profile: ['']
    // });

    // mostCAtegory:pro[]=[]
    //this.onClickForGender('0','0');
    this.token = localStorage.getItem('token',);
    console.log("fgh123", this.token)

    ;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token

    });
    ;
    let options = { headers: headers };
    console.log("optine", options)
    ;

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

// ######################################   image upload  #################################################

  // UploadDocument(data:any) {
    
    
    
  //   
  //   this.token = localStorage.getItem('token',);
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-access-token': this.token
  //   });
  //   let options = { headers: headers };
  //   
  
  //   const uploadData = new FormData();
  //   console.log("uploadData", this.kraFile);

  //   uploadData.append('multi-files', this.kraFile, this.kraFile.name,);
  //   // uploadData.append('options', options);
    
  //   this.http.post<any>(`http://139.59.21.147:8080/api/products/multiple-upload/1` ,uploadData,  {
  //       reportProgress: true,
  //       observe: 'events'
  //     },  )
  //   .subscribe((response) => {
  //     console.log("response",response)
  //     // alert('File uploaded successfully');
  //     // this.Uploadmsg = 'File uploaded successfully';
  //     // this.KraStatus = true;
  //   });


  // }

  

  // ################################    second type    ############################################

  // onFileChange(event:any) {

  //   if (event.target.files && event.target.files[0]) {
  //       var kraFile = event.target.files.length;
  //       for (let i = 0; i < kraFile; i++) {
  //               var reader = new FileReader();
   
  //               reader.onload = (event:any) => {
  //                 console.log("result",event.target.result);
  //                  this.images.push(event.target.result); 
   
  //                  this.myForm.patchValue({
  //                     fileSource: this.images
  //                  });
  //               }
  
  //               reader.readAsDataURL(event.target.files[i]);
  //       }
  //   }
  // }

  // imageSubmit(){   
   
    
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-access-token': this.token
  //   });
  //   let options = { headers: headers };
  //   const uploadData = new FormData();
  //   uploadData.append('multi-files[]', this.myForm.value,);
  //   console.log("12345",this.myForm.value)
  //   this.http.post('http://139.59.21.147:8080/api/products/multiple-upload/1', uploadData,options)
  //     .subscribe(res => {
  //       console.log(res);
  //       alert('Uploaded Successfully.');
  //     })
  //     // alert("image uploaded")
  // }

  

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
    let param: any;   
    this.productService.basicFormOne = this.checkoutForm.value;
    console.log("datatata", this.productService.basicFormOne)
  }

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
          alert("Product Uploaded Succussefully");
          this.product_respons = response.data
          this.product_respons_id = response.data.id



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


  onClickForGender(genderType: any, type: any) {
    ;
    if(type == '4') {
      this.productService.cate_id = { cat_id: genderType };
      return;
    }
    ;
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

  onTabSelection(TabSelection: string) {
    this.TabSelection = TabSelection;
  }
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
