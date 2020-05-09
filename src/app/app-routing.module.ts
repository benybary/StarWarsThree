import { NgModule, OnChanges } from '@angular/core';
import { Routes, RouterModule, Router, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {CartComponent} from './components/cart/cart.component'


const routes: Routes = [
   {path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'product/:id', component:ProductItemComponent},
{path: 'cart', component:CartComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  constructor(){

  }
 
}
