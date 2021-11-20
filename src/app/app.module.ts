import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './backoffice/nav/nav.component';
import { FooterComponent } from './backoffice/footer/footer.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { HomeComponent } from './backoffice/home/home.component';
import { LoginComponent } from './authentification/login/login.component';
import { NavfrontComponent } from './frontoffice/navfront/navfront.component';
import { FooterfrontComponent } from './frontoffice/footerfront/footerfront.component';
import { HomefrontComponent } from './frontoffice/homefront/homefront.component';
import { AccueilComponent } from './frontoffice/accueil/accueil.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavfrontComponent,
    FooterfrontComponent,
    HomefrontComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
