import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.vendorContent',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.scss']
})
export class VendorHomeComponent implements OnInit {
  JsonData: any[] = [];
  data: any;
  SelectAll: boolean = false
  isMyProductsShow: boolean = true;
  vendorRejectModal:boolean = false
  isAddNewProductShow: boolean = false;
  isAddProductShow: boolean = false;
  isRejectOrderModel: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.JsonData.push(
      {
        "Selected": false,
        "name": "Test",
        "industry": "Mac_It_Res",
        "Created": "25 May 2022",
        "email": "Test@gmail.com",
        "contact_person": "Mac",
        "contact_person_no": "995685695",       
        "Active": false,
        "Action":""
      })

    this.JsonData.push(
      {
        "Selected": false,
        "name": "Test",
        "industry": "Mac_It_Res",
        "Created": "25 May 2022",
        "email": "Test@gmail.com",
        "contact_person": "Mac",
        "contact_person_no": "995685695",       
        "Active": false,
        "Action":""
      })
    this.JsonData.push(
      {
        "Selected": false,
        "name": "Test",
        "industry": "Mac_It_Res",
        "Created": "25 May 2022",
        "email": "Test@gmail.com",
        "contact_person": "Mac",
        "contact_person_no": "995685695",       
        "Active": false,
        "Action":""
      })
    this.data = {
      labels: ['A', 'B'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: [
            "#DE3731",
            "#F6F6F6",
          ],
        }
      ]
    };
  }
  

  onSelectAll() {
    this.JsonData.forEach(element => {
      element.Selected = this.SelectAll;
    });
  }
  onClickAdd() {
    this.isMyProductsShow = false;
    this.isAddProductShow = true;
  }
  onClickCreateNewProduct() {
    this.isAddProductShow = false;
    this.isAddNewProductShow = true;
  }
  onclickAction(item:any) {


    // if (item.Action == "Update" || item.Action == "vieworder") {
    //   this.onClickOrder();
    // }
   if (item.Action == "Reject") {
      this.onClickRejectorder()
    }
  }
  onClickRejectorder() {
    this.isRejectOrderModel = !this.isRejectOrderModel
  }
  Oneditproduct(Item:any)
  {
     if(Item.Action=="Edit")
     {
      this.isMyProductsShow = false;
      this.isAddNewProductShow = true;
      setTimeout(() => {
        document.getElementById("ProductInformation-tab")?.click();  
      }, 30);
      
    }
    
  }

}
