import {
  Component,
  DestroyRef,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Employee } from '../../models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnChanges, OnInit {
  employee?: Employee;
  employeeList$: Observable<Employee[]>;
  projects: string[] = [];
  skills: string[] = [];
  registerForm: FormGroup;
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.employeeList$ = this.employeeService.getEmployees();
    this.registerForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      manager: {} as Employee,
      date: new Date(),
      skills: [''],
      projects: [''],
    });
  }

  ngOnInit(): void {
    this.getProjects();
    this.getSkills();
    this.getEmployee();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      this.patchFormValues();
    }
  }

  getEmployee(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id === null) {
    } else {
      this.employeeService.getEmployee(id!).subscribe((employee) => {
        this.employee = employee;
        this.patchFormValues();
      });
    }
  }

  getProjects(): void {
    this.employeeService
      .getProjects()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((projects) => (this.projects = projects));
  }

  getSkills(): void {
    this.employeeService
      .getSkills()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((skills) => (this.skills = skills));
  }

  onSubmit(): void {
    const newEmployee = this.registerForm.getRawValue();
    if (this.employee) {
      this.updateEmployee(newEmployee);
    } else {
      this.addNewEmployee(newEmployee);
    }
    this.registerForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

  delete(employee: Employee): void {
    this.employeeService
      .deleteEmployee(employee.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
    this.router
      .navigate(['/employees'], {relativeTo: this.route})
      .then((r) => r);
  }

  private patchFormValues(): void {
    this.registerForm.patchValue({
      id: this.employee?.id,
      name: this.employee?.name,
      surname: this.employee?.surname,
      manager: this.employee?.manager,
      date: this.employee?.date,
      skills: this.employee?.skills,
      projects: this.employee?.projects,
    });
  }

  private addNewEmployee(value: Employee): void {
    this.employeeService.addEmployeeToList(value).subscribe((emp) => {
      this.employee != emp;
      this.patchFormValues();
    });
    this.router
      .navigate(['/dashboard'], { relativeTo: this.route })
      .then((r) => r);
  }

  private updateEmployee(value: Employee): void {
    if (this.employee) {
      this.employeeService
        .updateEmployee(value)
        .subscribe((updatedEmployee) => {
          this.employee != updatedEmployee;
          this.patchFormValues();
        });
    } else {
    }
  }
}
