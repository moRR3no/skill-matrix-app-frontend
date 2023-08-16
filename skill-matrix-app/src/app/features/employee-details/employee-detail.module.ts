import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailRoutingModule } from './employee-detail-routing.module';
import {EmployeeDetailComponent} from "./employee-detail.component";
import {MatInputModule} from "@angular/material/input";
import {TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [EmployeeDetailComponent],
  exports: [
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailRoutingModule,
    MatInputModule,
    TranslateModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class EmployeeDetailModule { }
