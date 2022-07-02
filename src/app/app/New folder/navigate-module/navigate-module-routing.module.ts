import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StarsComponent } from './component/stars/stars.component';
import { BrandsComponent } from './component/brands/brands.component';
import { BeautyComponent } from './component/beauty/beauty.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { LifestyleComponent } from './component/lifestyle/lifestyle.component';
import { DiscoverComponent } from './component/discover/discover.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'stars', component: StarsComponent},
  {path:'brands', component: BrandsComponent},
  {path:'beauty', component: BeautyComponent},
  {path:'fashion', component: FashionComponent},
  {path:'lifestyle', component: LifestyleComponent},
  {path:'discover', component: DiscoverComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigateModuleRoutingModule { }
