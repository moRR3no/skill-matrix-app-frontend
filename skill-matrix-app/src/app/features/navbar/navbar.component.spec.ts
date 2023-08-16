import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { MessagesComponent } from './components/messages/messages.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        LanguagePickerComponent,
        MessagesComponent,
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
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
        RouterTestingModule,
      ],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    const navbarElement: DebugElement = fixture.debugElement;
    const title = navbarElement.query(By.css('.navbar__title'));
    const navbarTitle: HTMLElement = title.nativeElement;
    expect(navbarTitle.textContent).toEqual('SkillMatrixApp');
  });
});
