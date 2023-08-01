import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{

  employees: Employee[] = [];
  selectedEmployee?: Employee;

  constructor(private employeeService: EmployeeService) {}

  getHeroes(): void {
    this.employees = this.employeeService.getEmployees();
  }

  addEmployeeToList(employee: Employee): void {
    this.setId(employee);
    this.employees.push(employee);
  }

  updateEmployee (employee: Employee): void {
    const tempEmployee = this.getEmployeeById(employee.id);
    this.updateManagers(employee);
    if (tempEmployee) {
      this.employees.splice(
        this.employees.indexOf(tempEmployee), 1, employee);
    }
    this.selectedEmployee=undefined;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  private setId (employee: Employee): void {
    employee.id = crypto.randomUUID();
  }

  private getEmployeeById (id: string): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  private updateManagers(employeeManager: Employee) {
    this.employees.map((employee) => {
      if (employee.manager?.id == employeeManager.id) {
        employee.manager = employeeManager;
      }
    });
  }

}
