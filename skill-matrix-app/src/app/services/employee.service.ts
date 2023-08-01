import { Injectable } from '@angular/core';
import {EMPLOYEES} from "../mocks/mock-employee";
import {Employee} from "../models/employee";
import {SKILLS} from "../mocks/mock-skills";
import {PROJECTS} from "../mocks/mock-projects";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

  getSkills(): string[] {
    return SKILLS;
  }

  getProjects(): string[] {
    return PROJECTS;
  }
}
