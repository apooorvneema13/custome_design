import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';


const routes: Routes = [
  {path:'', component: MyOrdersComponent},
  {path:'myorders', component: MyOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAcoountRoutingModule { }
