import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { CapabilitiesSettingsComponent } from './capabilities-settings/capabilities-settings.component';
import { CommissionSettingsComponent } from './commission-settings/commission-settings.component'
import { MarketplaceSettingsComponent } from './marketplace-settings/marketplace-settings.component';
import { WithdrawalSettingsComponent } from './withdrawal-settings/withdrawal-settings.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { OrderSettingsComponent } from './order-settings/order-settings.component';
import { RefundSettingsComponent } from './refund-settings/refund-settings.component';
import { ReviewSettingsComponent } from './review-settings/review-settings.component';
import { ShippingSettingsComponent } from './shipping-settings/shipping-settings.component';
import { GeoLocationSettingsComponent } from './geo-location-settings/geo-location-settings.component';

const routes: Routes = [
  { path: '', component: SettingsHomeComponent },
  { path: 'capabilities-settings', component: CapabilitiesSettingsComponent },
  { path: 'commission-settings', component: CommissionSettingsComponent },
  { path: 'marketplace-settings', component: MarketplaceSettingsComponent },
  { path: 'withdrawal-settings', component: WithdrawalSettingsComponent },
  { path: 'payment-settings', component: PaymentSettingsComponent },
  { path: 'order-settings', component: OrderSettingsComponent },
  { path: 'refund-settings', component: RefundSettingsComponent },
  { path: 'review-settings', component: ReviewSettingsComponent },
  { path: 'shipping-settings', component: ShippingSettingsComponent },
  { path: 'geo-location-settings', component: GeoLocationSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsModuleRoutingModule { }
