import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ShopIndexComponent } from './components/shop/shop-index/shop-index.component';
import { FilterIndexComponent } from './components/shop/filter/filter-index/filter-index.component';
import { FilterDropdownsComponent } from './components/shop/filter/filter-dropdowns/filter-dropdowns.component';
import { FilterCheckboxComponent } from './components/shop/filter/filter-checkbox/filter-checkbox.component';
import { ShopMainComponent } from './components/shop/shop-main/shop-main.component';
import { PaginationComponent } from './components/utils/pagination/pagination.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SliderComponent } from './components/utils/slider/slider.component';
import { DetailSilderComponent } from './components/utils/detail-silder/detail-silder.component';
import { ProductDetailsIndexComponent } from './components/product-details/product-details-index/product-details-index.component';
import { ProductDescComponent } from './components/product-details/product-desc/product-desc.component';
import { AddToCartBtnComponent } from './components/utils/add-to-cart-btn/add-to-cart-btn.component';
import { ProductCVIndexComponent } from './components/product-details/product-complete-view/product-cv-index/product-cv-index.component';
import { ProductCVDescComponent } from './components/product-details/product-complete-view/product-cv-desc/product-cv-desc.component';
import { ProductCVTableComponent } from './components/product-details/product-complete-view/product-cv-table/product-cv-table.component';
import { ProductCVReviewComponent } from './components/product-details/product-complete-view/product-cv-review/product-cv-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    FeaturedComponent,
    FooterComponent,
    NavbarComponent,
    OffersComponent,
    TopbarComponent,
    VendorComponent,
    SingleProductComponent,
    SubscribeComponent,
    ShopIndexComponent,
    FilterIndexComponent,
    FilterDropdownsComponent,
    FilterCheckboxComponent,
    ShopMainComponent,
    PaginationComponent,
    PageHeaderComponent,
    SliderComponent,
    DetailSilderComponent,
    ProductDetailsIndexComponent,
    ProductDescComponent,
    AddToCartBtnComponent,
    ProductCVIndexComponent,
    ProductCVDescComponent,
    ProductCVTableComponent,
    ProductCVReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
