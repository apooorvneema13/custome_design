import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ExcelService} from 'src/shared/services/Export/excel.service';
import {HttpClient} from '@angular/common/http';

import {
    EmailValidator,
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
    FormControlName
} from '@angular/forms';
import {HttpHeaders} from "@angular/common/http";

var api_Url = 'http://139.59.21.147:8080';

@Component({selector: 'my-orders', templateUrl: './my-orders.component.html', styleUrls: ['./my-orders.component.scss']})
export class MyOrdersComponent implements OnInit {
  
    reject_reason:any
    JsonAllData : any;
    token : any;
    user_id : any
    isCustomDropdownShow : boolean = false;
    isOrderListingViewShow : boolean = true;
    isOrderDetailsViewShow : boolean = false;
    isOrderMediaDetailsShow : boolean = false;
    isRejectOrderModel : boolean = false;
    TabSelection : string = "All Orders";
    btnExport : string = "";
    SelectAll : boolean = false;
    JsonData : any[] = [];
    BulkActionList : any[] = []
    
    
    constructor(private router : Router, private excelService : ExcelService, private http : HttpClient, private formBuilder : FormBuilder,) {}
    ngOnInit(): void {
        this.orderListGet()
    }


    mySumit = this.formBuilder.group({
      name: ['', Validators.required ],

    });
   
    imgData:any
   
    orderListGet() {
        this.token = localStorage.getItem('token',);
        this.user_id = localStorage.getItem('VendorId');
        console.log("fgh123", this.token)

        let headers = new HttpHeaders({'Content-Type': 'application/json', 'x-access-token': this.token});
        let options = {
            headers: headers
        };
        let orderParam = {
            "user_id": this.user_id
        }


        this.http.post(api_Url + '/api/orders/order_by_user', orderParam, options).subscribe((response : any) => {
            if (response.statuscode == '404') {
                alert(response.message);
            } else if (response.statuscode == '200') {
                this.JsonData = response.data;
            }
        });
    }

    onClickCustomDropdown() {
        this.isCustomDropdownShow = !this.isCustomDropdownShow;
    }

    onClickOrder() {
        this.isOrderListingViewShow = false;
        this.isOrderDetailsViewShow = true;
    }

    onClickImage() {
        this.isOrderDetailsViewShow = false;
        this.isOrderMediaDetailsShow = true;
    }
    onclickAction(item : any) {
        

        this.token = localStorage.getItem('token');
    // this.user_id = localStorage.getItem('VendorId');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    });

    let options = { headers: headers };

        if (item.Action == "Update" || item.Action == "vieworder") {
            this.onClickOrder();
        } else if (item.Action == "Reject") {
            this.onClickRejectorder(item)
        }


        if (item.Action == 'accept') {
          let param = { 
            // status: item.status,
            id:item.id
          }
          this.http
            .post("http://139.59.21.147:8080/api/orders/order_accept", param, options)
            .subscribe((response: any) => {             
              if (response.statuscode == '404') {
                alert(response.message);
              }
              else if (response.statuscode == '200') {
                console.log("response.data",response.data)
                // alert(response.message);
                // this.Item = response.data;
                console.log(" this.JsonData this.JsonData", this.JsonData)
               }              
            });
        }
        
    }
    onClickRejectorder(item:any) {
    
        this.isRejectOrderModel = !this.isRejectOrderModel
      this.token = localStorage.getItem('token');
      // this.user_id = localStorage.getItem('VendorId');
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      });
  
      let options = { headers: headers };
      
        if (item.Action == 'Reject') {
          let param = {            
            reject_reason:this.mySumit.value,       
            id:item.id
          }
          this.http
            .post("http://139.59.21.147:8080/api/orders/order_reject", param, options)
            .subscribe((response: any) => {             
              if (response.statuscode == '404') {
                // alert(response.message);
              }
              else if (response.statuscode == '200') {
                console.log("response.data",response.data)
                // alert(response.message);
                // this.Item = response.data;
                console.log(" this.JsonData this.JsonData", this.JsonData)
               }              
            });
        }
        

    }

    OnPanddingData(TabSelection:any) { 

      this.user_id = localStorage.getItem('VendorId');
      let param = { 
        filter_type:TabSelection,
        user_id:this.user_id
      }
   
      
      ;
      // console.log("TabSelection",TabSelection)
  
      this.http
        .post("http://139.59.21.147:8080/api/orders/order_pending_user", param)
        .subscribe((response: any) => {
         
          if (response.statuscode == '404') {
            alert(response.message);
          }
          else if (response.statuscode == '200') {
            // alert(response.message);
            this.JsonData = response.data;
   
            ;
            
            
            
          }
        });


  
      
    }

    onTabSelection(TabSelection : string) {
        
        this.TabSelection = TabSelection;
        this.BulkActionList = [];

        this.user_id = localStorage.getItem('VendorId');
        this.token = localStorage.getItem('token',);  
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }); let options = {  headers: headers  };
        let param = {
          user_id:this.user_id,
          filter_type:TabSelection

        }

         this.http
        //  .post("http://139.59.21.147:8080/api/orders/order_pending_user", param,options)
        .post("http://139.59.21.147:8080/api/orders/order_filter", param,options)
        .subscribe((response: any) => {
     
         if (response.statuscode == '404') {
         alert(response.message);
         }
        else if (response.statuscode == '200') {
        // alert(response.message);
        this.JsonData = response.data;

        ;     
        
      }
    });





        if (this.TabSelection == "Pending") {
            this.BulkActionList.push({"Action": "Processing"});
      
            

        } else if (this.TabSelection == "Processing") {
            this.BulkActionList.push({"Action": "Ready to Ship"});


            

        } else if (this.TabSelection == "Ready to Ship") {
            this.BulkActionList.push({"Action": "Shipped"});

        } else if (this.TabSelection == "Shipped") {
            this.BulkActionList.push({"Action": "Delivered"});

        } else if (this.TabSelection == "Delivered") {
            this.BulkActionList.push({"Action": "Completed"});

        } else if (this.TabSelection == "Completed") {}




        
    }


    Downloadfile() { // let
        let temp = this.JsonData;
        for (let index = 0; index < temp.length; index++) {
            delete temp[index].Selected
        }

        if (this.btnExport == "Excel") {

            this.excelService.exportAsExcelFile(temp, 'OrderTransactions');
        } else if (this.btnExport == "CSV") {
            this.excelService.exportAsCSVFile(temp, 'OrderTransactions')
        }

    }
    onSelectAll() {
        this.JsonData.forEach(element => {
            element.Selected = this.SelectAll;
        });
    }
}
