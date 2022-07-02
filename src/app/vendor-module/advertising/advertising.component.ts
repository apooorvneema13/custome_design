import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IpayModel } from 'src/shared/model/fake/fakeDataModel';
import { ExcelService } from 'src/shared/services/Export/excel.service';
import { UserService } from 'src/shared/services/user/user.service';
declare function myfunction(): any;
@Component({
  selector: 'advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {
  isExistingImageShow: boolean = true;
  isExistingImagePreviewShow: boolean = false;
  isAdvertisingCampaignsShow: boolean = true;
  isAdvertisingCampaignsViewShow: boolean = false;
  isAdvertisingReportsCampaignsShow: boolean = true;
  isAdvertisingReportsCampaignsViewShow: boolean = false;
  isAddFundsModalShow: boolean = false;
  DurationDate: Date | undefined;
  iswellcome: boolean = true;
  isteamandcondition: boolean = false;
  isadvsummery: boolean = false;
  isConfirmModalShow: boolean = false;
  iscreateAd: boolean = false;
  Addtype: string = "Existing";
  Influencertype: string = "";
  btnExport: string = "Export";
  JsonData: any[] = [];
  AllJsonData: any[] = [];
  objIpayModel: IpayModel = new IpayModel();
  constructor(private router: Router,
    private excelService: ExcelService,
    private objuserservice: UserService) { }
  rangeDates: Date[] | undefined;
  @ViewChild('calendar') private calendar: any;
  rangeDates1: Date[] | undefined;
  @ViewChild('calendar1') private calendar1: any;

  ngOnInit(): void {
    //this.iswellcome = true;

    this.JsonData.push(
      {
        Selected: false,
        Date: new Date("01/02/2022"),
        Influencer: "Chantelle Petit - (Influencer)",
        Account: "MPESA",
        Amount: 33333.00,
        Action: "Approved"
      });
    this.JsonData.push(
      {
        Selected: false,
        Date: new Date("01/02/2022"),
        Influencer: "Chantelle Petit - (Influencer)",
        Account: "BANK",
        Amount: 33333.00,
        Action: "Approved"
      });

    if (localStorage.getItem("verifyAdd") != undefined && localStorage.getItem("verifyAdd") == "Yes") {
      this.gotoAddCenter();
    }


  }

  onClickConfirmDiscount() {
    this.isConfirmModalShow = !this.isConfirmModalShow;
  }

  onSelect1() {
    if (this.rangeDates1 != undefined && this.rangeDates1[1] != null) { // If second date is selected
      this.calendar1.overlayVisible = false;
    }
  }
  onSelect() {
    if (this.rangeDates != undefined && this.rangeDates[1] != null) { // If second date is selected
      this.calendar.overlayVisible = false;
    }
  }
  gotTeamandCondition() {
    this.iswellcome = false;
    this.isteamandcondition = true;
  }
  gotoAddCenter() {
    this.isteamandcondition = false;
    this.isadvsummery = true;
    this.iscreateAd = false;
    this.iswellcome = false;
    localStorage.setItem("verifyAdd", "Yes");
  }
  onClickPreview() {
    this.isExistingImageShow = false;
    this.isExistingImagePreviewShow = true;
  }

  onClickPreviewClose() {
    this.isExistingImagePreviewShow = false;
    this.isExistingImageShow = true;

  }

  Openadd() {
    this.iscreateAd = true;
    this.isadvsummery = false;
    setTimeout(() => {
      this.setfocus('iscreateAd');
    }, 20);

  }
  setfocus(elementid = "") {
    let element: HTMLInputElement;
    element = (<HTMLInputElement>document.getElementById(elementid));
    element.focus();
  }

  onClickCampaignsview() {
    this.isAdvertisingCampaignsShow = false;
    this.isAdvertisingCampaignsViewShow = true;
  }

  onClickCampaignsViewBack() {
    this.isAdvertisingCampaignsViewShow = false;
    this.isAdvertisingCampaignsShow = true;
  }

  onClickCampaignsReportview() {
    this.isAdvertisingReportsCampaignsShow = false;
    this.isAdvertisingReportsCampaignsViewShow = true;
  }

  openCloseAddFundsModal() {
    this.isAddFundsModalShow = !this.isAddFundsModalShow;
  }
  ExpantProduct() {
    let tempprodtab = document.getElementById("collapseProduct")?.className;
    if (tempprodtab != 'collapse show') {
      document.getElementById("idproducttab")?.click();
    }
  }

  Downloadfile() {

    let temp = JSON.parse(JSON.stringify(this.JsonData));
    for (let index = 0; index < temp.length; index++) {
      delete temp[index]["Selected"]
    }
    if (this.btnExport == "Excel") {
      this.excelService.exportAsExcelFile(temp, 'PaymentTransactions');
    }
    else if (this.btnExport == "CSV") {
      this.excelService.exportAsCSVFile(temp, 'PaymentTransactions')
    }
  }
  gotopaymentGetway() {

    let a = document.createElement('a');
    a.target = '_blank';
    a.href = 'https://payments.ipayafrica.com/v3/ke?live=1&oid=112&inv=112&ttl=50&tel=9925707990&eml=janvijoshi134@gmail.com&vid=demo&curr=KES&p1=112&p2=112&p3=112&p4=112&cbk=https://kune.africa/success&cst=1&crl=2&hsh=9889193727b827a882d7a5a21b1f9f1508461875&autopay=0';
    a.click();

    //    window.location.href ='';
    //myfunction();

    //   //this.openCloseAddFundsModal();
    //  this.objuserservice.IpayGet1().toPromise().then((response) => {
    //    if (response.statuscode == 200) 
    //    {

    //    }
    //   else 
    //   {

    //   }
    //  },
    //    (error) => {

    //      console.log("Validate User " + JSON.stringify(error));
    //    });
  }
}
