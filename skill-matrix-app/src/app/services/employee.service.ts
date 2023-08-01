import { Injectable } from '@angular/core';
import {EMPLOYEES} from "../mocks/mock-employee";
import {Employee} from "../models/employee";
import {SKILLS} from "../mocks/mock-skills";
import {PROJECTS} from "../mocks/mock-projects";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('EmployeeService: fetched employees');
    return employees;
  }

  getSkills(): Observable<string[]> {
    const skills = of(SKILLS);
    return skills;
  }

  getProjects(): Observable<string[]> {
    const projects = of(PROJECTS);
    return projects;
  }
}
