import {Component, OnInit} from '@angular/core';
import { MessageService } from '../../services/message.service';
import {AuthenticationService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  isAuthenticated: boolean = false;

  constructor(public messageService: MessageService, private cookieService: CookieService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.cookieService.deleteAll();
    window.location.reload();
  }
}
