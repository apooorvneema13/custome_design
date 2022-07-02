import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
// import { ExcelService } from 'src/shared/services/Export/excel.service';
import { ExcelService } from '../../src/shared/services/Export/excel.service';
import { InfluencerModuleComponent } from './influencer-module/influencer-module.component';
import { ToastrModule } from 'ngx-toastr';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
import { OwlModule } from 'ng2-owl-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    HomePageComponent,
    AdminModuleComponent,
    VendorModuleComponent,
    InfluencerModuleComponent
    // KeyinfoPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    HttpClientModule,
	  ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    BrowserModule,
    FormsModule,
    ChartModule,
    OwlModule,
    CarouselModule,
    SlickCarouselModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class KeyinfoPageModule {}