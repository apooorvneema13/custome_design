import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import {ChartModule} from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';
import { LandingComponent } from './landing/landing.component';
import { SettingsModuleComponent } from './settings-module/settings-module.component';
import { InfluenaceModuleComponent } from './influenace-module/influenace-module.component';
import { WalletComponent } from './wallet/wallet.component';
import { InsightsComponent } from './insights/insights.component';

import { HttpClientModule } from '@angular/common/http';
// import { AdvertisingComponent } from './advertising/advertising.component';
import { LogoutComponent } from './logout/logout.component';
import { AdvertisingComponent } from './advertising/advertising.component';



@NgModule({
  declarations: [
    DashboardComponent,
    VendorModuleComponent,
    LandingComponent,
    SettingsModuleComponent,
    InfluenaceModuleComponent,
    WalletComponent,
    InsightsComponent,

    LogoutComponent,
    AdvertisingComponent,
   
  ],
  imports: [
    
    CommonModule,
    AdminModuleRoutingModule,
    ChartModule,   
    FormsModule,
    CalendarModule,
    ReactiveFormsModule ,
    // BrowserModule,
    HttpClientModule,
  
  ]
})
export class AdminModuleModule { }
