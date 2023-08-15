import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {TranslateModule} from "@ngx-translate/core";
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {TranslateService} from "@ngx-translate/core";


@NgModule({
  declarations: [DashboardComponent, EmployeeSearchComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [TranslateService]
})
export class DashboardModule { }
