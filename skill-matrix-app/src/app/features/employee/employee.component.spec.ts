import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EmployeeDetailModule } from '../employee-details/employee-detail.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        CommonModule,
        EmployeeRoutingModule,
        MatCardModule,
        MatListModule,
        EmployeeDetailModule,
        MatButtonModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
