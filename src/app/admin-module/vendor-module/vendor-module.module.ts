import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorModuleRoutingModule } from './vendor-module-routing.module';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { BrandsComponent } from './brands/brands.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { ViewStoreComponent } from './view-store/view-store.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VendorHomeComponent,
    ProductsComponent,
    OrdersComponent,
    BrandsComponent,
    UploadMediaComponent,
    ViewStoreComponent
  ],
  imports: [
    CommonModule,
    VendorModuleRoutingModule,
    FormsModule,
  ]
})
export class VendorModuleModule { }
