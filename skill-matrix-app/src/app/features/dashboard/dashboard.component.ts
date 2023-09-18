import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

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
  isLoading: boolean = true;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //     this.getEmployees(),
    //       this.getEmployeeOfTheMonth()
    //   }, 0
    // )
    this.getEmployees();
    this.getEmployeeOfTheMonth();
  }

  getEmployees(): void {
    this.isLoading = true; // Start loading
    setTimeout(() => {
      this.employeeService
        .getEmployees()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((employees) => {
          this.activeEmployeeCount = employees.length;
          this.employees = employees.slice(1, 2);
          this.isLoading = false; // Data is loaded
        });
    }, 1000); // Add a 1-second delay (you can adjust this as needed)
  }

  getEmployeeOfTheMonth(): void {
    this.isLoading = true; // Start loading
    setTimeout(() => {
      this.employeeService
        .getEmployeeOfTheMonth()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((employee) => {
          this.employeeOfTheMonth = employee;
          this.isLoading = false; // Data is loaded
        });
    }, 1000); // Add a 1-second delay (you can adjust this as needed)
  }
}
