import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './component/singup/singup.component';
;
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

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
// import { AddCartComponent } from './component/add-cart/add-cart.component';
import { MyAcoountComponent } from './my-acoount/my-acoount.component';
import { CustomerModuleComponent } from './customer-module.component';
import { StarsDetailComponent } from './component/stars-detail/stars-detail.component';
import { PopularVideoComponent } from './component/stars/popular-video/popular-video.component';
import { LoginComponent } from './component/login/login.component';

import { BecomeVendorComponent } from './component/about/become-vendor/become-vendor.component';
import { BecomeBumistarComponent } from './component/about/become-bumistar/become-bumistar.component';
import { ProductsByBrandsComponent } from './component/brands/products-by-brands/products-by-brands.component';
import { ProductDescriptionComponent } from './component/brands/product-description/product-description.component';
import { BumiCareersComponent } from './component/about/bumi-careers/bumi-careers.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CheckoutAddressComponent } from './component/checkout/checkout-address/checkout-address.component';
import { PickupAddressComponent } from './component/checkout/pickup-address/pickup-address.component';
import { PaymentMethodComponent } from './component/checkout/payment-method/payment-method.component';
import { OrderReviewComponent } from './component/checkout/order-review/order-review.component';
import { BeautyHomeComponent } from './component/beauty/beauty-home/beauty-home.component';
import { CategoryByProductComponent } from './component/lifstyle/category-by-product/category-by-product.component';
import { MyOrdersComponent }  from './my-acoount/component/my-orders/my-orders.component'
import { PersonalInfoComponent }  from './my-acoount/component/personal-info/personal-info.component'
import {ChangeEmailComponent} from './my-acoount/component/personal-info/change-email/change-email.component'
import {ChangePasswordComponent} from './my-acoount/component/personal-info/change-password/change-password.component'
import {DeliveryDetailsComponent} from './my-acoount/component/personal-info/delivery-details/delivery-details.component'
import {MyWhishlistComponent} from './my-acoount/component/personal-info/my-whishlist/my-whishlist.component'
import {MyAssetsComponent} from './my-acoount/component/my-assets/my-assets.component'
import {MyWalletComponent} from './my-acoount/component/my-assets/my-wallet/my-wallet.component'
import { ContactComponent } from './my-acoount/component/personal-info/contact/contact.component';
import { InvoiceComponent } from './component/invoice/invoice/invoice.component';
import { CustomerFaqComponent } from './component/customer-support/customer-faq/customer-faq.component';
import { FaqDetailComponent } from './component/customer-support/faq-detail/faq-detail.component';
import { BeautyFashionComponent } from './component/customer-support/beauty-fashion/beauty-fashion.component';
import { CustomerChatComponent } from './component/customer-support/customer-chat/customer-chat.component';
import { CustomerBlogComponent } from './component/customer-support/customer-blog/customer-blog.component';
import { CustomerPlateformComponent } from './component/customer-support/customer-plateform/customer-plateform.component';
import { DiscoverTrendsComponent } from './component/discover/discover-trends/discover-trends.component';
import { DiscoverMakeupComponent } from './component/discover/discover-makeup/discover-makeup.component';
import { DiscoverBlogComponent } from './component/discover/discover-blog/discover-blog.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent}, 
  {path:'myaccount',component:MyAcoountComponent, loadChildren: () => import(`./my-acoount/my-acoount.module`).then(m => m.MyAcoountModule) },
  {path:'myorder',component:MyOrdersComponent},
  {path:'pesonalinfo',component:PersonalInfoComponent},
  {path:'pesonalinfo/change_email',component:ChangeEmailComponent},
  {path:'pesonalinfo/change_password',component:ChangePasswordComponent},
  {path:'pesonalinfo/delivery_details',component:DeliveryDetailsComponent},
  {path:'pesonalinfo/my_whishlist',component:MyWhishlistComponent},
  {path:'my_assets',component:MyAssetsComponent},
  {path:'my_assets/my_wallet',component:MyWalletComponent},
  {path:'my_assets/contact', component:ContactComponent},
  {path:'hearder', component: HeaderComponent},
  {path:'dashboard',component: DashboardComponent},
  // {path:'',component: DashboardComponent},
  {path:'footer', component: FooterComponent},
  {path:'brands', component: BrandsComponent},
  {path:'discover', component: DiscoverComponent},
  {path:'products', component: BeautyComponent},
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
  // {path:'addcart', component: AddCartComponent},
  {path:'stars/detail', component: StarsDetailComponent},
  {path:'stars/popularvideo', component: PopularVideoComponent},

  {path:'about/becomevendor', component: BecomeVendorComponent},
  {path:'about/becomBumistar', component: BecomeBumistarComponent},
  {path:'about/bumiCareers',component:BumiCareersComponent},
  {path:'products-by-brands', component: ProductsByBrandsComponent},
  {path:'product-description',component:ProductDescriptionComponent},
  {path:'checkout-my-cart',component:CheckoutComponent},
  {path:'checkout-address',component:CheckoutAddressComponent},
  {path:'pickup-address',component:PickupAddressComponent},
  {path:'payment',component:PaymentMethodComponent},
  {path:'order-review',component:OrderReviewComponent},
  {path:'beautyhome', component: BeautyHomeComponent},
  {path:'invoice', component:InvoiceComponent},
  {path:'category_by_product', component: CategoryByProductComponent},
  {path:'customer_faq', component:CustomerFaqComponent},
  {path:'faq_detail', component:FaqDetailComponent},
  {path:'beauty_fashion', component:BeautyFashionComponent},
  {path:'customer_chat',component:CustomerChatComponent},
  {path:'customer_blog',component:CustomerBlogComponent},
  {path:'customer_palteform', component:CustomerPlateformComponent},
  {path:'discover-trends', component:DiscoverTrendsComponent},
  {path:'discover-makeup', component:DiscoverMakeupComponent},
  {path:'discover-blog', component:DiscoverBlogComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
