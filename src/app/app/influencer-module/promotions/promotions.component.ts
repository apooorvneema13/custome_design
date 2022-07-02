import { Component, OnInit, ViewChild } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  isCampaignListShow: boolean = true;
  isCampaignListDetailsShow: boolean = false;
  isViewCampaignModalShow: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onClickCampaignBox() {
    this.isCampaignListShow = false;
    this.isCampaignListDetailsShow = true;
  }

  onClickViewCampaign() {
    this.isViewCampaignModalShow = !this.isViewCampaignModalShow;
  }
}
