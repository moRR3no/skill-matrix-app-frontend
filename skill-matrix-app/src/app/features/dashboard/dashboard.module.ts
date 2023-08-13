import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {TranslateModule} from "@ngx-translate/core";
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [DashboardComponent, EmployeeSearchComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule,
    TranslateModule,
    MatInputModule
  ]
})
export class DashboardModule { }
