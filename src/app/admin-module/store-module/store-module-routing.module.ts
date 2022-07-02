import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './component/brands/brands.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { MyProductComponent } from './component/my-product/my-product.component';
import { ViewStoreComponent } from './component/view-store/view-store.component';



const routes: Routes = [
  {path:'', component: MyProductComponent},
  {path:'myproduct', component: MyProductComponent},
  {path:'viewstore', component: ViewStoreComponent},
  {path:'myorders', component: MyOrdersComponent},
  {path:'brands', component: BrandsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreModuleRoutingModule { }
