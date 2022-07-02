import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/shared/helper';

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


  if (Constants.AppName == "Customer") {
   
    routes.push({path:'', component: CustomerModuleComponent ,loadChildren: () => import(`./customer-module/customer-module.module`).then(m => m.CustomerModuleModule) }); 

    routes.push({ path: 'customer', 
    component: CustomerModuleComponent, 
     loadChildren: () => import(`./customer-module/customer-module.module`).then(m => m.CustomerModuleModule) }
     );
     routes.push({path: '', redirectTo: '/customer', pathMatch: 'full'})
    
     

    }


}
@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
