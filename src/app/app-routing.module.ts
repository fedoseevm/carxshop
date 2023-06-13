import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PurchasePageComponent } from './pages/purchase-page/purchase-page.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';

const routes: Routes = [
  { path: '', component: CarPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'car-purchase', component: PurchasePageComponent },
  { path: 'thank-you', component: ThankYouPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
