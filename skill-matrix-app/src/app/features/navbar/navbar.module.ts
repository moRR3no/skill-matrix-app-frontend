import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {TranslateModule} from "@ngx-translate/core";
import {LanguagePickerComponent} from "./components/language-picker/language-picker.component";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MessagesComponent} from "./components/messages/messages.component";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [NavbarComponent, LanguagePickerComponent, MessagesComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
    MatButtonModule,
    MatBadgeModule,
    RouterLink,
    MatCardModule,
    MatListModule
  ]
})
export class NavbarModule { }
