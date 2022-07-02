import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: '.mainContent',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  piedata: any;
  chartOptions: any;
  c_growth: any;
  basicOptions: any;
  influ_stat_basicOptions: any;
  vendor_stat: any;
  influ_stat: any;
  sales_report_chart: any;
  website_analytics_chart: any;
  rxTime = new Date();
  subscription: Subscription | undefined;
  rangeDates: Date[] | undefined;
  Brithdate: Date | undefined;
  DateOfBirth: Date | undefined;
  headerConfig: any;
  constructor() { }
  ngOnInit(): void {
    this.headerConfig = {
      left: 'prev',
      center: 'title',
      right: 'next'
    };

    this.piedata = {
      labels: ['Fan of a Fan', 'Fenty Beauty Gloss Bomb Cream -FS', 'Maybelline Lipstick - 45 Escapist'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };

    this.c_growth = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Customer Growth ',
          backgroundColor: '#d50c91',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    this.influ_stat = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Influencer Statistics',
          backgroundColor: '#c8d400',
          data: [20, 30, 40, 50, 60, 70, 80]
        }
      ]
    };
    this.influ_stat_basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
            minRotation: 40,
            maxRotation: 350,
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057',
            min: 60,
            max: 0,
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    this.vendor_stat = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Vendors Statistics',
          backgroundColor: '#00a99d',
          data: [20, 40, 60, 50, 60, 75, 80]
        }
      ]
    };

    this.sales_report_chart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#d50c91',
          tension: 0
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#c8d400',
          tension: 0
        }
      ]
    };

    this.website_analytics_chart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#ED1C24',
          tension: 0
        }

      ]
    };

    this.chartOptions =
    {
      plugins: {
        legend: {
          position: 'right'
        }
      },
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
            minRotation: 40,
            maxRotation: 350,
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057',
            min: 60,
            max: 0,
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };


    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }
  
  @ViewChild('calendar') private calendar: any;
  onSelect() {
    if (this.rangeDates != undefined && this.rangeDates[1] != null) { // If second date is selected
      this.calendar.overlayVisible = false;
    }
  }

}
