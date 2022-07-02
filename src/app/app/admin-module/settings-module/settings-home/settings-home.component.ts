import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: '.settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss']
})
export class SettingsHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnClickCapabilitiesSettings() {
    this.router.navigateByUrl('/admin/settings/capabilities-settings');
  }

  OnClickCommissionSettings() {
    this.router.navigateByUrl('/admin/settings/commission-settings');
  }

  OnClickMarketplaceSettings() {
    this.router.navigateByUrl('/admin/settings/marketplace-settings');
  }
  
  OnClickWithdrawalSettings() {
    this.router.navigateByUrl('/admin/settings/withdrawal-settings');
  }

  OnClickPaymentSettings() {
    this.router.navigateByUrl('/admin/settings/payment-settings');
  }

  OnClickOrderSettings() {
    this.router.navigateByUrl('/admin/settings/order-settings');
  }

  OnClickRefundSettings() {
    this.router.navigateByUrl('/admin/settings/refund-settings');
  }

  OnClickReviewSettings() {
    this.router.navigateByUrl('/admin/settings/review-settings');
  }
  
  OnClickShippingSettings() {
    this.router.navigateByUrl('/admin/settings/shipping-settings');
  }

  OnClickGeoLocationSettings() {
    this.router.navigateByUrl('/admin/settings/geo-location-settings');
  }
}
