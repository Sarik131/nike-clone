import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SuperQualityComponent } from './super-quality/super-quality.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeroComponent,
    CustomerComponent,
    SubscribeComponent,
    FooterComponent,
    SpecialOfferComponent,
    CustomerReviewComponent,
    PopularProductsComponent,
    SuperQualityComponent,
    OurServicesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
