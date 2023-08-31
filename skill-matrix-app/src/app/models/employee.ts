import {Skill} from "./skill";
import {Project} from "./project";

export interface Employee {
  id: string;
  firstName: string;
  surname: string;
  managerId?: string;
  date: Date;
  skills: Skill[];
  projects: Project[];
}
