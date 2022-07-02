import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';
import { AdvertisingComponent } from './advertising/advertising.component';
import { CalendarModule } from 'primeng/calendar';
import { MyInsightsComponent } from './my-insights/my-insights.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';

import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { InfluencerModuleRoutingModule } from './influencer-module-routing.module';
import { FaqComponent } from './faq/faq.component';
import { StarloginComponent } from './starlogin/starlogin.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  declarations: [
    DashboardComponent,
    //VendorloginComponent,
    AdvertisingComponent,
    MyInsightsComponent,
    // MyOrdersComponent,
    // PromotionalComponent,
    // MyProductsComponent,
    MyStoreComponent,
     MyWalletComponent,
     FaqComponent,
    EditShopComponent,
    StarloginComponent,
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    InfluencerModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ChartModule,
    //SocialLoginModule,
    NgxMaskModule.forRoot(),
    // MessagesModule,
    // MessageModule,
    // ToastModule,
    // NgxFileDropModule,

  ]
})
export class InfluencerModuleModule { }
