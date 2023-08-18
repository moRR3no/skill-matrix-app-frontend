import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchComponent } from './employee-search.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EmployeeSearchComponent', () => {
  let component: EmployeeSearchComponent;
  let fixture: ComponentFixture<EmployeeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSearchComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatAutocompleteModule,
        CommonModule,
        DashboardRoutingModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(EmployeeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
