import { Injectable } from '@angular/core';
import {EMPLOYEES} from "../mocks/mock-employee";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }
}
