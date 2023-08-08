import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../mocks/mock-employee';
import { Employee } from '../models/employee';
import { SKILLS } from '../mocks/mock-skills';
import { PROJECTS } from '../mocks/mock-projects';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
  ) {}

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.translateService
      .get('messages.employee.service.get.employees')
      .subscribe((message) => {
        this.messageService.add(message);
      });
    return employees;
  }

  getSkills(): Observable<string[]> {
    const skills = of(SKILLS);

    this.translateService
      .get('messages.employee.service.get.skills')
      .subscribe((message) => {
        this.messageService.add(message);
      });
    return skills;
  }

  getProjects(): Observable<string[]> {
    const projects = of(PROJECTS);
    this.translateService
      .get('messages.employee.service.get.projects')
      .subscribe((message) => {
        this.messageService.add(message);
      });
    return projects;
  }
}