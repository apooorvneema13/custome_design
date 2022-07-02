import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAcoountRoutingModule } from './my-acoount-routing.module';
import { MyAcoountComponent } from './my-acoount.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';


@NgModule({
  declarations: [
    MyAcoountComponent,
    MyOrdersComponent,
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    MyAcoountRoutingModule
  ]
})
export class MyAcoountModule { }
