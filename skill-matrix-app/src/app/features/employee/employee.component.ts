import {Component} from '@angular/core';
import {Employee} from "../../models/employee";
import {EMPLOYEES} from "../../mocks/mock-employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employees: Employee[] = EMPLOYEES;
  selectedEmployee?: Employee;

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
