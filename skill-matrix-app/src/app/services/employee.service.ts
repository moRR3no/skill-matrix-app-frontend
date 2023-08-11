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
  employees: Employee[] = EMPLOYEES;

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
  ) {}

  getEmployees(): Observable<Employee[]> {
    const employees = of(this.employees);
    this.translateService
      .get('messages.employee.service.get.employees')
      .subscribe((message) => {
        this.messageService.add(message);
      });
    return employees;
  }

  getEmployee(id: string | null): Observable<Employee> {
    const employee = this.employees.find((emp) => emp.id === id)!;
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);
    return of(employee);
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

  addEmployeeToList(employee: Employee): Observable<void> {
    console.log('method: addEmployeeToList from employee.service');
    this.setId(employee);
    this.messageService.add(
      this.translateService.instant('messages.employee.detail.add') +
        employee.id,
    );
    this.employees.push(employee);
    return of();
  }

  updateEmployee(employee: Employee): Observable<void> {
    console.log('method: updateEmployee from employee.service');
    const tempEmployee = this.getEmployeeById(employee.id);
    this.updateManagers(employee);
    if (tempEmployee) {
      this.employees.splice(this.employees.indexOf(tempEmployee), 1, employee);
    }
    this.messageService.add(
      this.translateService.instant('messages.employee.detail.edit') +
        employee.id,
    );
    return of();
  }

  private setId(employee: Employee): void {
    employee.id = crypto.randomUUID();
  }

  private getEmployeeById(id: string): Employee | undefined {
    return this.employees.find((emp) => emp.id === id);
  }

  private updateManagers(employeeManager: Employee) {
    this.employees.map((employee) => {
      if (employee.manager?.id == employeeManager.id) {
        employee.manager = employeeManager;
      }
    });
  }
}
