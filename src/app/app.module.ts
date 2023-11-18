import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MypipePipe } from './pipes/mypipe.pipe';

const routes:Routes=[
  {
    path:'products',
    component:HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'sale',
    component:SaleComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
