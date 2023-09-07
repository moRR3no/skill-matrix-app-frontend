import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDefaultNavbarVisible: boolean = true;
  isLoginFormNavbarVisible: boolean = false;

  constructor(private router: Router) {
    // Subscribe to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Determine which component is currently active
        const currentRoute = this.router.url;

        // Update the visibility of navbar components based on the current route
        this.isDefaultNavbarVisible = currentRoute !== '/login-form';
        this.isLoginFormNavbarVisible = currentRoute === './features/auth/auth.module';
      }
    });
  }
}
