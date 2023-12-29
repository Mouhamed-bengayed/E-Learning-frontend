import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AppComponent } from './app.component'; // Import the main AppComponent

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router, private appComponent: AppComponent) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isDashboardRoute = route.routeConfig?.path === 'admindashboard' || route.routeConfig?.path === 'dashboard';

    this.appComponent.isDashboardRoute = isDashboardRoute; // Set the flag in the AppComponent
    return true;
  }
}
