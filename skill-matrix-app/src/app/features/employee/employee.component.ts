import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { MessageService } from '../../services/message.service';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee?: Employee;
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((employees) => (this.employees = employees));
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.messageService.add(
      this.translateService.instant('messages.employee.component.selected') +
        employee.id,
    );
  }
}
