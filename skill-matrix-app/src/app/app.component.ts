import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  isAuthenticated: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAuthenticated = !!this.authService.userValue;
      }
    });
  }

  ngOnInit() {
    this.isAuthenticated = !!this.authService.userValue;
  }
}
