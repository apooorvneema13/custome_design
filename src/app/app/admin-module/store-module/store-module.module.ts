import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModuleRoutingModule } from './store-module-routing.module';
import { StoreModuleComponent } from './store-module.component';
import { MyProductComponent } from './component/my-product/my-product.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { BrandsComponent } from './component/brands/brands.component';
import { ViewStoreComponent } from './component/view-store/view-store.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoreModuleComponent,
    MyProductComponent,
    MyOrdersComponent,
    BrandsComponent,
    ViewStoreComponent
  ],
  imports: [
    CommonModule,
    StoreModuleRoutingModule,
    FormsModule
  ]
})
export class StoreModuleModule { }
