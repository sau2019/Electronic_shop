import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DailydealsComponent } from './dailydeals/dailydeals.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'detail/:itemid', component:ProductdetailComponent},
  {path:'cart', component:CartComponent},
  {path:'productpage', component:ProductpageComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpass', component:ForgotpassComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'dailydeals',component:DailydealsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'**', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
