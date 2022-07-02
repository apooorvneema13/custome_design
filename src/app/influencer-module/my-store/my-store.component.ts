import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from 'src/shared/services/Export/excel.service';
@Component({
  selector: 'my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.scss']
})
export class MyStoreComponent implements OnInit {
  TabSelection: string = "All";
  JsonData: any[] = [];
  btnExport: string = "";
  isRemoveProductModel: boolean = false;
  isViewOrderShow: boolean = false;
  isImageUploadModal: boolean = false;
  isMyOrderShow: boolean = true;

  constructor(private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.JsonData.push(
      {
        "Selected": false,
        "Name": "REVLON",
        "SKU": "BM 1710ST",
        "Created": "18 Dec 2021",
        "Price": "777777.00",
        "SalePrice": "677777.00",
        "AvailablePrice": "-",
        "Available": "666",
        "Visible": "Yes",
        "PRKit": "Yes",
        "Active": false
      })
  }

  onClickViewOrder() {
    this.isMyOrderShow = false;
    this.isViewOrderShow = true;
  }

  onTabSelection(TabSelection: string) {
    this.TabSelection = TabSelection;
  }

  onClickRemoveProduct() {
    this.isRemoveProductModel = !this.isRemoveProductModel;
  }

  onClickImgUpload() {
    this.isImageUploadModal = !this.isImageUploadModal;
  }

  Downloadfile() {
    let temp = this.JsonData;
    for (let index = 0; index < temp.length; index++) {
      delete temp[index].Selected
    }
    if (this.btnExport == "Excel") {
      this.excelService.exportAsExcelFile(temp, 'Products');
    }
    else if (this.btnExport == "CSV") {
      this.excelService.exportAsCSVFile(temp, 'Products')
    }

  }
}
