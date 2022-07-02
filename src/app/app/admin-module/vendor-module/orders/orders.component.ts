import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../../../../../src/shared/services/Export/excel.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  isCustomDropdownShow: boolean = false;
  isOrderListingViewShow: boolean = true;
  isOrderDetailsViewShow: boolean = false;
  isOrderMediaDetailsShow: boolean = false;
  isRejectOrderModel: boolean = false;
  TabSelection: string = "All Orders";
  btnExport: string = "";
  SelectAll: boolean = false;
  JsonData: any[] = [];
  BulkActionList: any[] = []

  constructor(private router: Router,
    private excelService: ExcelService) {
  }



  ngOnInit(): void {
    this.JsonData.push({
      "Selected": false, "OrderNo": "#022943", "OrderDate": "10/03/2021 14:44", "UpdatedDate": "11/03/2021 14:44", "OrderStatus": "Completed",
      "Price": "1999.99", "Items": "5", "PackedItems": "0", "PaymentMethod": "Google Pay"
      ,"Action":""
    });

    this.JsonData.push({
      "Selected": false, "OrderNo": "#022944", "OrderDate": "10/03/2021 14:44", "UpdatedDate": "11/03/2021 14:44", "OrderStatus": "Completed",
      "Price": "1999.99", "Items": "5", "PackedItems": "0", "PaymentMethod": "Google Pay"
      ,"Action":""

    });

    this.JsonData.push({
      "Selected": false, "OrderNo": "#022945", "OrderDate": "10/03/2021 14:44", "UpdatedDate": "11/03/2021 14:44", "OrderStatus": "Completed",
      "Price": "1999.99", "Items": "5", "PackedItems": "0", "PaymentMethod": "Google Pay"
      ,"Action":""

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
  onclickAction(item:any) {


    if (item.Action == "Update" || item.Action == "vieworder") {
      this.onClickOrder();
    }
    else if (item.Action == "Reject") {
      this.onClickRejectorder()
    }
  }
  onClickRejectorder() {
    this.isRejectOrderModel = !this.isRejectOrderModel
  }

  onTabSelection(TabSelection: string) {
    this.TabSelection = TabSelection;
    this.BulkActionList = [];
    if (this.TabSelection == "Pending") {
      this.BulkActionList.push({ "Action": "Processing" });
    }
    else if (this.TabSelection == "Processing") {
      this.BulkActionList.push({ "Action": "Ready to Ship" });

    }
    else if (this.TabSelection == "Ready to Ship") {
      this.BulkActionList.push({ "Action": "Shipped" });

    }
    else if (this.TabSelection == "Shipped") {
      this.BulkActionList.push({ "Action": "Delivered" });

    }
    else if (this.TabSelection == "Delivered") {
      this.BulkActionList.push({ "Action": "Completed" });

    }
    else if (this.TabSelection == "Completed") {

    }
  }

  Downloadfile() {
    //let 
    let temp = this.JsonData;
    for (let index = 0; index < temp.length; index++) {
      delete temp[index].Selected
    }

    if (this.btnExport == "Excel") {

      this.excelService.exportAsExcelFile(temp, 'OrderTransactions');
    }
    else if (this.btnExport == "CSV") {
      this.excelService.exportAsCSVFile(temp, 'OrderTransactions')
    }

  }
  onSelectAll() {
    this.JsonData.forEach(element => {
      element.Selected = this.SelectAll;
    });
  }
}
