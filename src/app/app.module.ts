import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingproductComponent } from './trendingproduct/trendingproduct.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FooterComponent } from './footer/footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarousalComponent } from './carousal/carousal.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { HomeitemComponent } from './homeitem/homeitem.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NewuserComponent } from './newuser/newuser.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { DailydealsComponent } from './dailydeals/dailydeals.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { HomeproductComponent } from './homeproduct/homeproduct/homeproduct.component';
import { StorageServiceModule } from 'ngx-webstorage-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrendingproductComponent,
    ProductComponent,
    FilterComponent,
    CartComponent,
    CheckoutComponent,
    ProductdetailComponent,
    FooterComponent,
    CarousalComponent,
    ProductpageComponent,
    HomeitemComponent,
    AdvertiseComponent,
    LoginComponent,
    SignupComponent,
    NewuserComponent,
    ForgotpassComponent,
    DailydealsComponent,
    ProfileComponent,
    WishlistComponent,
    HomeproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    IvyCarouselModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    NgxImageZoomModule,
    Ng2SearchPipeModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
