import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'promotional',
  templateUrl: './promotional.component.html',
  styleUrls: ['./promotional.component.scss']
})
export class PromotionalComponent implements OnInit {
  isJoinACampaignModalShow: boolean = false;
  isDiscountWrapperShow: boolean = true;
  isCreateNewDiscountShow: boolean = false;
  isConfirmDiscountModalShow: boolean = false;
  isSelectCategoryShow: boolean = true;
  isSelectCampaignShow: boolean = false;
  isSelectYourProductsShow: boolean = false;
  isConfirmCampaignModalShow: boolean = false;
  isDiscountSummaryModalShow: boolean = false;
  isDiscountProductsShow: boolean = false;
  isNoCategoryShow: boolean = false;
  rangeDates: Date[] | undefined;
  productdata: any[] = [];
  Selectedproductdata: any[] = [];
  SelectAllProduct: boolean = false;
  ProceedAllProduct: boolean = false;
  Conditions: string = "";
  @ViewChild('calendar') private calendar: any;
  constructor(public router: Router) { }
  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.productdata.push(
        {
          "Selected": false,
          "imageurl": "assets/images/prod-img.png",
          "Descrition": "Product Name Description Goes Here Model Number Here "+(index+1),
          "Amount": "KSh."+(index+1)+"29,999.00"
        }
      );
    }
  }

  onClickJoinACampaign() {
    this.isJoinACampaignModalShow = !this.isJoinACampaignModalShow;
  }

  onClickDiscountSummary() {
    this.isDiscountSummaryModalShow = !this.isDiscountSummaryModalShow;
  }

  onClickConfirmDiscount(type: string) {
    this.isConfirmDiscountModalShow = !this.isConfirmDiscountModalShow;
    if (type == 'Yes') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/vendor/promotional']));
    }

  }

  onClickConfirmCampaign(type: string) {
    this.isConfirmCampaignModalShow = !this.isConfirmCampaignModalShow;
    if (type == 'Yes') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/vendor/promotional']));
    }
  }

  onClickAddDiscount() {
    this.isDiscountWrapperShow = false;
    this.isCreateNewDiscountShow = true;
  }

  onClickSelectCategory() {
    this.isSelectCategoryShow = false;
    this.isSelectCampaignShow = true;
  }

  onClickNoCategory() {
    this.isSelectCategoryShow = false;
    this.isNoCategoryShow = true;
  }

  onClickSelectCampaign() {
    this.isSelectYourProductsShow = true;
    this.isSelectCampaignShow = false;
  }

  onClickSelectProduct() {
    this.isSelectYourProductsShow = false;
    this.isDiscountProductsShow = true;
    this.Selectedproductdata=JSON.parse(JSON.stringify(this.productdata.filter(x=>x.Selected)));
    this.Selectedproductdata.forEach(element => {
      element.Selected=false
    });  
  }
  openCampaigns() {
    document.getElementById("profiletab")?.click();
  }
  Adddiscount() {
    document.getElementById("discounts-tab")?.click();
    this.onClickAddDiscount();

  }
  ExpantProduct() {
    let tempprodtab = document.getElementById("collapseProduct")?.className;
    if (tempprodtab != 'collapse show') {
      document.getElementById("idproducttab")?.click();
    }
  }

  onSelect() {
    if (this.rangeDates != undefined && this.rangeDates[1] != null) { // If second date is selected
      this.calendar.overlayVisible = false;
    }
  }
  onSelectAll() {
    // if (this.SelectAllProduct) 
    // {
  this.productdata.forEach(element => {
  element.Selected=this.SelectAllProduct
  });
    //}
  }
  onProceedAllProduct()
  {
    this.Selectedproductdata.forEach(element => {
      element.Selected=this.ProceedAllProduct
      });
  }
  onchangecondition(Conditions:string)
  {
    var element=document.getElementById('conditionddl');
    if(Conditions!='Limited')
    {
      element?.setAttribute("disabled","disabled");
    }
    else
    {
      element?.removeAttribute("disabled");
    }
    
    
    
  }
}
