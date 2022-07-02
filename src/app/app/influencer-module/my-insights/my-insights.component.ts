import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-insights',
  templateUrl: './my-insights.component.html',
  styleUrls: ['./my-insights.component.scss']
})
export class MyInsightsComponent implements OnInit {
  isShopEfficiencyShow: boolean = true;
  isShopEfficiencyContentShow: boolean = false;
  isAddInsightsModalShow: boolean = false;
  website_analytics_chart: any;
  basicOptions: any;
  lineStylesData: any;
  basicOptions1: any;

  constructor() { }
  ngOnInit(): void {
    this.website_analytics_chart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [0, 20, 0, 0, 0, 0, 0],
          fill: false,
          borderColor: '#7AC943',
          tension: 0
        }

      ]
    };
    this.lineStylesData = {
      labels: ['Mar 31, 12AM', 'Mar 31, 12AM', 'Apr 01, 12AM', 'Apr 02, 12AM', 'Apr 03, 12AM', 'Apr 04, 12AM', 'Apr 05, 12AM'],
      datasets: [
        {
          label: 'Gross Sales',
          data: [15, 30, 20, 51, 16, 35, 20],
          fill: false,
          tension: .4,
          borderColor: '#00ADE6',
          backgroundColor: '#00ADE6'
        },
        {
          label: 'Vendor Earnings',
          data: [12, 31, 62, 33, 21, 62, 45],
          fill: false,
          tension: .4,
          borderColor: '#00AB9C',
          backgroundColor: '#00AB9C'
        },
        {
          label: 'Shop Visits',
          data: [15, 30, 40, 31, 46, 35, 20],
          fill: false,
          tension: .4,
          borderColor: '#B4005D',
          backgroundColor: '#B4005D'
        },
        {
          label: 'Ad Campaigns Spend',
          data: [12, 31, 72, 33, 21, 62, 45],
          fill: false,
          tension: .4,
          borderColor: '#C4D400',
          backgroundColor: '#C4D400'
        },
        {
          label: 'Completed Orders',
          data: [15, 30, 50, 51, 46, 35, 20],
          fill: false,
          tension: .4,
          borderColor: '#FFAB00',
          backgroundColor: '#FFAB00'
        },
        {
          label: 'Products Sold',
          data: [12, 31, 22, 33, 21, 62, 45],
          fill: false,
          tension: .4,
          borderColor: '#FF4A00',
          backgroundColor: '#FF4A00'
        }
      ]
    };
  }

  onClickShopEfficiency() {
    this.isShopEfficiencyShow = false;
    this.isShopEfficiencyContentShow = true;
  }

  openCloseAddInsightsModal() {
    this.isAddInsightsModalShow = !this.isAddInsightsModalShow;
  }
}
