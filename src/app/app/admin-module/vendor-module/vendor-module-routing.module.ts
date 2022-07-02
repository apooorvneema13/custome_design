import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { BrandsComponent, } from './brands/brands.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { ViewStoreComponent } from './view-store/view-store.component';

const routes: Routes = [
  {path:'', component: VendorHomeComponent},
  {path:'home', component: VendorHomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'orders', component: OrdersComponent},
  {path:'brands', component: BrandsComponent},
  {path:'uploadmedia', component: UploadMediaComponent},
  {path:'viewstoreproducts', component: ViewStoreComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorModuleRoutingModule { }
