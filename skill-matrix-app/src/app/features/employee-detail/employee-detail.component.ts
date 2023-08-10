import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Employee } from '../../models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnChanges, OnInit {
  @Input() employee?: Employee;
  @Input() employeeList?: Employee[];
  @Output() newEmployeeEvent: EventEmitter<Employee> =
    new EventEmitter<Employee>();
  @Output() updateEmployeeEvent: EventEmitter<Employee> =
    new EventEmitter<Employee>();
  @Output() cancelEdit: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {
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

  projects: string[] = [];
  skills: string[] = [];
  registerForm: FormGroup;
  destroyRef: DestroyRef = inject(DestroyRef);
  isFormVisible: boolean = false;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
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
  }

  scrollToForm(): void {
    this.isFormVisible = true;
    const formElement = document.getElementById('employee-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.getProjects();
    this.getSkills();
    this.getEmployee();
  }

  getEmployee(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
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

  private addNewEmployee(value: Employee): void {
    this.newEmployeeEvent.emit(value);
  }

  private updateEmployee(value: Employee): void {
    this.updateEmployeeEvent.emit(value);
  }
}
