import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { walletModel } from 'src/shared/model/fake/fakeDataModel';
import { ExcelService } from 'src/shared/services/Export/excel.service';

@Component({
  selector: 'my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss']
})
export class MyWalletComponent implements OnInit {
  isVerificationCodeModalShow: boolean = false;
  isTransactionsShow: boolean = false;
  isPaymentMethodShow: boolean = false;
  isWithdrawSuccessShow: boolean = false;
  isTransactionsListShow: boolean = true;
  isPaymentOptionShow: boolean = true;
  isWelcomeShow: boolean = true;
  @ViewChild('calendar') private calendar: any;
  rangeDates: Date[] | undefined;
  values: any[] = [];
  btnExport: string = "Export";
  JsonData: walletModel[] = [];
  AllJsonData: walletModel[] = [];
  SelectAll: boolean = false;
  FilterBy: string = "";
  constructor(private router: Router,
    private excelService: ExcelService) {

  }
  ngOnInit(): void {


    // this.JsonData.push(
    //   {
    //     Selected: false,
    //     Date: new Date("01/02/2022"),
    //     Description: "La Nuit de l'Homme YSL cologne",
    //     Account: "MPESA",
    //     Amount: 33333.00,
    //     Deposits: 33333.00,
    //     Withdrawals: 33333.00,
    //     Balance: 33333.00
    //   });

    // this.JsonData.push(
    //   {
    //     Selected: false,
    //     Date: new Date("01/03/2022"),
    //     Description: "La Nuit de l'Homme YSL cologne",
    //     Account: "MPESA",
    //     Amount: 33333.00,
    //     Deposits: 33333.00,
    //     Withdrawals: 33333.00,
    //     Balance: 33333.00
    //   });

    // this.JsonData.push(
    //   {
    //     Selected: false,
    //     Date: new Date("01/04/2022"),
    //     Description: "La Nuit de l'Homme YSL cologne",
    //     Account: "MPESA",
    //     Amount: 33333.00,
    //     Deposits: 33333.00,
    //     Withdrawals: 33333.00,
    //     Balance: 33333.00
    //   });
    // this.JsonData.push(
    //   {
    //     Selected: false,
    //     Date: new Date("01/05/2022"),
    //     Description: "La Nuit de l'Homme YSL cologne",
    //     Account: "BANK",
    //     Amount: 33333.00,
    //     Deposits: 33333.00,
    //     Withdrawals: 33333.00,
    //     Balance: 33333.00
    //   });
    // this.JsonData.push(
    //   {
    //     Selected: false,
    //     Date: new Date("01/05/2022"),
    //     Description: "La Nuit de l'Homme YSL cologne",
    //     Account: "BANK",
    //     Amount: 33333.00,
    //     Deposits: 33333.00,
    //     Withdrawals: 33333.00,
    //     Balance: 33333.00
    //   });
    // this.JsonData.push(
    //   {
    //     Selected: false,
    //     Date: new Date("01/05/2022"),
    //     Description: "La Nuit de l'Homme YSL cologne",
    //     Account: "BANK",
    //     Amount: 33333.00,
    //     Deposits: 33333.00,
    //     Withdrawals: 33333.00,
    //     Balance: 33333.00
    //   });
    // this.JsonData.push(
    //   {
    //     Selected: false,
    //     Date: new Date("01/05/2022"),
    //     Description: "La Nuit de l'Homme YSL cologne",
    //     Account: "BANK",
    //     Amount: 33333.00,
    //     Deposits: 33333.00,
    //     Withdrawals: 33333.00,
    //     Balance: 33333.00
    //   });
    this.AllJsonData = JSON.parse(JSON.stringify(this.JsonData));
  }

  onClickVerificationCodeModal() {
    this.isVerificationCodeModalShow = !this.isVerificationCodeModalShow;
    this.values = [];
  }

  onClickWithdraw() {
    this.isTransactionsListShow = false;
    this.isPaymentMethodShow = true;
  }

  onClickSubmitOtp() {
    if (this.isWelcomeShow == false) {
      this.onClickVerificationCodeModal();
      this.onClickWithdrawSubmit();
    }
    else {
      this.isWelcomeShow = false;
      this.isTransactionsShow = true;
      this.onClickVerificationCodeModal();
    }

  }

  onClickWithdrawSubmit() {
    this.isPaymentOptionShow = false;
    this.isPaymentMethodShow = true;
    this.isWithdrawSuccessShow = true;
    setTimeout(() => {
      this.router.navigateByUrl('/vendor/dashboard');
    }, 5000);
  }

  onSelect() {
    if (this.rangeDates != undefined && this.rangeDates[1] != null) { // If second date is selected
      this.calendar.overlayVisible = false;
      this.onFilterBy();
    }
  }

  onValidate(event: any, index: number) {
    let posision = index;
    const id = event.target.id;
    let element: HTMLInputElement;
    element = (<HTMLInputElement>document.getElementById(id));
    if (element.value.length > 1) {
      event.preventDefault();
    } else {
      if ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) {
        posision = index + 1;
      } else {
        if (event.key === 'Delete') {
        } else if (event.key === 'Backspace') {
          posision = index - 1;
        } else {
          if (element.value.length === 1) {
            if (!Number.parseInt(this.values[index])) {
              element.value = '';
            } else {
              element.value = element.value.substr(0, 1);
            }
          } else {
            event.preventDefault();
          }
        }
      }

      if (posision > -1 && posision < 6) {
        if (posision === 0) {
          this.setfocus('id1');
        }
        if (posision === 1) {
          this.setfocus('id2');
        }
        if (posision === 2) {
          this.setfocus('id3');
        }
        if (posision === 3) {
          this.setfocus('id4');
        }
        if (posision === 4) {
          this.setfocus('id5');
        }
        if (posision === 5) {
          this.setfocus('id6');
        }
      }
    }

  }
  setfocus(elementid = "") {
    let element: HTMLInputElement;
    element = (<HTMLInputElement>document.getElementById(elementid));
    element.focus();
  }

  Downloadfile() {

    let temp = JSON.parse(JSON.stringify(this.JsonData));
    for (let index = 0; index < temp.length; index++) {
      delete temp[index]["Selected"]
    }
    if (this.btnExport == "Excel") {
      this.excelService.exportAsExcelFile(temp, 'WalletTransactions');
    }
    else if (this.btnExport == "CSV") {
      this.excelService.exportAsCSVFile(temp, 'WalletTransactions')
    }
  }

  onSelectAll() {
    this.JsonData.forEach(element => {
      element.Selected = this.SelectAll;
    });
  }

  onFilterBy() {
    if (this.FilterBy == "") {
      this.JsonData = JSON.parse(JSON.stringify(this.AllJsonData));
    }
    else {
      this.JsonData = JSON.parse(JSON.stringify(this.AllJsonData.filter(x => x.Account == this.FilterBy)));
    }
    if (this.rangeDates != undefined && this.rangeDates[0] != null && this.rangeDates[1] != null) {
      let fromdata = new Date(this.rangeDates[0]);
      let todata = new Date(this.rangeDates[1]);
      this.JsonData = this.JsonData.filter(x => x.Date != undefined && new Date(x.Date) >= fromdata && new Date(x.Date) <= todata);
    }

  }

}
