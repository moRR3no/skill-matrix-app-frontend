export interface Employee {
  id: string;
  name: string;
  surname: string;
  manager?: Employee;
  date: Date;
  skills: string[];
  projects: string[];
}
