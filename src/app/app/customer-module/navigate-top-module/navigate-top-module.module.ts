import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigateTopModuleRoutingModule } from './navigate-top-module-routing.module';
import { KenyaComponent } from './component/kenya/kenya.component';
import { EnglishComponent } from './component/english/english.component';
import { AboutComponent } from './component/about/about.component';
import { SupportComponent } from './component/support/support.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';


@NgModule({
  declarations: [
    KenyaComponent,
    EnglishComponent,
    AboutComponent,
    SupportComponent,
    RegisterComponent,
    LoginComponent,
    MycartComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    NavigateTopModuleRoutingModule
  ]
})
export class NavigateTopModuleModule { }
