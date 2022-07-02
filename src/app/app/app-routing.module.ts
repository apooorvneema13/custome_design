import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/shared/helper';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { LandingComponent } from './admin-module/landing/landing.component';
// import { DashboardComponent } from './influencer-module/dashboard/dashboard.component';
import { InfluencerModuleComponent } from './influencer-module/influencer-module.component';
import { StarloginComponent } from './influencer-module/starlogin/starlogin.component';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';
import { VendorloginComponent } from './vendor-module/vendorlogin/vendorlogin.component';
import { CustomerModuleComponent } from './customer-module/customer-module.component';
import { LoginComponent } from './customer-module/component/login/login.component';
import { SingupComponent } from './customer-module/component/singup/singup.component';
import { DashboardComponent } from './customer-module/component/dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  // { path: 'admin',component:AdminModuleComponent, loadChildren: () => import(`./admin-module/admin-module.module`).then(m => m.AdminModuleModule) },

];
console.log("PageURL", window.location.href);

if (environment.production) {
  if (window.location.href.includes("/bumiadmin/")) {
    routes.push({ path: '', component: LandingComponent });
    routes.push({ path: 'admin', component: AdminModuleComponent, loadChildren: () => import(`./admin-module/admin-module.module`).then(m => m.AdminModuleModule) });
  }
  if (window.location.href.includes("/bumivendor/")) {
    routes.push({ path: '', component: VendorloginComponent });
    routes.push({ path: 'vendor', component: VendorModuleComponent, loadChildren: () => import(`./vendor-module/vendor-module.module`).then(m => m.VendorModuleModule) });
  }
  if (window.location.href.includes("/bumistar/")) {
    routes.push({ path: '', component: StarloginComponent });
    routes.push({ path: 'star',
     component: InfluencerModuleComponent,
      loadChildren: () => import(`./influencer-module/influencer-module.module`).then(m => m.InfluencerModuleModule) });
  }
  if (window.location.href.includes("/bumicustomer/")) {
   
    routes.push({ path: '', component: CustomerModuleComponent });
    // routes.push({ path: '', component: DashboardComponent });
    // routes.push({path: 'singup', component: SingupComponent });
    // routes.push({path: 'dashboard', component: DashboardComponent }); 
    // routes.push({path: 'singup', redirectTo: '/singup' });
    
    
    routes.push({ path: 'customer',component: CustomerModuleComponent, loadChildren: () => import(`./customer-module/customer-module.module`).then(m => m.CustomerModuleModule) });
  }
}
else {
  if (Constants.AppName == "Admin") {
    routes.push({ path: '', component: LandingComponent });
    routes.push({ path: 'admin', component: AdminModuleComponent, loadChildren: () => import(`./admin-module/admin-module.module`).then(m => m.AdminModuleModule) });
  }
  if (Constants.AppName == "Vendor") {
    routes.push({ path: '', component: VendorloginComponent });
    routes.push({ path: 'vendor', component: VendorModuleComponent, loadChildren: () => import(`./vendor-module/vendor-module.module`).then(m => m.VendorModuleModule) });
  }
  if (Constants.AppName == "Customer") {
   
    routes.push({path:'', component: CustomerModuleComponent ,loadChildren: () => import(`./customer-module/customer-module.module`).then(m => m.CustomerModuleModule) }); 

    routes.push({ path: 'customer', 
    component: CustomerModuleComponent, 
     loadChildren: () => import(`./customer-module/customer-module.module`).then(m => m.CustomerModuleModule) }
     );
     routes.push({path: '', redirectTo: '/customer', pathMatch: 'full'})
    
     

    }
  if (Constants.AppName == "Star") {
    routes.push({ path: '', component: StarloginComponent });
    routes.push({ path: 'star',
     component: InfluencerModuleComponent,
      loadChildren: () => import(`./influencer-module/influencer-module.module`).then(m => m.InfluencerModuleModule) });
  }

}
@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
