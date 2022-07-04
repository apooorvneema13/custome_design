import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomerModuleRoutingModule } from './customer-module-routing.module';
import { CustomerModuleComponent } from './customer-module.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { SingupComponent } from './component/singup/singup.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NewComponent } from './component/new/new.component';
import { StarsComponent } from './component/stars/stars.component';
import { BrandsComponent } from './component/brands/brands.component';
import { BeautyComponent } from './component/beauty/beauty.component';
import { FashionsComponent } from './component/fashions/fashions.component';
import { LifstyleComponent } from './component/lifstyle/lifstyle.component';
import { DiscoverComponent } from './component/discover/discover.component';
import { KenyaComponent } from './component/about/kenya/kenya.component';
import { EnglishComponent } from './component/about/english/english.component';
import { KingsComponent } from './component/about/kings/kings.component';
import { AboutusComponent } from './component/about/aboutus/aboutus.component';
import { SupportComponent } from './component/about/support/support.component';
import { RegisterComponent } from './component/about/register/register.component';
import { MyCartComponent } from './component/about/my-cart/my-cart.component';
import { WishlistComponent } from './component/about/wishlist/wishlist.component';
import { OwlModule } from 'ng2-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderTopComponent } from './shared/header-top/header-top.component';
// import { AddCartComponent } from './component/add-cart/add-cart.component';
import { BecomeVendorComponent } from './component/about/become-vendor/become-vendor.component';
import { StarsDetailComponent } from './component/stars-detail/stars-detail.component';
import { PopularVideoComponent } from './component/stars/popular-video/popular-video.component';
import { BecomeBumistarComponent } from './component/about/become-bumistar/become-bumistar.component';
import { ProductsByBrandsComponent } from './component/brands/products-by-brands/products-by-brands.component';
import { ProductDescriptionComponent } from './component/brands/product-description/product-description.component';
import { BumiCareersComponent } from './component/about/bumi-careers/bumi-careers.component';
import { CheckoutAddressComponent } from './component/checkout/checkout-address/checkout-address.component';
import { PickupAddressComponent } from './component/checkout/pickup-address/pickup-address.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { OrderReviewComponent } from './component/checkout/order-review/order-review.component';
import { PaymentMethodComponent } from './component/checkout/payment-method/payment-method.component';
import { BeautyHomeComponent } from './component/beauty/beauty-home/beauty-home.component';
import { CategoryByProductComponent } from './component/lifstyle/category-by-product/category-by-product.component';
import { InvoiceComponent } from './component/invoice/invoice/invoice.component';


@NgModule({
  declarations: [
    CustomerModuleComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
 
    DashboardComponent,
    NewComponent,
    StarsComponent,
    BrandsComponent,
    BeautyComponent,
    FashionsComponent,
    LifstyleComponent,
    DiscoverComponent,
    KenyaComponent,
    EnglishComponent,
    KingsComponent,
    AboutusComponent,
    SupportComponent,
    RegisterComponent,
    MyCartComponent,
    WishlistComponent,
    HeaderTopComponent,
    // AddCartComponent,
    BecomeVendorComponent,
    StarsDetailComponent,
    PopularVideoComponent,
    BecomeBumistarComponent,
    ProductsByBrandsComponent,
    ProductDescriptionComponent,
    BumiCareersComponent,
    CheckoutComponent,
    CheckoutAddressComponent,
    PickupAddressComponent,
    PaymentMethodComponent,
    OrderReviewComponent,
    BeautyHomeComponent,
    CategoryByProductComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    CustomerModuleRoutingModule,
    ReactiveFormsModule,
    OwlModule,
    CarouselModule,
    SlickCarouselModule,    
    
  ]
})
export class CustomerModuleModule { }
