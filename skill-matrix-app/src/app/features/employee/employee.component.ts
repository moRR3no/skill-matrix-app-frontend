import {Component} from '@angular/core';
import {Employee} from "../../models/employee";
import {EMPLOYEES} from "../../mocks/mock-employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent{

  employees = EMPLOYEES;

  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  employee: Employee = {
    id: '1',
    name: 'Konrado',
    skills: ['Java', 'Spring Boot'],
    languagesSpoken: ['Polish', 'English', 'Spanish']
  };
}
