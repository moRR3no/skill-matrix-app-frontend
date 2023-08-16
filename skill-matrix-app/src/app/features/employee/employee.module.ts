import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EmployeeDetailModule } from '../employee-detail/employee-detail.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatCardModule,
    MatListModule,
    EmployeeDetailModule,
    MatButtonModule,
  ],
})
export class EmployeeModule {}
