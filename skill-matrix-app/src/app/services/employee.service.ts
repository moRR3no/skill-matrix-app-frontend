import {Injectable} from '@angular/core';
import {Employee} from '../models/employee';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Skill} from "../models/skill";
import {Project} from "../models/project";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];
  private employeesUrl = environment.apiBaseUrl + '/employees';
  private projectsUrl = environment.apiBaseUrl + '/projects';
  private skillsUrl = environment.apiBaseUrl + '/skills';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
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
    return this.http
      .get<Employee[]>(this.employeesUrl)
      .pipe(
        tap((fetchedEmployees) => {
          this.employees = fetchedEmployees;
          this.log('Fetched employees');
        }),
        catchError(this.handleError<Employee[]>('getEmployees', [])));
  }

  getEmployee(id: string): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap((_) => this.log(`Fetched employee id=${id}`)),
      catchError(this.handleError<Employee>('getEmployee')),
    );
  }

  getEmployeeOfTheMonth(): Observable<Employee> {
    const url = `${this.employeesUrl}/employeeOfTheMonth`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError<Employee>('getEmployeeOfTheMonth'))
    )
  }

  getSkills(): Observable<Skill[]> {
    const url = `${this.skillsUrl}`;
    this.translateService
      .get('messages.employee.service.get.skills')
      .subscribe((message) => {
        this.messageService.add(message);
      });
    return this.http.get<Skill[]>(url).pipe(
      catchError(this.handleError<Skill[]>('getSkills'))
    );
  }

  getProjects(): Observable<Project[]> {
    const url = `${this.projectsUrl}`;
    this.translateService
      .get('messages.employee.service.get.projects')
      .subscribe((message) => {
        this.messageService.add(message);
      });
    return this.http.get<Project[]>(url).pipe(
      catchError(this.handleError<Project[]>('getProjects'))
    )
  }

  addEmployeeToList(employee: Employee): Observable<void> {
    this.setId(employee);
    return this.http.post(this.employeesUrl, employee, this.httpOptions).pipe(
      tap(() =>
        this.messageService.add(
          this.translateService.instant('messages.employee.detail.add') +
          employee.id,
        ),
      ),
      catchError(this.handleError<any>('addEmployee')),
    );
  }

  updateEmployee(employee: Employee): Observable<void> {
    const url = `${this.employeesUrl}/${employee.id}`;

    return this.http.put(url, employee, this.httpOptions).pipe(
      tap((_) =>
        this.messageService.add(
          this.translateService.instant('messages.employee.detail.edit') +
            employee.id,
        ),
      ),
      catchError(this.handleError<any>('updateEmployee')),
    );
  }

  deleteEmployee(id: string): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee')),
    );
  }

  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<Employee[]>(`${this.employeesUrl}?firstName=${term}`)
      .pipe(catchError(this.handleError<Employee[]>('searchEmployees', [])));
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
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
      if (employee.managerId == employeeManager.id) {
        employee.managerId = employeeManager.id;
      }
    });
  }
}
