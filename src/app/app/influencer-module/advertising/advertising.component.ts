import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from 'src/shared/services/Export/excel.service';
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
  isYourRateCard: boolean = false;
  iscreateAd: boolean = false;
  Addtype: string = "Existing";
  Influencertype: string = "";
  btnExport: string = "Export";
  JsonData: any[] = [];
  AllJsonData: any[] = [];

  constructor(private router: Router,
    private excelService: ExcelService) { }
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
    // this.isadvsummery=true;
    this.isYourRateCard = true;
    this.iscreateAd = false;
  }
  onClickRateCard() {
    this.isYourRateCard = false;
    this.isadvsummery = true;
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
}
