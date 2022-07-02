import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigateModuleRoutingModule } from './navigate-module-routing.module';
import { HomeComponent } from './component/home/home.component';
import { StarsComponent } from './component/stars/stars.component';
import { BrandsComponent } from './component/brands/brands.component';
import { BeautyComponent } from './component/beauty/beauty.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { LifestyleComponent } from './component/lifestyle/lifestyle.component';
import { DiscoverComponent } from './component/discover/discover.component';
import { HeaderComponent } from '../../customer-module/shared/header/header.component';
import { FooterComponent } from '../../customer-module/shared/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    StarsComponent,
    BrandsComponent,
    BeautyComponent,
    FashionComponent,
    LifestyleComponent,
    DiscoverComponent,
    // HeaderComponent,
    // FooterComponent

  ],
  imports: [
    CommonModule,
    NavigateModuleRoutingModule
  ]
})
export class NavigateModuleModule { }
