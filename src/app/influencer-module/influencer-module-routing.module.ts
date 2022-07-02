import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingComponent } from './advertising/advertising.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { FaqComponent } from './faq/faq.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyInsightsComponent } from './my-insights/my-insights.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { PromotionsComponent } from './promotions/promotions.component';
// import { MyOrdersComponent } from './my-orders/my-orders.component';
// import { MyProductsComponent } from './my-products/my-products.component';
// import { PromotionalComponent } from './promotional/promotional.component';
 
// import { FaqComponent } from './faq/faq.component';

let VendorSession:any;
let VendorId:any;
let logged_val:any;

VendorSession = localStorage.getItem('VendorSession');
VendorId=localStorage.getItem('VendorId');
let vendor_login_commpoents:any;
let redirect_compoents=DashboardComponent;
/*if((VendorSession) && VendorSession=="VendorSessionLogged" && VendorId!="" && VendorSession!=null && VendorId!=null)
*/


if(VendorSession=="VendorSessionLogged" && VendorId!=="")
{
    let vendor_login_commpoents = DashboardComponent;
/*let vendor_login_commpoents='/';
alert('null');*/

}else if(VendorSession==null && VendorSession==null)
{
//this.router.navigate('/');

}

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'my-account', component: MyAccountComponent},
  {path:'edit-shop', component: EditShopComponent},
  {path:'advertising', component: AdvertisingComponent},
  {path:'my-insights', component: MyInsightsComponent},
  // {path:'my-orders', component: MyOrdersComponent},
  // {path:'promotional', component: PromotionalComponent},
  // {path:'my-products', component: MyProductsComponent},
   {path:'my-wallet', component: MyWalletComponent},
   {path:'my-store', component: MyStoreComponent},
   {path:'faq', component: FaqComponent},
   {path:'promotions', component: PromotionsComponent},
   //{path:'*', component: DashboardComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InfluencerModuleRoutingModule { }
