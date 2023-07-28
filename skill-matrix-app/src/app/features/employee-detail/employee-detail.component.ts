import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Employee} from "../../models/employee";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SKILLS} from "../../mocks/mock-skills";
import {LANGUAGES} from "../../mocks/mock-languagesSpoken";


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

  constructor(private fb: FormBuilder) {
  };

  skills: string[] = SKILLS;
  languagesSpoken: string[] = LANGUAGES;

  registerForm: FormGroup = this.fb.group({
    id: '',
    name: '',
    skills: [''],
    languagesSpoken: ['']
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      this.registerForm.patchValue({
        id: this.employee?.id,
        name: this.employee?.name,
        skills: this.employee?.skills,
        languagesSpoken: this.employee?.languagesSpoken
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

  protected readonly crypto: Crypto = crypto;

}
