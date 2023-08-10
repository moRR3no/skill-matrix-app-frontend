import {Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { MessageService } from '../../services/message.service';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee?: Employee;
  destroyRef: DestroyRef = inject(DestroyRef);
  isFormVisible: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((employees) => (this.employees = employees));
  }

  addEmployeeToList(employee: Employee): void {
    this.setId(employee);
    this.messageService.add(
      this.translateService.instant('messages.employee.detail.add') +
        employee.id,
    );
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const tempEmployee = this.getEmployeeById(employee.id);
    this.updateManagers(employee);
    if (tempEmployee) {
      this.employees.splice(this.employees.indexOf(tempEmployee), 1, employee);
    }
    this.messageService.add(
      this.translateService.instant('messages.employee.detail.edit') +
        employee.id,
    );
    this.selectedEmployee = undefined;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.messageService.add(
      this.translateService.instant('messages.employee.component.selected') +
        employee.id,
    );
  }

  showForm(): void {
    this.isFormVisible = true;
    this.selectedEmployee = undefined;
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
