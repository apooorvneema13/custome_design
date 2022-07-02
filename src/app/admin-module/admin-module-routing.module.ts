import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsModuleComponent } from './settings-module/settings-module.component';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';
import { StoreModuleComponent } from './store-module/store-module.component';
import { InfluenaceModuleComponent } from './influenace-module/influenace-module.component';
import { WalletComponent } from './wallet/wallet.component';
import { InsightsComponent } from './insights/insights.component';

import { LogoutComponent } from './logout/logout.component';
import { AdvertisingComponent } from './advertising/advertising.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path: 'vendors',component:VendorModuleComponent, loadChildren: () => import(`./vendor-module/vendor-module.module`).then(m => m.VendorModuleModule) },
  {path: 'settings',component:SettingsModuleComponent, loadChildren: () => import(`./settings-module/settings-module.module`).then(m => m.SettingsModuleModule) },
  {path: 'store',component:StoreModuleComponent, loadChildren: () => import(`./store-module/store-module.module`).then(m => m.StoreModuleModule) },
  {path:  'influenace',component: InfluenaceModuleComponent},
  {path:  'wallet',component: WalletComponent},  
  {path:  'insights',component: InsightsComponent},
  
  {path:  'logout',component: LogoutComponent},
  {path:  'advertisig',component: AdvertisingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
