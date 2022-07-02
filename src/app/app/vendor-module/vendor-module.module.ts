import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorModuleRoutingModule } from './vendor-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
// import { MessagesModule } from 'primeng/messages';
// import { MessageModule } from 'primeng/message/message';
// import { ToastModule } from 'primeng/toast';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';
import { AdvertisingComponent } from './advertising/advertising.component';
import { CalendarModule } from 'primeng/calendar';
import { MyInsightsComponent } from './my-insights/my-insights.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PromotionalComponent } from './promotional/promotional.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { FaqComponent } from './faq/faq.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    DashboardComponent,
    VendorloginComponent,
    AdvertisingComponent,
    MyInsightsComponent,
    MyOrdersComponent,
    PromotionalComponent,
    MyProductsComponent,
    MyWalletComponent,
    FaqComponent,
    EditShopComponent
  ],
  imports: [
    CommonModule,
    VendorModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ChartModule,
   	HttpClientModule,
    //SocialLoginModule,
    NgxMaskModule.forRoot(),
    // MessagesModule,
    // MessageModule,
    // ToastModule,
    // NgxFileDropModule,

  ]
})


export class VendorModuleModule { }
