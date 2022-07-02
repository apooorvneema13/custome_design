import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './component/english/english.component';
import { AboutComponent } from './component/about/about.component';
import { KenyaComponent } from './component/kenya/kenya.component';
import { LoginComponent } from './component/login/login.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { RegisterComponent } from './component/register/register.component';
import { SupportComponent } from './component/support/support.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';


const routes: Routes = [
  {path:'english', component: EnglishComponent},
  {path:'about', component: AboutComponent},
  {path:'kenya', component: KenyaComponent},
  {path:'login', component: LoginComponent},
  {path:'mycart', component: MycartComponent},
  {path:'register', component: RegisterComponent},
  {path:'support', component: SupportComponent},
  {path:'wishlist', component: WishlistComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigateTopModuleRoutingModule { }
