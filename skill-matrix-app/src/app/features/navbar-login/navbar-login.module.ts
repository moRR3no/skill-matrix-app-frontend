import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarLoginComponent} from "./navbar-login.component";
import {LanguagePickerComponent} from "../navbar/components/language-picker/language-picker.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [NavbarLoginComponent, LanguagePickerComponent],
  exports: [NavbarLoginComponent],
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
    MatListModule,
  ]
})
export class NavbarLoginModule { }
