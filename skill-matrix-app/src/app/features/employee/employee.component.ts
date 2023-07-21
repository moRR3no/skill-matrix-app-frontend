import {Component} from '@angular/core';
import {Employee} from "../../models/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent{

  employee: Employee = {
    id: 1,
    name: 'Konrado',
    skills: ['Java', 'Spring Boot'],
    languageSpoken: ['Polish', 'English', 'Spanish']
  };
}
