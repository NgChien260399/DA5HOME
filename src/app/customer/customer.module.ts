import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../customer/login/login.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
]; 

@NgModule({
  declarations: [CartComponent, CheckoutComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerModule { }
