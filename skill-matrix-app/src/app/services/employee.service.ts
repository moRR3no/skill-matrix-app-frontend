import {Injectable} from '@angular/core';
import {EMPLOYEES} from '../mocks/mock-employee';
import {Employee} from '../models/employee';
import {SKILLS} from '../mocks/mock-skills';
import {PROJECTS} from '../mocks/mock-projects';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = EMPLOYEES;
  private employeesUrl = 'api/employees';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private http: HttpClient,
  ) {
  }

  getEmployees(): Observable<Employee[]> {
    this.translateService
      .get('messages.employee.service.get.employees')
      .subscribe((message) => {
        this.messageService.add(message);
      });
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Employee[]>('getEmployees', [])));
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

  // addEmployeeToList(employee: Employee): Observable<void> {
  //   this.setId(employee);
  //   this.messageService.add(
  //     this.translateService.instant('messages.employee.detail.add') +
  //     employee.id,
  //   );
  //   this.employees.push(employee);
  //   return of();
  // }

  addEmployeeToList(employee: Employee): Observable<any> {
    this.setId(employee);

    return this.http.post(this.employeesUrl, employee, this.httpOptions).pipe(
      tap(() => this.messageService.add(
        this.translateService.instant('messages.employee.detail.add') + employee.id
      )),
      catchError(this.handleError<any>('addEmployee'))
    );
  }


  // updateEmployee(employee: Employee): Observable<void> {
  //   const tempEmployee = this.getEmployeeById(employee.id);
  //   this.updateManagers(employee);
  //   if (tempEmployee) {
  //     this.employees.splice(this.employees.indexOf(tempEmployee), 1, employee);
  //   }
  //   this.messageService.add(
  //     this.translateService.instant('messages.employee.detail.edit') +
  //     employee.id,
  //   );
  //   return of();
  // }

  updateEmployee(employee: Employee): Observable<any> {
    const tempEmployee = this.getEmployeeById(employee.id);
    this.updateManagers(employee);

    if (tempEmployee) {
      const index = this.employees.indexOf(tempEmployee);
      this.employees.splice(index, 1, employee);
    }

    const url = `${this.employeesUrl}/employees/${employee.id}`;

    return this.http.put(url, employee, this.httpOptions).pipe(
      tap(_ => this.messageService.add(
        this.translateService.instant('messages.employee.detail.edit') + employee.id
      )),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`); //moze zmienic na console.log
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
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
