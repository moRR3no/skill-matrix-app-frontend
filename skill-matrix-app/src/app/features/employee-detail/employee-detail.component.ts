import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Employee} from "../../models/employee";
import {FormBuilder, FormGroup} from "@angular/forms";
// import {SKILLS} from "../../mocks/mock-skills";
import {TranslateService} from "@ngx-translate/core";
// import {PROJECTS} from "../../mocks/mock-projects";
import {EmployeeService} from "../../services/employee.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";



@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnChanges, OnInit {

  @Input() employee?: Employee;
  @Input() employeeList?: Employee[];
  @Output() newEmployeeEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() updateEmployeeEvent: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.registerForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      manager: {} as Employee,
      date: new Date(),
      skills: [''],
      projects: ['']
    });
  };


  projects: string[] = [];
  skills: string[] = [];
  registerForm: FormGroup;
  destroyRef: DestroyRef = inject(DestroyRef);


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      this.registerForm.patchValue({
        id: this.employee?.id,
        name: this.employee?.name,
        surname: this.employee?.surname,
        manager: this.employee?.manager,
        date: this.employee?.date,
        skills: this.employee?.skills,
        projects: this.employee?.projects
      });
    }
  };

  ngOnInit () :void {
    this.getProjects();
    this.getSkills()
  }

  getProjects() :void {
    this.employeeService.getProjects()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(projects => this.projects = projects);
  }

  getSkills(): void {
    this.employeeService.getSkills()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(skills => this.skills = skills);
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

  private addNewEmployee(value: Employee): void {
    this.newEmployeeEvent.emit(value);
  }

  private updateEmployee(value: Employee): void {
    this.updateEmployeeEvent.emit(value);
  }
}
