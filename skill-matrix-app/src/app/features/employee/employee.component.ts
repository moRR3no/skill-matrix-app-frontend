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

  addEmployeeList(employee: Employee): void {
    this.setId(employee);
    this.employees.push(employee);
  }

  updateEmployee (employee: Employee): void {
    const worker = this.getEmployeeById(employee.id);
    if (worker) {
      this.employees.splice(
        this.employees.indexOf(worker), 1, employee);
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

}
