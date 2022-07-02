import { Component, OnInit, ViewChild } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  constructor() { }
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
          borderColor: '#D4145A',
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
            "#D4145A",
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
          borderColor: '#D4145A',
          backgroundColor: '#D4145A'
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
