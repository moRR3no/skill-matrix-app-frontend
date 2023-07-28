import {Employee} from "../models/employee";

export const EMPLOYEES: Employee[] = [
  {id: crypto.randomUUID(), name: 'Emily Brooks', skills: ['Java'], languagesSpoken: ['English', 'French']},
  {id: crypto.randomUUID(), name: 'Alvaro Villa', skills: ['Python'], languagesSpoken: ['Spanish', 'French']},
  {id: crypto.randomUUID(), name: 'Kyle Rose', skills: ['Ruby'], languagesSpoken: ['English', 'German']},
  {id: crypto.randomUUID(), name: 'Dan Watson', skills: ['Scala', 'JavaScript'], languagesSpoken: ['English', 'Spanish']},
  {id: crypto.randomUUID(), name: 'Sam Page', skills: ['Kotlin'], languagesSpoken: ['English', 'French']}
];
