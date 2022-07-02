import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from '../../../../../src/shared/services/Export/excel.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isRecommendModalShow: boolean = false;
  isAddNewProductShow: boolean = false;
  isMoreProductInformationModalShow: boolean = false;
  isAddProductShow: boolean = false;
  isMyProductsShow: boolean = true;
  isCategoryShow1: boolean = false;
  isCategoryShow2: boolean = false;
  isCategoryShow3: boolean = false;

  data: any;
  // chartOptions: any;
  btnExport: string = "";
  TabSelection: string = "All";
  JsonData: any[] = [];
  SelectAll: boolean = false;
  ActionSelection:string="";
  constructor(
    private router: Router,
    private excelService: ExcelService
    ) {
  }
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
        "Active": false,
        "Action":""
      })

    this.JsonData.push(
      {
        "Selected": false,
        "Name": "DIOR",
        "SKU": "BM 1710ST",
        "Created": "18 Dec 2021",
        "Price": "777777.00",
        "SalePrice": "677777.00",
        "AvailablePrice": "-",
        "Available": "666",
        "Visible": "Yes",
        "PRKit": "Yes",
        "Active": true,
        "Action":""
      })
    this.JsonData.push(
      {
        "Selected": false,
        "Name": "CHANEL",
        "SKU": "BM 1710ST",
        "Created": "18 Dec 2021",
        "Price": "777777.00",
        "SalePrice": "677777.00",
        "AvailablePrice": "-",
        "Available": "666",
        "Visible": "Yes",
        "PRKit": "Yes",
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

    // this.chartOptions = this.getLightTheme();
  }

  getLightTheme() {
    return {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  }

  onClickForGender() {
    this.isCategoryShow1 = true;
  }

  onClickCategory1() {
    this.isCategoryShow2 = true;
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
  Oneditproduct(Item:any)
  {
     if(Item.Action=="edit")
     {
      this.isMyProductsShow = false;
      this.isAddNewProductShow = true;
      setTimeout(() => {
        document.getElementById("ProductInformation-tab")?.click();  
      }, 30);
      
    }

    
  }
}

