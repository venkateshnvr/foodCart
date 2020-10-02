import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageComponent } from "./components/menu-page/menu-page.component";
import { StartComponent } from "./components/start/start.component";
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'fooditems', component: FoodItemsComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
