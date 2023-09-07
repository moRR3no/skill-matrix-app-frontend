import {Component, DestroyRef, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  activeEmployeeCount: number = 0;
  destroyRef: DestroyRef = inject(DestroyRef);
  employeeOfTheMonth: Employee | undefined;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getEmployeeOfTheMonth();
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((employees) => {
        this.activeEmployeeCount = employees.length;
        this.employees = employees.slice(1, 2);
      });
  }

  getEmployeeOfTheMonth(): void {
    this.employeeService
      .getEmployeeOfTheMonth()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((employee) => {
        this.employeeOfTheMonth = employee;
      });
  }
}
