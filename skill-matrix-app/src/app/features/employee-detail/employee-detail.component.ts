import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Employee} from "../../models/employee";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SKILLS} from "../../mocks/mock-skills";
import {TranslateService} from "@ngx-translate/core";
import {PROJECTS} from "../../mocks/mock-projects";



@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnChanges {

  @Input() employee?: Employee;
  @Input() employeeList?: Employee[];
  @Output() newEmployeeEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() updateEmployeeEvent: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder, public translate: TranslateService) {
    this.registerForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      manager: {} as Employee,
      date: new Date(),
      skills: [''],
      projects: ['']
    });
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    translate.use('en');
  };
  setLanguage(value: string): void {
    this.translate.use(value);
  }

  projects: string[] = PROJECTS;
  skills: string[] = SKILLS;
  registerForm: FormGroup;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      this.registerForm.patchValue({
        id: this.employee?.id,
        name: this.employee?.name,
        surname: this.employee?.surname,
        manager: this.employee?.manager,
        date: this.employee?.date.toISOString()
          .slice(0, 10),
        skills: this.employee?.skills,
        projects: this.employee?.projects
      });
    }
  };

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
