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
import { ActivatedRoute, Router } from '@angular/router';
import {Skill} from "../../models/skill";
import {Project} from "../../models/project";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnChanges, OnInit {
  employee?: Employee;
  employeeList!: Employee[];
  projects: Project[] = [];
  skills: Skill[] = [];
  registerForm: FormGroup;
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      id: '',
      firstName: '',
      surname: '',
      managerId: '',
      date: new Date(),
      skills: [],
      projects: []
    });
  }

  async ngOnInit(): Promise<void> {
    this.getEmployees();
    this.getProjects();
    this.getSkills();
    this.getEmployee();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      this.patchFormValues();
    }
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (fetchedEmployeeList) => (this.employeeList = fetchedEmployeeList),
      );
  }

  getEmployee(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.employeeService.getEmployee(id!).subscribe((employee) => {
        this.employee = employee;
        this.patchFormValues();
      });
    }
  }

  compareSkills(m1: Skill | Project, m2: Skill | Project): boolean {
    if (m1 && m2) {
      return m1.id === m2.id;
    }
    return false;
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
    this.router.navigate(['/employees'], { relativeTo: this.route });
  }

  private patchFormValues(): void {
    this.registerForm.patchValue({
      id: this.employee?.id,
      firstName: this.employee?.firstName,
      surname: this.employee?.surname,
      managerId: this.employee?.managerId,
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
    this.router.navigate(['/dashboard'], { relativeTo: this.route });
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

  getManagerName(managerId: string): string {
    if (!this.employeeList || !managerId) {
      return '';
    }
    const manager = this.employeeList.find((employee) => employee.id === managerId);
    return manager ? `${manager.firstName} ${manager.surname}` : '';
  }
}
