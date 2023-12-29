import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/authGuard';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardGuard } from './dashboard.guard';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ValidationComponent } from './validation/validation.component';
const routes: Routes = [
  {
    path: 'admin',
    
      loadChildren: () => import('./admin/admin-layout.module').then(m => m.AdminLayoutModule),

  }, 
 
 
  
  {
    path: 'user_dashboard',
    loadChildren: () => import('./user_dashboard/dashboard.module').then(m => m.DashboardModule),

  }, 
  
   { path: 'landing', component: LandingComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'verification', component: ValidationComponent },

  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule], // Export RouterModule for use in other modules
})
export class AppRoutingModule {}
