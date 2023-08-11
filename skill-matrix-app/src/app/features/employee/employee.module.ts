import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeComponent} from "./employee.component";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {EmployeeDetailModule} from "../employee-detail/employee-detail.module";


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatCardModule,
    MatListModule,
    EmployeeDetailModule
  ]
})
export class EmployeeModule { }
