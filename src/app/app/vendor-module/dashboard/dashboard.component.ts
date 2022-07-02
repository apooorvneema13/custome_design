import { Component, OnInit, ViewChild } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder,FormGroup,FormControl,Validators,FormControlName } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  token:any
  website_analytics_chart: any;
  basicOptions: any;
  rangeDates: Date[] | undefined;
  data: any;
  chartOptions: any;
  lineStylesData: any;
  basicOptions1: any;
  rxTime = new Date();
  subscription: Subscription | undefined;
  @ViewChild('calendar') private calendar: any;

  constructor(
    private http: HttpClient,


  ) { }
  
  ngOnInit(): void {
    this.rangeDates = [];
    this.rangeDates?.push(new Date(new Date().getTime() - (60000 * 10080)));
    this.rangeDates?.push(new Date());
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
    this.basicOptions = {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      }
    };
    this.website_analytics_chart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [0, 0, 10, 0, 0],
          fill: false,
          borderColor: '#DE3731',
          tension: 0
        }

      ]
    };


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



    this.chartOptions = this.getLightTheme();


    this.lineStylesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [15, 30, 40, 51, 46, 35, 20],
          fill: true,
          tension: .4,
          borderColor: '#DE3731',
          backgroundColor: '#DE3731'
        },
        {
          label: 'Second Dataset',
          data: [12, 31, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: '#B3B3B3',
          tension: .4,
          backgroundColor: '#B3B3B3'
        }
      ]
    };


    this.basicOptions1 = {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

  }

  // SloderImage(genderType:any) {
  //   alert()

  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-access-token': this.token
  //   });
    
  //   let options = { headers: headers };
  //   // let param = { product_id: genderType }
  //   // console.log("12",param)  
  //   this.http
  //     .post("http://139.59.21.147:8080/api/products/product_images",  options)
  //     .subscribe((response: any) => {
  //       if (response.statuscode == '404') {
  //         alert(response.message);
  //       }
  //       else if (response.statuscode == '200') {
          
  //        alert(response.message)
  //       }
  //     });


  //   //this.productService.gender = genderType;
  //   //this.isCategoryShow1 = true;
  // }




  getLightTheme() {
    return {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  }

  onSelect() {
    if (this.rangeDates != undefined && this.rangeDates[1] != null) { // If second date is selected
      this.calendar.overlayVisible = false;
    }
  }

}
