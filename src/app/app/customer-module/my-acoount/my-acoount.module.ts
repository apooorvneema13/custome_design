import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAcoountRoutingModule } from './my-acoount-routing.module';
import { MyAcoountComponent } from './my-acoount.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';


@NgModule({
  declarations: [
    MyAcoountComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    MyAcoountRoutingModule
  ]
})
export class MyAcoountModule { }
