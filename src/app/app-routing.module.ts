import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login/login.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { HomeComponent } from './backoffice/home/home.component';
import { NavComponent } from './backoffice/nav/nav.component';
import { AccueilComponent } from './frontoffice/accueil/accueil.component';
import { HomefrontComponent } from './frontoffice/homefront/homefront.component';

//{path:"",redirectTo:"dashboard", pathMatch:"full"},
const routes: Routes = [
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"fronthome",component:HomefrontComponent,children:[
    {path:"Accueil",component:AccueilComponent}]} ,
  {path:"homeadmin",component:HomeComponent,children:[
    {path:"dashboard",component:DashboardComponent}]} ,
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
