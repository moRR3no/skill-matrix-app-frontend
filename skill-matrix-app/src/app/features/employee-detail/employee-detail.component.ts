import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Employee} from "../../models/employee";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EMPLOYEES} from "../../mocks/mock-employee";
import {EmployeeComponent} from "../employee/employee.component";


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {

  @Input() employee?: Employee;
  @Input() employeeList?: Employee[];
  @Output() newEmployeeEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() updateEmployeeEvent: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) {};

  addNewEmployee(value: Employee) {
    this.newEmployeeEvent.emit(value);
  }



  registerForm: FormGroup = this.fb.group({
    id: '',
    name: '',
    skills: [''],
    languagesSpoken: ['']
  });

  // onChanges(): void {
  //   this.registerForm.patchValue({
  //     id: this.employee?.id,
  //     name: this.employee?.name,
  //     skills: this.employee?.skills,
  //     languagesSpoken: this.employee?.languagesSpoken
  //   });
  // };


  onSubmit(): void {
    console.log('submitted form', this.registerForm.value);
    const newEmployee = this.registerForm.getRawValue();
    this.addNewEmployee(newEmployee);
  }


}
