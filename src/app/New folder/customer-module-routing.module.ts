import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './component/singup/singup.component';
;
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigateModuleComponent } from './navigate-module/navigate-module.component';
import { NavigateTopModuleComponent } from './navigate-top-module/navigate-top-module.component';
import { DashboardComponent } from '../customer-module/component/dashboard/dashboard.component';
import { NewComponent } from './component/new/new.component';
import { BrandsComponent } from './component/brands/brands.component';
import { DiscoverComponent } from './component/discover/discover.component';
import { BeautyComponent } from './component/beauty/beauty.component';
import { FashionsComponent } from './component/fashions/fashions.component';
import { LifstyleComponent } from './component/lifstyle/lifstyle.component';
import { StarsComponent } from './component/stars/stars.component';
import { AboutusComponent } from './component/about/aboutus/aboutus.component';
import { EnglishComponent } from './component/about/english/english.component';
import { KenyaComponent } from './component/about/kenya/kenya.component';
import { KingsComponent } from './component/about/kings/kings.component';
import { MyCartComponent } from './component/about/my-cart/my-cart.component';
import { RegisterComponent } from './component/about/register/register.component';
import { SupportComponent } from './component/about/support/support.component';
import { WishlistComponent } from './component/about/wishlist/wishlist.component';
import { AddCartComponent } from './component/add-cart/add-cart.component';
import { MyAcoountComponent } from './my-acoount/my-acoount.component';
import { CustomerModuleComponent } from './customer-module.component';
import { BecomeVendorComponent } from './component/about/become-vendor/become-vendor.component';
import { StarsDetailComponent } from './component/stars-detail/stars-detail.component';


const routes: Routes = [
  // {path:'singup',component: SingupComponent},
  // {path:'', component: CustomerModuleComponent},
  {path:'navigate',component:NavigateModuleComponent, loadChildren: () => import(`./navigate-module/navigate-module.module`).then(m => m.NavigateModuleModule) },
  {path:'navigate_top',component:NavigateTopModuleComponent, loadChildren: () => import(`./navigate-top-module/navigate-top-module.module`).then(m => m.NavigateTopModuleModule) },
  {path:'myaccount',component:MyAcoountComponent, loadChildren: () => import(`./my-acoount/my-acoount.module`).then(m => m.MyAcoountModule) },
  {path:'hearder', component: HeaderComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'',component: DashboardComponent},
  {path:'footer', component: FooterComponent},
  {path:'brands', component: BrandsComponent},
  {path:'discover', component: DiscoverComponent},
  {path:'beauty', component: BeautyComponent},
  {path:'fashion', component: FashionsComponent},
  {path:'lifestyle', component: LifstyleComponent},
  {path:'new', component: NewComponent},
  {path:'stars', component: StarsComponent},
  {path:'about', component: AboutusComponent},
  {path:'english', component: EnglishComponent},
  {path:'kenya', component: KenyaComponent},
  {path:'kings', component: KingsComponent},
  {path:'mycart', component: MyCartComponent},
  {path:'register', component: RegisterComponent},
  {path:'support', component: SupportComponent},
  {path:'wishlist', component: WishlistComponent},
  {path:'addcart', component: AddCartComponent},
  {path:'about/becomevendor', component: BecomeVendorComponent},
  {path:'stars/detail', component: StarsDetailComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
