import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAcoountRoutingModule } from './my-acoount-routing.module';
import { MyAcoountComponent } from './my-acoount.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { ChangePasswordComponent } from './component/personal-info/change-password/change-password.component';
import { ChangeEmailComponent } from './component/personal-info/change-email/change-email.component';
import { DeliveryDetailsComponent } from './component/personal-info/delivery-details/delivery-details.component';
import { MyWhishlistComponent } from './component/personal-info/my-whishlist/my-whishlist.component';
import { MyAssetsComponent } from './component/my-assets/my-assets.component';
import { MyWalletComponent } from './component/my-assets/my-wallet/my-wallet.component';
import { ContactComponent } from './component/personal-info/contact/contact.component';


@NgModule({
  declarations: [
    MyAcoountComponent,
    MyOrdersComponent,
    PersonalInfoComponent,
    ChangePasswordComponent,
    ChangeEmailComponent,
    DeliveryDetailsComponent,
    MyWhishlistComponent,
    MyAssetsComponent,
    MyWalletComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MyAcoountRoutingModule
  ]
})
export class MyAcoountModule { }
